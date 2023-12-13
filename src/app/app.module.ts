import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Templates/header/header/header.component';
import { HomeComponent } from './Templates/home/home.component';
import { CompititionListComponent } from './Pages/Compitition/compitition-list/compitition-list.component';
import { CreateCompititionComponent } from './Pages/Compitition/create-compitition/create-compitition.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MemberListComponent } from './Pages/Member/member-list/member-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CompititionListComponent,
    CreateCompititionComponent,
    MemberListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
