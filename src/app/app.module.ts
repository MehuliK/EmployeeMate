import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './user/user.component';
import {UserService} from './user/user.service';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { HomeBodyComponent } from './home-body/home-body.component';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterPipe} from './shared/filter.pipe';
import { DetailedPropertyPageComponent } from './detailed-property-page/detailed-property-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    RegistrationComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    UserProfileComponent,
    HomeBodyComponent,
    FilterPipe,
    DetailedPropertyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }