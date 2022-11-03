import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from "./user-list/user-list/user-list.component";
import {StudentFormComponent} from "./user-form/user-form/user-form.component";
import {StudentSearchComponent} from "./user-search/user-search.component";

const routes: Routes = [
  {path:'students',component:UserListComponent},
  {path:'addstudent',component:StudentFormComponent},
  {path:'searchstudent',component:StudentSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
