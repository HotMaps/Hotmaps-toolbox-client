import { RecoveryComponent } from './features/user-management/recovery/recovery.component';
/**
 * Created by lesly on 14.06.17.
 */

// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { Routes } from '@angular/router';
import { MapComponent } from './pages/map/component/map.component';
import { ActivateComponent } from './features/user-management/activate/activate.component';
import { BrowserDisclaimerComponent } from './features/browser-disclaimer/browser-disclaimer.component';


export const routes: Routes = [
  { path: '' , redirectTo: '/map', pathMatch: 'full' },
  { path: 'map' , component: MapComponent},
  { path: 'register' , component: MapComponent, children:[
    { path: ':token_activation' , component: ActivateComponent },
  ]},
  { path: 'recover' , component: MapComponent, children:[
    { path: ':token_recover' , component: RecoveryComponent },
  ]},
  { path: 'disclaimer_browser', component: BrowserDisclaimerComponent },
];
