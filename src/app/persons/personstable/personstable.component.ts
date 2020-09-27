import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PersonstableDataSource, PersonstableItem } from './personstable-datasource';

@Component({
  selector: 'app-personstable',
  templateUrl: './personstable.component.html',
  styleUrls: ['./personstable.component.css']
})
export class PersonstableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<PersonstableItem>;
  @Input() data;
  dataSource: PersonstableDataSource;
  displayedColumns = ['firstn', 'lastn'];

  ngOnInit() {
    this.dataSource = new PersonstableDataSource(this.data);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
