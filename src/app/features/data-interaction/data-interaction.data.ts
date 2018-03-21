// Improvement of coding style :
// listing import lines alphabetized by the module
import { DataInteractionClass } from './data-interaction.class';
import { business_name_wwtp, defaultLayer, populationLayerName, idDefaultLayer } from '../../shared/data.service';
import { zoomLevelDetectChange } from './../../shared/data.service';
export const DataInteractionArray: DataInteractionClass[] = [
 // {id: 11, name: 'Heat map', category: 'Comsumption'},

  {id: idDefaultLayer, name: 'Heat density total', category: 'Buildings', isSelected: true,
    workspaceName: defaultLayer, zoomLevel: 0},
  {id: 15, name: 'Heat density residential sector', category: 'Buildings', isSelected: false,
    workspaceName: 'heat_res_curr_density', zoomLevel: 0},
  {id: 16, name: 'Heat density non-residential sector', category: 'Buildings', isSelected: false,
    workspaceName: 'heat_nonres_curr_density', zoomLevel: 0},

  {id: 12, name: business_name_wwtp, category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'wwtp', zoomLevel: zoomLevelDetectChange},





  {id: 18, name: 'Gross floor area total', category: 'Buildings', isSelected: false,
    workspaceName: 'gfa_tot_curr_density', zoomLevel: 0},
  {id: 19, name: 'Gross floor area residential', category: 'Buildings', isSelected: false,
    workspaceName: 'gfa_res_curr_density', zoomLevel: 0},
  {id: 20, name: 'Gross floor area non residential', category: 'Buildings', isSelected: false,
    workspaceName: 'gfa_nonres_curr_density', zoomLevel: 0},


  {id: 18, name: 'Building volumes residential', category: 'Buildings', isSelected: false,
    workspaceName: 'vol_res_curr_density', zoomLevel: 0},
  {id: 19, name: 'Building volumes total', category: 'Buildings', isSelected: false,
    workspaceName: 'vol_tot_curr_density', zoomLevel: 0},
  {id: 20, name: 'Building volumes non-residential', category: 'Buildings', isSelected: false,
    workspaceName: 'vol_nonres_curr_density', zoomLevel: 0},
  /*
  {id: 20, name: 'Industrial Sites', category: 'Industrial', isSelected: false,
    workspaceName: 'industrial_sites_Industrial_Database', zoomLevel: 0},
*/
  {id: 14, name: 'Population total', category: 'Population', isSelected: false,
    workspaceName: populationLayerName, zoomLevel: 0},

  /*{id: 18, name: 'Biomass Potential', category: 'Res Potential', isSelected: false,
    workspaceName: 'potential_biomass', zoomLevel: 0},
  {id: 19, name: 'Municipal solid waste', category: 'Res Potential', isSelected: false,
    workspaceName: 'potential_municipal_solid_waste', zoomLevel: 0},
  {id: 20, name: 'Wind potential', category: 'Res Potential', isSelected: false,
    workspaceName: 'potential_wind', zoomLevel: 0},
  {id: 20, name: 'Solar potential', category: 'Res Potential', isSelected: false,
    workspaceName: 'potential_solar', zoomLevel: 0},*/
  {id: 20, name: 'Geothermal Potential', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'potential_shallowgeothermal', zoomLevel: 0},

];




