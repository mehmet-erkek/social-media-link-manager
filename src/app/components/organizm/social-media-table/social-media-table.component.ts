import { Component, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { TableHeaderComponent } from '../../atoms/table-header/table-header.component';
import { LinkValidatorDirective } from '../../../services/link-validator.directive';
import { UppercasePipe } from '../../../services/uppercase.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-social-media-table',
  standalone: true,
  imports: [TableHeaderComponent, CommonModule, MatTableModule, LinkValidatorDirective, UppercasePipe, MatInputModule, MatPaginatorModule],
  templateUrl: './social-media-table.component.html',
  styleUrl: './social-media-table.component.css'
})
export class SocialMediaTableComponent {

  @Input() dataSource!: MatTableDataSource<any>;
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  displayedColumns: string[] = ['link', 'name', 'description', 'actions'];


  ngOnInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  editAccount(account: any): void {
    this.edit.emit(account);
  }

  deleteAccount(account: any): void {
    this.delete.emit(account);
  }

}
