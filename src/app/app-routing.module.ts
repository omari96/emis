import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { AddComponent } from './institution/add/add.component';
import { ListComponent } from './institution/list/list.component';
import { UpdateComponent } from './institution/update/update.component';
import { UserAddComponent } from './user/add/user-add/user-add.component';
import { UserListComponent } from './user/list/user-list/user-list.component';
import { UserUpdateComponent } from './user/update/user-update/user-update.component';


const routes: Routes = [
  { path: '', component: LoginComponent, },
  { path: 'institutions-list', component: ListComponent },
  { path: 'institution-add', component: AddComponent },
  { path: 'institution-view/:id', component: UpdateComponent},
  { path: 'user-list', component:UserListComponent},
  { path: 'user-add', component:UserAddComponent},
  { path: 'User-view/:id', component:UserUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
