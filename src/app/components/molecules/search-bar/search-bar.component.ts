import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule} from '@angular/forms'; 

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule,MatInputModule,MatIconModule,MatButtonModule,FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  @Output() search = new EventEmitter<string>();

  searchQuery: string = '';

  constructor() { }

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.value !== null) {
      this.search.emit(inputElement.value);
    }
  }

}
