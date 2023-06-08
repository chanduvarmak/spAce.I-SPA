import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { ThanksComponent } from './thanks/thanks.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TestingComponent } from './testing/testing.component';
import { ContactComponent } from './contact/contact.component';
import { CollabcommComponent } from './collabcomm/collabcomm.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TheWorkCommComponent } from './the-work-comm/the-work-comm.component';
import { TheWorkResComponent } from './the-work-res/the-work-res.component';
import { CollabresComponent } from './collabres/collabres.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { AuthserviceService } from './authservice.service';
// import { ToastrModule } from 'ngx-toastr/public_api';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SignupComponent,
    HomeComponent,
    ThanksComponent,
    TestingComponent,
    ContactComponent,
    CollabcommComponent,
    UserdashboardComponent,
    AdminDashboardComponent,
    TheWorkCommComponent,
    TheWorkResComponent,
    CollabresComponent,
    AdminloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,
    ClipboardModule,
    DragDropModule,
    MatTooltipModule,
    MatExpansionModule,
    // ToastrModule.forRoot(),
    NgChartsModule,
  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
