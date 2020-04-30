import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {AuthGuard} from '../app/guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserComponent } from './components/user/user.component';
const routes: Routes = [
  { path: '', component:HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: UserComponent},
  {path: 'user-profile',component:UserProfileComponent},
  {path: 'home', component: HomeComponent,canActivate: [AuthGuard]},
  {path: 'register',component:RegistrationComponent},
  { path: '**', redirectTo: '' }
];

export const routing=RouterModule.forRoot(routes);
