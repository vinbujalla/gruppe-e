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


const routes: Routes = [
  {path:'users',component:UserListComponent},
  {path:'',component:LogInFensterComponent},
  {path:'register',component:RegisterFormComponent},
  {path:'2-faktor',component:FaktorAuthentifizierungComponent},
  {path: 'create-league',component: CreateLeagueComponent},
  {path: 'game-schedule', component:GameScheduleComponent},
  {path: 'edit-profile', component:EditProfileComponent},
  {path: 'home', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
