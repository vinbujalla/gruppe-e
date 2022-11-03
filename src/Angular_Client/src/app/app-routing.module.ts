import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from "./user-list/user-list/user-list.component";
import {UserFormComponent} from "./user-form/user-form/user-form.component";
import {UserSearchComponent} from "./user-search/user-search.component";

const routes: Routes = [
  {path:'students',component:UserListComponent},
  {path:'addstudent',component:UserFormComponent},
  {path:'searchstudent',component:UserSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
