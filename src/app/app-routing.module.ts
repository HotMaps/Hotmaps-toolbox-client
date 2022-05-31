/**
 * Created by lesly on 09.06.17.
 */

 // Improvement of coding style : 
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';




@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {


}
