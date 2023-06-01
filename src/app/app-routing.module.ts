import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ThanksComponent } from './thanks/thanks.component';
import { TestingComponent } from './testing/testing.component';
import { ContactComponent } from './contact/contact.component';
import { CollabcommComponent } from './collabcomm/collabcomm.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TheWorkCommComponent } from './the-work-comm/the-work-comm.component';
import { TheWorkResComponent } from './the-work-res/the-work-res.component';
import { CollabresComponent } from './collabres/collabres.component';
const routes: Routes = [
  // { path: 'header', component: HeaderComponent },
  // { path: 'home', component: HomeComponent },
  // { path: '', redirectTo: './home', pathMatch: 'full' },
  // { path: 'home', component: LoginComponent },
  // { path: 'home', component: AboutusComponent },

  { path: '', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'aboutus', component: AboutusComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'crud', component: CrudComponent },
  { path: 'thanks', component: ThanksComponent },
  { path: 'test', component: TestingComponent },
  { path: 'contact', component: ContactComponent },
  {path:'collabres',component:CollabresComponent},
  { path: 'collabcom', component: CollabcommComponent },
  { path: 'admindashboard', component: AdminDashboardComponent },
  { path: 'theworkcomm', component: TheWorkCommComponent },
  { path: 'theworkres', component: TheWorkResComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
