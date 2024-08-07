import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SocialMediaTableComponent } from '../../organizm/social-media-table/social-media-table.component';
import { SearchBarComponent } from '../../molecules/search-bar/search-bar.component';
import { AddAccountDialogComponent } from '../../molecules/add-account-dialog/add-account-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../../../services/local-storage.service';
import { ApiService } from '../../../services/api.service';
import { catchError, tap, throwError } from 'rxjs';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

interface SocialMediaAccount {
  id: string;
  link: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-social-media-manager',
  standalone: true,
  imports: [CommonModule, SocialMediaTableComponent, SearchBarComponent, MatDialogModule, AddAccountDialogComponent, MatPaginator, MatPaginatorModule],
  templateUrl: './social-media-manager.component.html',
  styleUrls: ['./social-media-manager.component.css']
})

export class SocialMediaManagerComponent implements AfterViewInit {
  addOrEdit: boolean = false
  link: any;
  socialMediaAccounts = new MatTableDataSource([
    { id: '', link: 'instagram.com/mobilerast/', name: 'instagram', description: 'We\'ll help you to finish your development project successfully.' },
    { id: '', link: 'tr.linkedin.com/company/rastmobile', name: 'linkedin', description: 'Hire vetted developers from Rast Mobile to scale up your tech projects.' },
    { id: '', link: 'behance.net/rastmobile', name: 'behance', description: 'Software Development Agency Rast Mobile Information Technology Ltd.' },
    { id: '', link: 'twitter.com/rastmobile', name: 'twitter', description: 'Software Development Agency Rast Mobile Information Technology Ltd.' }
  ]);

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private apiService: ApiService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.loadAccountsFromLocalStorage();
    this.fetchLinks();

    this.route.data.subscribe(data => {
      this.link = data['link'];
    });
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.socialMediaAccounts.paginator = this.paginator;
    }
  }

  // Local storage'a kaydedilmiş dataları tabloya çekme işlemi 
  loadAccountsFromLocalStorage() {
    const accounts = this.localStorageService.getItem('socialMediaAccounts');
    if (accounts) {
      this.socialMediaAccounts.data = accounts;
      if (this.paginator) {
        this.socialMediaAccounts.paginator = this.paginator;
      }
    }
  }

  // Apiden gelen veritabanına kaydedilmiş dataları çekme işlemi 
  fetchLinks() {
    this.apiService.getLinks().subscribe((data: SocialMediaAccount[]) => {
      this.socialMediaAccounts.data = data;
      if (this.paginator) {
        this.socialMediaAccounts.paginator = this.paginator;
      }
      this.saveAccountsToLocalStorage();
    });
  }

  // Local storage'a kaydetme işlemi
  saveAccountsToLocalStorage() {
    this.localStorageService.setItem('socialMediaAccounts', this.socialMediaAccounts.data);
  }

  // Tablonun içerisinde bulunan tüm metinlerin filtrelenmesini sağlıyor
  applyFilter(filterValue: string): void {
    this.socialMediaAccounts.filter = filterValue.trim().toLowerCase();
  }
  // Yeni hesap ekle butonundan sonra açılan popup
  openAddAccountDialog(): void {
    const dialogRef = this.dialog.open(AddAccountDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addAccount(result);
      }
    });
  }

  // Yeni hesap ekleme işlemi
  addAccount(newAccount: { id: string, link: string, name: string, description: string }): void {
    this.socialMediaAccounts.data = [...this.socialMediaAccounts.data, newAccount];
    this.saveAccountsToLocalStorage();
    if (this.paginator) {
      this.socialMediaAccounts.paginator = this.paginator;
    }
    this.fetchLinks()
    this.cdr.detectChanges();
  }

  // Edit ekranı inputların içi dolduruluyor. Veri tabanına kaydedilirse local storage'a da kaydediliyor.
  openEditAccountDialog(account: SocialMediaAccount): void {
    this.addOrEdit = true
    
    const dialogRef = this.dialog.open(AddAccountDialogComponent, {
      data: account
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Mevcut veriyi güncelle
        const index = this.socialMediaAccounts.data.findIndex(acc => acc.id === account.id);
        if (index >= 0) {
          this.socialMediaAccounts.data[index] = result;
          console.log(this.socialMediaAccounts.data[index])
          this.socialMediaAccounts.data = [...this.socialMediaAccounts.data]; // MatTableDataSource için yenile

          // Yerel depolamayı güncelle
          this.saveAccountsToLocalStorage();
          console.log('Tablo başarıyla güncellendi.');

          // Paginator'ı tekrar ayarla
          if (this.paginator) {
            this.socialMediaAccounts.paginator = this.paginator;
          }
          this.fetchLinks()
          this.cdr.detectChanges();


        }
      }
    })

  }


  // Hesap silme işlemi
  deleteAccount(account: SocialMediaAccount): void {
    const index = this.socialMediaAccounts.data.indexOf(account);
    if (index >= 0) {
      this.apiService.deleteLink(account.id).pipe(
        tap(() => {
          // Silme işlemi başarılı olduğunda yapılacak işlemler
          this.socialMediaAccounts.data.splice(index, 1);
          this.socialMediaAccounts.data = [...this.socialMediaAccounts.data];
          this.saveAccountsToLocalStorage();
          console.log('Bağlantı başarıyla silindi.');
          if (this.paginator) {
            this.socialMediaAccounts.paginator = this.paginator;
          }
          this.fetchLinks()
          this.cdr.detectChanges();
        }),
        catchError((error) => {
          // Hata durumunda yapılacak işlemler
          console.error('Silme işlemi sırasında bir hata oluştu:', error);
          return throwError(() => error); // Hata ile ilgili uygun işlemi yapın
        })
      ).subscribe();
    }
  }
}
