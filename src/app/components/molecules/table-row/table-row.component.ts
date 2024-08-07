import { Component, Input } from '@angular/core';
import { TableCellComponent } from '../../atoms/table-cell/table-cell.component';
@Component({
  selector: 'app-table-row',
  standalone: true,
  imports: [TableCellComponent],
  templateUrl: './table-row.component.html',
  styleUrl: './table-row.component.css'
})
export class TableRowComponent {

  @Input() cells: string[] | undefined;
}
