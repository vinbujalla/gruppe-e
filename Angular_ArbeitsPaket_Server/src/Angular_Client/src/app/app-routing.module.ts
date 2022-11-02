import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from "./test-list/test-list/user-list.component";
import {UserFormComponent} from "./test-form/test-form/user-form.component";
import {UserSearchComponent} from "./test-search/user-search.component";

const routes: Routes = [
  {path:'users',component:UserListComponent},
  {path:'adduser',component:UserFormComponent},
  {path:'searchusers',component:UserSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
