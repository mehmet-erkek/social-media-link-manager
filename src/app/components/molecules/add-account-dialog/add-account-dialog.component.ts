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
  }

  onSave(): void {
    if (this.addAccountForm.valid) {

      this.apiService.addLink(this.addAccountForm.value).pipe(
        tap(() => {
          // Kaydetme başarılı
          this.dialogRef.close();
          console.log('Bağlantı başarıyla kaydedildi.');
        }),
        catchError((error) => {
          // Hata aldığında consola yazdırır.
          console.error('Kaydetme işlemi sırasında bir hata oluştu:', error);
          return throwError(() => error);
        })
      ).subscribe();

    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
