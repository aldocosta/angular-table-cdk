import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { User }from './model/user';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'table-cdk';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource:MatTableDataSource<User>;
  displayedColumns = ['id','name'];
  uu: User[];
  selecionado:User = new User();
  constructor(private us:UserService){    
  }
  
  ngOnInit(){
    this.uu = [];
    let some:any;
    this.us.getUser().subscribe(user=> {
      some=user;
      this.uu = user;
      console.log(some);
    });
    let u = new User();    
    u.id = 3;
    u.title='Tonho';
    u.userId= 5;
    
    // this.uu.push(u);

    // u = new User();
    // u.id='2';
    // u.name='Costa';
     this.uu.push(u);

    this.dataSource = new MatTableDataSource(this.uu);    
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  add(){    
    let u = new User();    
    u.id = 2;
    u.title='Suzana';
    u.userId= 99;
    this.uu.push(u);
    this.dataSource.data.push(u);//
    this.dataSource._updateChangeSubscription();
  }

  dosome(row){
    this.selecionado=row;    
  }

  
}
