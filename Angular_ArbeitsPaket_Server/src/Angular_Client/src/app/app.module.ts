import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SEPHeaderComponent } from './sepheader/sepheader.component';
import { SepbottomComponent } from './sepbottom/sepbottom.component';
import { UserFormComponent } from './test-form/test-form/user-form.component';
import {FormsModule} from "@angular/forms";
import { UserListComponent } from './test-list/test-list/user-list.component';
import {HttpClientModule} from "@angular/common/http";
import {UserServiceService} from "./Service/user-service.service";
import { UserSearchComponent } from './test-search/user-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SEPHeaderComponent,
    SepbottomComponent,
    UserFormComponent,
    UserListComponent,
    UserSearchComponent
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
