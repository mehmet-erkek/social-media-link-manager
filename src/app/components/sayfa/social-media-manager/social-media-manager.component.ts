import { Component, ViewChild } from '@angular/core';
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
  styleUrl: './social-media-manager.component.css'
})
export class SocialMediaManagerComponent {

  link: any;
  socialMediaAccounts = new MatTableDataSource([
    { link: 'instagram.com/mobilerast/', name: 'instagram', description: 'We\'ll help you to finish your development project successfully.' },
    { link: 'tr.linkedin.com/company/rastmobile', name: 'linkedin', description: 'Hire vetted developers from Rast Mobile to scale up your tech projects.' },
    { link: 'behance.net/rastmobile', name: 'behance', description: 'Software Development Agency Rast Mobile Information Technology Ltd.' },
    { link: 'twitter.com/rastmobile', name: 'twitter', description: 'Software Development Agency Rast Mobile Information Technology Ltd.' }
  ]);


  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private dialog: MatDialog, private route: ActivatedRoute, private localStorageService: LocalStorageService, private apiService: ApiService) { }

  ngOnInit(): void {

    this.fetchLinks();
    this.loadAccountsFromLocalStorage();

    this.route.data.subscribe(data => {
      this.link = data['link'];
    });
  }

  //Local storage'a kaydedilmiş dataları tabloya çekme işlemi 
  loadAccountsFromLocalStorage() {
    const accounts = this.localStorageService.getItem('socialMediaAccounts');
    if (accounts) {
      this.socialMediaAccounts.data = accounts;
      this.fetchLinks()
      if (this.paginator) {
        this.socialMediaAccounts.paginator = this.paginator;
      }
    }
  }

  //apiden gelen veritabanına kaydedilmiş dataları çekme işlemi 
  fetchLinks() {
    this.apiService.getLinks().subscribe((data: any) => {
      this.socialMediaAccounts = new MatTableDataSource(data);
    });
  }

  //Local storage'a kaydetme işlemi
  saveAccountsToLocalStorage() {
    this.localStorageService.setItem('socialMediaAccounts', this.socialMediaAccounts.data);
  }

  //tablonun içerisinde bulunan tüm metinlerin filtrelenmesini sağlıyor
  applyFilter(filterValue: string): void {
    this.socialMediaAccounts.filter = filterValue.trim().toLowerCase();
  }

  //yeni hesap ekle butonundan sonra açılan popup
  openAddAccountDialog(): void {
    const dialogRef = this.dialog.open(AddAccountDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addAccount(result);
      }
    });
  }

  //yeni hesap ekleme işlemi
  addAccount(newAccount: { link: string, name: string, description: string }): void {
    this.socialMediaAccounts.data.push(newAccount);
    this.socialMediaAccounts.data = [...this.socialMediaAccounts.data];
    this.saveAccountsToLocalStorage();
  }

  //edit ekranı inputların içi dolduruluyor. Veri tabanına kaydedilise local storage a da kaydediliyor.
  openEditAccountDialog(account: SocialMediaAccount): void {
    const dialogRef = this.dialog.open(AddAccountDialogComponent, {
      data: account
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.socialMediaAccounts.data.indexOf(account);
        if (index >= 0) {

          this.apiService.updateLink(account.id, result).pipe(
            tap(() => {
              // Güncelleme işlemi başarılı olduğunda yapılacak işlemler
              this.socialMediaAccounts.data[index] = result;
              this.socialMediaAccounts.data = [...this.socialMediaAccounts.data];
              this.saveAccountsToLocalStorage();
              console.log('Bağlantı başarıyla güncellendi.');
            }),
            catchError((error) => {
              // Hata durumunda yapılacak işlemler
              console.error('Silme işlemi sırasında bir hata oluştu:', error);
              return throwError(() => error); // Hata ile ilgili uygun işlemi yapın
            })
          ).subscribe();

        }
      }
    });
  }

  //hesap silme işlemi
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
