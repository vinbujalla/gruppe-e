import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TIPPHeaderComponent } from './tippheader/tippheader.component';
import { TippbottomComponent } from './tippbottom/tippbottom.component';
import {FormsModule} from "@angular/forms";
import { UserListComponent } from './user-list/user-list/user-list.component';
import {HttpClientModule} from "@angular/common/http";
import {UserServiceService} from "./Service/user-service.service";
import { UserSearchComponent } from './user-search/user-search.component';
import { LogInFensterComponent } from './log-in-fenster/log-in-fenster.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FaktorAuthentifizierungComponent } from './faktor-authentifizierung/faktor-authentifizierung.component';
import { CreateLeagueComponent } from './create-league/create-league.component';
import { GameScheduleComponent } from './game-schedule/game-schedule.component';
import { HomeComponent } from './home/home.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';




@NgModule({
  declarations: [
    AppComponent,
    TIPPHeaderComponent,
    TippbottomComponent,
    UserListComponent,
    UserSearchComponent,
    LogInFensterComponent,
    RegisterFormComponent,
    FaktorAuthentifizierungComponent,
    CreateLeagueComponent,
    GameScheduleComponent,
    HomeComponent,
    LoginAdminComponent,



  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
