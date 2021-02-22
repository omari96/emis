import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [ListComponent, AddComponent, UpdateComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatPaginatorModule,
  ],
  exports: [
    MatTableModule,
  ]
})
export class InstitutionModule { }
