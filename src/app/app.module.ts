import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserComponent } from './components/user/user.component';
import {LoginService} from '../app/services/login/login.service';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HomeBodyComponent } from './components/home-body/home-body.component';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterPipe} from './shared/filter.pipe';
import { DetailedPropertyPageComponent } from './components/detailed-property-page/detailed-property-page.component';
import { AlertComponent } from './components/alert/alert.component';
import {AuthGuard} from '../app/guards/auth.guard';
//import { AlertService } from './services/alert/alert.service';
import {routing} from '../app/app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { CardDetailedBodyComponent } from './components/card-detailed-body/card-detailed-body.component';
import { FilterSearchComponent } from './components/filter-search/filter-search.component';
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
    DetailedPropertyPageComponent,
    AlertComponent,
    CardDetailedBodyComponent,
    FilterSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    routing
    //FontAwesomeModule
  ],
  exports:[
    MatIconModule
  ],
  providers: [
    AuthGuard,
    LoginService,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
