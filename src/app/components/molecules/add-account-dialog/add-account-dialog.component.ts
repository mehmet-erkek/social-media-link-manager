import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';

import { MatDialogRef } from '@angular/material/dialog';
import { catchError, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-add-account-dialog',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatInputModule, CommonModule, MatDialogModule, ReactiveFormsModule],
  templateUrl: './add-account-dialog.component.html',
  styleUrl: './add-account-dialog.component.css'
})
export class AddAccountDialogComponent {
  addAccountForm: FormGroup;
  fakeData = {
    id: null,
    link: null,
    name: null,
    description: null
  }

  isEdit: boolean = false
  constructor(
    public dialogRef: MatDialogRef<AddAccountDialogComponent>,
    private fb: FormBuilder,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) {

    this.addAccountForm = this.fb.group({
      link: [data?.link || '', Validators.required],
      name: [data?.name || '', Validators.required],
      description: [data?.description || '', Validators.required]
    });

    if (data) {
      this.isEdit = true
      this.fakeData.id = data.id
      this.fakeData.link = this.addAccountForm.value.link
      this.fakeData.name = this.addAccountForm.value.name
      this.fakeData.description = this.addAccountForm.value.description
    }
  }

  onSave(): void {
    if (this.isEdit == false) {
      if (this.addAccountForm.valid) {

        this.apiService.addLink(this.addAccountForm.value).pipe(
          tap(() => {
            // Kaydetme başarılı
            this.dialogRef.close(this.addAccountForm.value);
            console.log('Bağlantı başarıyla kaydedildi.');
          }),
          catchError((error) => {
            // Hata aldığında consola yazdırır.
            console.error('Kaydetme işlemi sırasında bir hata oluştu:', error);
            return throwError(() => error);
          })
        ).subscribe();

      }
    } else {

      if (this.fakeData.id) {
        //edit işlemi sırasında element id yi form ile birleştirmek için sahte bir form oluşturdum
        let fakeForm = this.fb.group({
          id: this.fakeData.id,
          link: this.addAccountForm.value.link,
          name: this.addAccountForm.value.name,
          description: this.addAccountForm.value.description
        });

        this.apiService.updateLink(this.fakeData.id, fakeForm.value).pipe(
          tap(() => {
            
            // Güncelleme işlemi başarılı olduğunda yapılacak işlemler
            this.dialogRef.close(fakeForm.value);
            console.log('Bağlantı başarıyla güncellendi.');
          }),
          catchError((error) => {
            // Hata durumunda yapılacak işlemler
            console.error('Güncelleme işlemi sırasında bir hata oluştu:', error);
            return throwError(() => error); // Hata ile ilgili uygun işlemi yapın
          })
        ).subscribe();
      }
    }

  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
