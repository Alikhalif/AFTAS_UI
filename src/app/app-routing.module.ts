import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Templates/home/home.component';
import { CompititionListComponent } from './Pages/Compitition/compitition-list/compitition-list.component';
import { CreateCompititionComponent } from './Pages/Compitition/create-compitition/create-compitition.component';
import { MemberListComponent } from './Pages/Member/member-list/member-list.component';
import { MemberCreateComponent } from './Pages/Member/member-create/member-create.component';
import { StartCompititionComponent } from './Pages/Hunting/start-compitition/start-compitition.component';
import { CreateHuntingComponent } from './Pages/Hunting/create-hunting/create-hunting.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page' },

  //compitition
  { path: 'compitition-list', component: CompititionListComponent, title: 'Compitition List' },
  { path: 'compitition-create', component: CreateCompititionComponent, title: 'Compitition Create' },

  //member
  { path: 'member-list', component: MemberListComponent, title: 'Member List' },
  { path: 'member-create', component: MemberCreateComponent, title: 'Member Create' },

  //hunting
  { path: 'compitition-start', component: StartCompititionComponent, title: 'Compitition Start' },
  { path: 'hunting-create/:code', component: CreateHuntingComponent, title: 'Hunting Create' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
