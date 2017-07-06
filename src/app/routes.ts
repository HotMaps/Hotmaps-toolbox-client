/**
 * Created by lesly on 14.06.17.
 */

import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MapComponent } from './pages/map/map.component';
import { ModuleServiceListComponent } from './pages/map/modules-service/modules-service-list.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {path: '' , redirectTo: '/map', pathMatch: 'full'},
  {path: 'login' , component: LoginComponent},
  {path: 'map' , component: MapComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'modules' , component: ModuleServiceListComponent},
];
