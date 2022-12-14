import {EnvironmentInjector, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from "./user-list/user-list/user-list.component";
import {UserSearchComponent} from "./user-search/user-search.component";
import {LogInFensterComponent} from "./log-in-fenster/log-in-fenster.component";
import {RegisterFormComponent} from "./register-form/register-form.component";
import {FaktorAuthentifizierungComponent} from "./faktor-authentifizierung/faktor-authentifizierung.component";
import {CreateLeagueComponent} from "./create-league/create-league.component";
import {GameScheduleComponent} from "./game-schedule/game-schedule.component";
import {EditProfileComponent} from "./edit-profile/edit-profile.component";
import {HomeComponent} from "./home/home.component";
import {LoginAdminComponent} from "./login-admin/login-admin.component";
import {RegisterAdminComponent} from "./register-admin/register-admin.component";
import {DashboardComponent} from "./dashboard/dashboard.component";


const routes: Routes = [
  {path:'users',component:UserListComponent},
  {path:'login/user',component:LogInFensterComponent},
  {path:'register/user',component:RegisterFormComponent},
  {path:'2-faktor',component:FaktorAuthentifizierungComponent},
  {path: 'create-league',component: CreateLeagueComponent},
  {path: 'game-schedule', component:GameScheduleComponent},
  {path: 'edit-profile', component:EditProfileComponent},
  {path: '', component:HomeComponent},
  {path: 'login/admin', component: LoginAdminComponent},
  {path: 'register/admin', component: RegisterAdminComponent},
  {path:'dashboard/admin', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
