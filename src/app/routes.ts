/**
 * Created by lesly on 14.06.17.
 */

import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { ModuleServiceListComponent } from './map/modules-service/modules-service-list.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {path: '' , redirectTo: '/map', pathMatch: 'full'},
  {path: 'login' , component: LoginComponent},
  {path: 'map' , component: MapComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'modules' , component: ModuleServiceListComponent},
];
