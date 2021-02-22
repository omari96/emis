import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SideBarModule } from './side-bar/side-bar.module';
import { InstitutionModule } from '../institution/institution.module';
import { UserModule } from '../user/user.module';
import { ContentModule } from './content/content.module';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,

    SideBarModule,
    ContentModule,
    InstitutionModule,
    UserModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
