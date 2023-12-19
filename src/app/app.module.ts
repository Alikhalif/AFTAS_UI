import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Templates/header/header/header.component';
import { HomeComponent } from './Templates/home/home.component';
import { CompititionListComponent } from './Pages/Compitition/compitition-list/compitition-list.component';
import { CreateCompititionComponent } from './Pages/Compitition/create-compitition/create-compitition.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MemberListComponent } from './Pages/Member/member-list/member-list.component';
import { MemberCreateComponent } from './Pages/Member/member-create/member-create.component';
import { StartCompititionComponent } from './Pages/Hunting/start-compitition/start-compitition.component';
import { CreateHuntingComponent } from './Pages/Hunting/create-hunting/create-hunting.component';
import { PodiumComponent } from './Pages/podium/podium.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CompititionListComponent,
    CreateCompititionComponent,
    MemberListComponent,
    MemberCreateComponent,
    StartCompititionComponent,
    CreateHuntingComponent,
    PodiumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
