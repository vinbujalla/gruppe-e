import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SEPHeaderComponent } from './tippheader/tippheader.component';
import { TippbottomComponent } from './tippbottom/tippbottom.component';
import { StudentFormComponent } from './user-form/user-form/user-form.component';
import {FormsModule} from "@angular/forms";
import { UserListComponent } from './user-list/user-list/user-list.component';
import {HttpClientModule} from "@angular/common/http";
import {StudentServiceService} from "./Service/user-service.service";
import { StudentSearchComponent } from './user-search/user-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SEPHeaderComponent,
    TippbottomComponent,
    StudentFormComponent,
    UserListComponent,
    StudentSearchComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [StudentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
