import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridComponent } from './uc/grid/grid.component';
import { MatFormFieldModule,MatInputModule , MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule } from '@angular/material';
import { GridoComponent } from './uc/grido/grido.component';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GridoComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
