import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './list/user-list/user-list.component';
import { UserAddComponent } from './add/user-add/user-add.component';
import { UserUpdateComponent } from './update/user-update/user-update.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [ UserListComponent, UserAddComponent, UserUpdateComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,

    AppRoutingModule,
    
  ],
  exports: [
    MatTableModule,
  ]
})
export class UserModule { }
