import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-account-button',
  standalone: true,
  imports: [CommonModule,MatButtonModule],
  templateUrl: './add-account-button.component.html',
  styleUrl: './add-account-button.component.css'
})
export class AddAccountButtonComponent {
  @Output() click = new EventEmitter<void>();

  onClick(): void {
    this.click.emit();
  }
}
