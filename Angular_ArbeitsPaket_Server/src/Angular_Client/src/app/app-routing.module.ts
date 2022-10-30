import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentListComponent} from "./test-list/test-list/student-list.component";
import {StudentFormComponent} from "./test-form/test-form/student-form.component";
import {StudentSearchComponent} from "./test-search/student-search.component";

const routes: Routes = [
  {path:'students',component:StudentListComponent},
  {path:'addstudent',component:StudentFormComponent},
  {path:'searchstudent',component:StudentSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
