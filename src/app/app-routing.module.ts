import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { TheWorkComponent } from './the-work/the-work.component';
import { ThecollabComponent } from './thecollab/thecollab.component';
import { CommercialComponent } from './commercial/commercial.component';
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
  { path: 'contactus', component: ContactusComponent },
  { path: 'home', component: HomeComponent },
  { path: 'the-work', component: TheWorkComponent },
  { path: 'thecollab', component: ThecollabComponent },
  { path: 'commercial', component: CommercialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
