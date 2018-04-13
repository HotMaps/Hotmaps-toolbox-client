// Improvement of coding style :
// listing import lines alphabetized by the module
import { DataInteractionClass } from './data-interaction.class';
import { business_name_wwtp, defaultLayer, populationLayerName, idDefaultLayer } from '../../shared/data.service';
import { zoomLevelDetectChange, styleNameHeat } from './../../shared/data.service';

export const DataInteractionArray: DataInteractionClass[] = [
 // {id: 11, name: 'Heat map', category: 'Comsumption'},

  {id: idDefaultLayer, name: 'Heat density total', category: 'Buildings', isSelected: true,
    workspaceName: defaultLayer, zoomLevel: 0, styleName: styleNameHeat},
  {id: 15, name: 'Heat density residential sector', category: 'Buildings', isSelected: false,
    workspaceName: 'heat_res_curr_density', zoomLevel: 0, styleName: styleNameHeat},
  {id: 16, name: 'Heat density non-residential sector', category: 'Buildings', isSelected: false,
    workspaceName: 'heat_nonres_curr_density', zoomLevel: 0, styleName: styleNameHeat},
  {id: 12, name: business_name_wwtp, category: 'Res Potential', isSelected: false,
    workspaceName: 'wwtp', zoomLevel: zoomLevelDetectChange, styleName: 'WWTP_2015_style'},
  {id: 1434, name: 'Gross floor area total', category: 'Buildings', isSelected: false,
    workspaceName: 'gfa_tot_curr_density', zoomLevel: 0, styleName: styleNameHeat},
  {id: 132769, name: 'Gross floor area residential', category: 'Buildings', isSelected: false,
    workspaceName: 'gfa_res_curr_density', zoomLevel: 0, styleName: styleNameHeat},
  {id: 27650, name: 'Gross floor area non residential', category: 'Buildings', isSelected: false,
    workspaceName: 'gfa_nonres_curr_density', zoomLevel: 0, styleName: styleNameHeat},
  {id: 15458, name: 'Building volumes residential', category: 'Buildings', isSelected: false,
    workspaceName: 'vol_res_curr_density', zoomLevel: 0, styleName: styleNameHeat},
  {id: 65, name: 'Building volumes total', category: 'Buildings', isSelected: false,
    workspaceName: 'vol_tot_curr_density', zoomLevel: 0, styleName: styleNameHeat},
  {id: 7656543, name: 'Building volumes non-residential', category: 'Buildings', isSelected: false,
    workspaceName: 'vol_nonres_curr_density', zoomLevel: 0, styleName: styleNameHeat},

  {id: 45345, name: 'Industrial Sites Emmissions', category: 'Industrial', isSelected: false,
    workspaceName: 'industrial_database_emissions', zoomLevel: 0, styleName: 'generic'},
  {id: 20, name: 'Industrial Sites Excess Heat', category: 'Industrial', isSelected: false,
    workspaceName: 'industrial_database_excess_heat', zoomLevel: 0, styleName: 'generic'},

  {id: 565, name: 'Population total', category: 'Population', isSelected: false,
    workspaceName: populationLayerName, zoomLevel: 0, styleName: styleNameHeat},

  {id: 565, name: 'Biomass Potential', category: 'R.E.S Potential', isSelected: false,
    workspaceName: 'potential_biomass', zoomLevel: 0, styleName: 'null'},
  {id: 6556, name: 'Municipal solid waste', category: 'R.E.S Potential', isSelected: false,
    workspaceName: 'potential_municipal_solid_waste', zoomLevel: 0, styleName: 'null'},
  {id: 3454, name: 'Wind potential', category: 'R.E.S Potential', isSelected: false,
    workspaceName: 'potential_wind', zoomLevel: 0, styleName: 'null'},
  {id: 656443, name: 'Solar potential', category: 'R.E.S Potential', isSelected: false,
    workspaceName: 'potential_solar', zoomLevel: 0, styleName: 'null'},
  {id: 345, name: 'Geothermal Potential', category: 'R.E.S Potential', isSelected: false,
    workspaceName: 'potential_shallowgeothermal', zoomLevel: 0, styleName: 'thermomap_style'},

];




