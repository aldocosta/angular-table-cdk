import { Component, Input, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { User } from '../../model/user';

@Component({
  selector: 'app-grido',
  templateUrl: './grido.component.html',
  styleUrls: ['./grido.component.css']
})
export class GridoComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource:MatTableDataSource<User>;
  displayedColumns = ['userId','title'];
  uu: User[];
  selected:User = new User();
  @Output() selecionar: EventEmitter<any> = new EventEmitter(); 
  @Input() _datasource : MatTableDataSource<User>;

  constructor() { }

  ngOnInit() {
     this.dataSource = this._datasource;
     this._datasource.paginator = this.paginator;
     this._datasource.sort = this.sort;
  }

  selecionarLinha(row){
    this.selecionar.emit(row);
    return false;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
}
