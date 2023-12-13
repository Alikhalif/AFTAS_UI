import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Templates/home/home.component';
import { CompititionListComponent } from './Pages/Compitition/compitition-list/compitition-list.component';
import { CreateCompititionComponent } from './Pages/Compitition/create-compitition/create-compitition.component';
import { MemberListComponent } from './Pages/Member/member-list/member-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page' },

  //compitition
  { path: 'compitition-list', component: CompititionListComponent, title: 'Compitition List' },
  { path: 'compitition-create', component: CreateCompititionComponent, title: 'Compitition Create' },

  //member
  { path: 'member-list', component: MemberListComponent, title: 'Member List' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
