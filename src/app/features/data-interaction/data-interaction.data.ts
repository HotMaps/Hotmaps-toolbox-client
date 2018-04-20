// Improvement of coding style :
// listing import lines alphabetized by the module
import { DataInteractionClass } from './data-interaction.class';
import { business_name_wwtp, defaultLayer, populationLayerName, idDefaultLayer } from '../../shared/data.service';
import { zoomLevelDetectChange, styleNameHeat } from './../../shared/data.service';

export const DataInteractionArray: DataInteractionClass[] = [
 // {id: 11, name: 'Heat map', category: 'Comsumption'},

  {id: idDefaultLayer, name: 'Heat density total', category: 'Buildings', isSelected: true,
    workspaceName: defaultLayer, zoomLevel: 0, ref:['summary', 'demand',], styleName: styleNameHeat},
  {id: 15, name: 'Heat density residential sector', category: 'Buildings', isSelected: false,
    workspaceName: 'heat_res_curr_density', zoomLevel: 0, ref: ['summary', 'demand'], styleName: styleNameHeat},
  {id: 16, name: 'Heat density non-residential sector', category: 'Buildings', isSelected: false,
    workspaceName: 'heat_nonres_curr_density', zoomLevel: 0, ref: ['summary', 'demand'], styleName: styleNameHeat},

  {id: 12, name: business_name_wwtp + ' Power', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'wwtp_power', zoomLevel: zoomLevelDetectChange, ref: ['potential'], styleName: styleNameHeat},
  {id: 12, name: business_name_wwtp + ' Capacity', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'wwtp_capacity',  zoomLevel: zoomLevelDetectChange, ref: ['potential'], styleName: styleNameHeat},
  {id: 18, name: 'Gross floor area total', category: 'Buildings', isSelected: false,
    workspaceName: 'gfa_tot_curr_density', zoomLevel: 0, ref: ['summary'], styleName: styleNameHeat},
  {id: 19, name: 'Gross floor area residential', category: 'Buildings', isSelected: false,
    workspaceName: 'gfa_res_curr_density', zoomLevel: 0, ref: ['demand'], styleName: styleNameHeat},
  {id: 20, name: 'Gross floor area non residential', category: 'Buildings', isSelected: false,
    workspaceName: 'gfa_nonres_curr_density', zoomLevel: 0, ref: ['demand'], styleName: styleNameHeat},
  {id: 19, name: 'Building volumes total', category: 'Buildings', isSelected: false,
    workspaceName: 'vol_tot_curr_density', zoomLevel: 0, ref: ['summary'], styleName: 'vol_tot_curr_density'},

  {id: 18, name: 'Building volumes residential', category: 'Buildings', isSelected: false,
    workspaceName: 'vol_res_curr_density', zoomLevel: 0, ref: ['demand'], styleName: 'vol_tot_curr_density'},

  {id: 20, name: 'Building volumes non-residential', category: 'Buildings', isSelected: false,
    workspaceName: 'vol_nonres_curr_density', zoomLevel: 0, ref: ['demand'], styleName: 'vol_tot_curr_density'},


  {id: 45345, name: 'Industrial Sites Emissions', category: 'Industrial', isSelected: false,
    workspaceName: 'industrial_database_emissions', zoomLevel: 0, ref: ['industry'], styleName: 'industrial_database_emissions_ets_2014'},
  {id: 20, name: 'Industrial Sites Excess Heat', category: 'Industrial', isSelected: false,
    workspaceName: 'industrial_database_excess_heat', zoomLevel: 0, ref: ['industry'], styleName: 'industrial_database_emissions_ets_2014'},

  {id: 45345, name: 'Industrial Sites Compagny Name', category: 'Industrial', isSelected: false,
    workspaceName: 'industrial_database_compagnyname', zoomLevel: 0, ref: ['industry'], styleName: 'industrial_database_sector_name'},
  {id: 20, name: 'Industrial Sites Subsector', category: 'Industrial', isSelected: false,
    workspaceName: 'industrial_database_subsector', zoomLevel: 0, ref: ['industry'], styleName: 'industrial_database_sector'},
  {id: 14, name: 'Population total', category: 'Population', isSelected: false,
    workspaceName: populationLayerName, zoomLevel: 0, ref: ['summary', 'demand'], styleName: 'pop_tot_curr_density_V2'},

  {id: 18, name: 'Biomass Potential', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'potential_biomass', zoomLevel: 0, ref: ['potential'], styleName: styleNameHeat},
  {id: 19, name: 'Municipal solid waste', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'potential_municipal_solid_waste', zoomLevel: 0, ref: ['potential'], styleName: styleNameHeat},
  {id: 20, name: 'Wind potential', category: 'Res Potential', isSelected: false,
    workspaceName: 'potential_wind', zoomLevel: 0, ref: ['potential'], styleName: styleNameHeat},
  {id: 20, name: 'Solar potential', category: 'Res Potential', isSelected: false,
    workspaceName: 'potential_solar', zoomLevel: 0, ref: ['potential'], styleName: styleNameHeat},
  {id: 20, name: 'Geothermal Potential', category: 'Res Potential', isSelected: false,
    workspaceName: 'potential_shallowgeothermal', zoomLevel: 0, ref: ['potential'], styleName: 'Geothermal Heat Conductivity [W/mK]'},

];




