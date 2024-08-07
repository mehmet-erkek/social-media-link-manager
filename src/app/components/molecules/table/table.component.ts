import { Component, Input } from '@angular/core';
import { TableRowComponent } from '../table-row/table-row.component';
import { TableHeaderComponent } from '../../atoms/table-header/table-header.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableRowComponent,TableHeaderComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  @Input() headers: string[] | undefined;
  @Input() rows: string[][] | undefined;
}
