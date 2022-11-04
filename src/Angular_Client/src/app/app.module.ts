import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TIPPHeaderComponent } from './tippheader/tippheader.component';
import { TippbottomComponent } from './tippbottom/tippbottom.component';
import { UserFormComponent } from './user-form/user-form/user-form.component';
import {FormsModule} from "@angular/forms";
import { UserListComponent } from './user-list/user-list/user-list.component';
import {HttpClientModule} from "@angular/common/http";
import {UserServiceService} from "./Service/user-service.service";
import { UserSearchComponent } from './user-search/user-search.component';
import { LogInFensterComponent } from './log-in-fenster/log-in-fenster.component';


@NgModule({
  declarations: [
    AppComponent,
    TIPPHeaderComponent,
    TippbottomComponent,
    UserFormComponent,
    UserListComponent,
    UserSearchComponent,
    LogInFensterComponent,

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
