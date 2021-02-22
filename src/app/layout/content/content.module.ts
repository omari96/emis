import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from 'src/app/authentication/authentication.module';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,

    RouterModule,
    MatTableModule,
    AuthenticationModule,
  ],
  exports: [
    ContentComponent,
    MatTableModule,
  ]
})
export class ContentModule { }
