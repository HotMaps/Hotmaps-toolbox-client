// Improvement of coding style :
// listing import lines alphabetized by the module
import { DataInteractionClass } from './layers-interaction.class';
import { business_name_wwtp, defaultLayer, populationLayerName,
  idDefaultLayer, calculation_module_category, defaultLayerType }
   from '../../shared/data.service';
import { zoomLevelDetectChange, styleNameHeat } from './../../shared/data.service';
<<<<<<< HEAD
=======
export const potential_type = 'potential';
export const wwtp_type = 'wwtp';
export const gfa_type = 'gfa';
export const industry_type = 'industy';
export const population_type = 'population';

>>>>>>> feature-typelayer
export const DataInteractionArray: DataInteractionClass[] = [
 // {id: 11, name: 'Heat map', category: 'Comsumption'},

  {id: idDefaultLayer, name: 'Heat density total', category: 'Buildings', isSelected: true,
    workspaceName: defaultLayer, zoomLevel: 0, ref: ['overall', 'demand'], styleName: styleNameHeat, layer_type: defaultLayerType},

  /*{id: 15, name: 'Heat density residential sector', category: 'Buildings', isSelected: false,
    workspaceName: 'heat_res_curr_density', zoomLevel: 0, ref: [ 'demand'], styleName: styleNameHeat},*/

  /*{id: 16, name: 'Heat density non-residential sector', category: 'Buildings', isSelected: false,
    workspaceName: 'heat_nonres_curr_density', zoomLevel: 0, ref: [ 'demand'], styleName: styleNameHeat},*/

  {id: 12, name: business_name_wwtp + ' Power', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'wwtp_power', zoomLevel: zoomLevelDetectChange, ref: ['overall', 'potential'],
    styleName: styleNameHeat, layer_type:wwtp_type},
  {id: 12, name: business_name_wwtp + ' Capacity', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'wwtp_capacity',  zoomLevel: zoomLevelDetectChange, ref: ['overall', 'potential'],
    styleName: styleNameHeat, layer_type:wwtp_type},

  {id: 18, name: 'Gross floor area total', category: 'Buildings', isSelected: false,
    workspaceName: 'gfa_tot_curr_density_tif', zoomLevel: 0, ref: ['overall'],
    styleName: 'gfa_tot_curr_density_tif', layer_type:gfa_type},
  {id: 19, name: 'Gross floor area residential', category: 'Buildings', isSelected: false,
    workspaceName: 'gfa_res_curr_density_tif', zoomLevel: 0, ref: ['overall', 'demand'],
    styleName: 'gfa_res_curr_density_tif', layer_type:gfa_type},
  {id: 20, name: 'Gross floor area non residential', category: 'Buildings', isSelected: false,
    workspaceName: 'gfa_nonres_curr_density_tif', zoomLevel: 0, ref: ['overall', 'demand'],
    styleName: 'gfa_nonres_curr_density_tif', layer_type:gfa_type},
  {id: 19, name: 'Building volumes total', category: 'Buildings', isSelected: false,
    workspaceName: 'vol_tot_curr_density_tif', zoomLevel: 0, ref: ['overall'],
    styleName: 'vol_tot_curr_density', layer_type:''},

  {id: 18, name: 'Building volumes residential', category: 'Buildings', isSelected: false,
    workspaceName: 'vol_res_curr_density_tif', zoomLevel: 0, ref: ['overall', 'demand'],
    styleName: 'vol_res_curr_density_tif', layer_type:''},

 /* {id: 20, name: 'Building volumes non-residential', category: 'Buildings', isSelected: false,
    workspaceName: 'vol_nonres_curr_density_tif', zoomLevel: 0, ref: ['overall', 'demand'], styleName: 'vol_res_curr_density_tif', layer_type:[]},*/
  {id: 45345, name: 'Industrial Sites Emissions', category: 'Industry', isSelected: false,

    workspaceName: 'industrial_database_emissions', zoomLevel: 0, ref: ['overall', 'industry'],
    styleName: 'industrial_database_emissions_ets_2014', layer_type:industry_type},
  {id: 20, name: 'Industrial Sites Excess Heat', category: 'Industry', isSelected: false,
    workspaceName: 'industrial_database_excess_heat', zoomLevel: 0, ref: ['overall', 'industry'],
    styleName: 'industrial_database_emissions_ets_2014', layer_type:industry_type},
  {id: 45345, name: 'Industrial Sites Company Name', category: 'Industry', isSelected: false,
    workspaceName: 'industrial_database_compagnyname', zoomLevel: 0, ref: ['overall', 'industry'],
    styleName: 'industrial_database_sector_name', layer_type:industry_type},
  {id: 20, name: 'Industrial Sites Subsector', category: 'Industry', isSelected: false,
    workspaceName: 'industrial_database_subsector', zoomLevel: 0, ref: ['overall', 'industry'],
    styleName: 'industrial_database_sector', layer_type:industry_type},
  {id: 14, name: 'Population total', category: 'Population', isSelected: false,
    workspaceName: populationLayerName, zoomLevel: 0, ref: ['overall', 'demand'],
    styleName: 'pop_tot_curr_density_V2', layer_type:population_type},

  /*{id: 18, name: 'Biomass Potential', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'potential_biomass', zoomLevel: 0, ref: ['potential'], styleName: styleNameHeat, layer_type:[]},
  {id: 19, name: 'Municipal solid waste', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'potential_municipal_solid_waste', zoomLevel: 0, ref: ['potential'], styleName: styleNameHeat, layer_type:[]},
  {id: 20, name: 'Wind potential', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'potential_wind', zoomLevel: 0, ref: ['potential'], styleName: styleNameHeat, layer_type:[]},*/
  {id: 20, name: 'Solar potential', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'solar_optimal_total', zoomLevel: 0, ref: ['overall', 'potential'], styleName: styleNameHeat, layer_type:''},
  {id: 20, name: 'Geothermal Potential Heat Conductivity ', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'potential_shallowgeothermal_heat_cond', zoomLevel: 0, ref: ['overall', 'potential'],
    styleName: 'potential_shallowgeothermal_heat_cond', layer_type:potential_type},

  {id: 20, name: 'Geothermal Potential Hc Class ', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'potential_shallowgeothermal_hc_class', zoomLevel: 0, ref: ['overall', 'potential'],
    styleName: 'potential_shallowgeothermal_hc_class', layer_type:potential_type},
  /*{id: 20, name: 'Cooling degree days', category: 'climate', isSelected: false,
    workspaceName: 'cdd_curr_tif', zoomLevel: 0, ref: ['overall', 'climate'], styleName: 'cdd_curr_tif', layer_type:[]},*/
  {id: 20, name: 'Heating degree days', category: 'climate', isSelected: false,
    workspaceName: 'hdd_curr_tif', zoomLevel: 0, ref: ['overall', 'climate'],
    styleName: 'hdd_curr_tif', layer_type:''},

  {id: 20, name: 'Electricity CO2 emissions "Data on NUTS0"', category: 'Electricity', isSelected: false,
    workspaceName: 'yearly_co2_emission', zoomLevel: 0, ref: ['overall', 'electricity'],
    styleName: 'yearly_co2_emission', layer_type:''},

  /* {id: 20, name: 'CM District Heating Potential', category: 'Calculation module', isSelected: false,
    workspaceName: 'CM District Heating Potential', zoomLevel: 0, ref: ['overall', 'demand', calculation_module_category], styleName: '',layer_type:[]}, */
];
export const cm_default_layer = {
    id: 21, name: '',
    category: calculation_module_category,
    isSelected: true,
    workspaceName: '',
    zoomLevel: 0, ref: ['overall', calculation_module_category],
    styleName: ''
}





