// Improvement of coding style :
// listing import lines alphabetized by the module
import { DataInteractionClass } from './layers-interaction.class';
import { business_name_wwtp, defaultLayer, populationLayerName,
  idDefaultLayer, calculation_module_category, defaultLayerType } from '../../shared/data.service';
import { zoomLevelDetectChange, styleNameHeat } from './../../shared/data.service';
export const potential_type = 'potential';
export const wwtp_type = 'wwtp';
export const gfa_type = 'gross_floor_area';
export const industry_type = 'industy';
export const population_type = 'population';
export const building_volume_type = 'building_volumes';
export const gitlabUrl = 'https://gitlab.com/hotmaps/';

export const DataInteractionArray: DataInteractionClass[] = [

// Buildings
    {id: idDefaultLayer, name: 'Heat density total', category: 'Buildings', isSelected: true,
      workspaceName: 'heat_tot_curr_density', zoomLevel: 0, ref: ['overall', 'demand'], styleName: 'heat_density',layer_type: defaultLayerType},
    {id: 15, name: 'Heat density residential sector', category: 'Buildings', isSelected: false,
      workspaceName: 'heat_res_curr_density', zoomLevel: 0, ref: ['overall','demand'], styleName: 'heat_density',layer_type: defaultLayerType},
    {id: 16, name: 'Heat density non-residential sector', category: 'Buildings', isSelected: false,
      workspaceName: 'heat_nonres_curr_density', zoomLevel: 0, ref: ['overall', 'demand'], styleName: 'heat_density',layer_type: defaultLayerType},

    {id: 18, name: 'Gross floor area total', category: 'Buildings', isSelected: false,
      workspaceName: 'gfa_tot_curr_density', zoomLevel: 0, ref: ['overall', 'buildings'], styleName: 'gross_floor_area',layer_type: defaultLayerType},
    {id: 19, name: 'Gross floor area residential', category: 'Buildings', isSelected: false,
      workspaceName: 'gfa_res_curr_density', zoomLevel: 0, ref: ['overall', 'buildings'], styleName: 'gross_floor_area',layer_type: defaultLayerType},
    {id: 20, name: 'Gross floor area non-residential', category: 'Buildings', isSelected: false,
      workspaceName: 'gfa_nonres_curr_density', zoomLevel: 0, ref: ['overall', 'buildings'], styleName: 'gross_floor_area',layer_type: defaultLayerType},


    {id: 19, name: 'Building volumes total', category: 'Buildings', isSelected: false,
      workspaceName: 'vol_tot_curr_density', zoomLevel: 0, ref: ['overall', 'buildings'], styleName: 'vol',layer_type: defaultLayerType},
    {id: 18, name: 'Building volumes residential', category: 'Buildings', isSelected: false,
      workspaceName: 'vol_res_curr_density', zoomLevel: 0, ref: ['overall', 'buildings'], styleName: 'vol',layer_type: defaultLayerType},
    {id: 20, name: 'Building volumes non-residential', category: 'Buildings', isSelected: false,
      workspaceName: 'vol_nonres_curr_density', zoomLevel: 0, ref: ['overall', 'buildings'], styleName: 'vol',layer_type: defaultLayerType},

  // Industry
  {id: 45345, name: 'Industrial Sites Emissions', category: 'Industry', isSelected: false,
    workspaceName: 'industrial_database_emissions', zoomLevel: 0, ref: ['overall', 'industry'], styleName: 'industrial_emissions',layer_type: defaultLayerType},
  {id: 20, name: 'Industrial Sites Excess Heat', category: 'Industry', isSelected: false,
    workspaceName: 'industrial_database_excess_heat', zoomLevel: 0, ref: ['overall', 'industry'], styleName: 'industrial_excess_heat',layer_type: defaultLayerType},
  {id: 45345, name: 'Industrial Sites Company Name', category: 'Industry', isSelected: false,
    workspaceName: 'industrial_database_compagnyname', zoomLevel: 0, ref: ['overall', 'industry'], styleName: 'industrial_company_name',layer_type: defaultLayerType},
  {id: 20, name: 'Industrial Sites Subsector', category: 'Industry', isSelected: false,
    workspaceName: 'industrial_database_subsector', zoomLevel: 0, ref: ['overall', 'industry'], styleName: 'industrial_subsector',layer_type: defaultLayerType},

// Population
  {id: 14, name: 'Population total', category: 'Population', isSelected: false,
    workspaceName: 'pop_tot_curr_density', zoomLevel: 0, ref: ['overall', 'demand'], styleName: 'population',layer_type: defaultLayerType},

// Potentials
  {id: 12, name: 'Waste Water Treatment Plants - Power', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'wwtp_power', zoomLevel: zoomLevelDetectChange, ref: ['overall', 'potential'], styleName: 'wwtp_power',layer_type: defaultLayerType},
  {id: 12, name: 'Waste Water Treatment Plants - Capacity', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'wwtp_capacity',  zoomLevel: zoomLevelDetectChange, ref: ['overall', 'potential'], styleName: 'wwtp_capacity',layer_type: defaultLayerType},
  {id: 18, name: 'Agricultural residues', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'agricultural_residues_view', zoomLevel: 0, ref: ['overall','potential'], styleName: 'Biomass_shape',layer_type: defaultLayerType},
  {id: 18, name: 'Livestock effluents', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'livestock_effluents_view', zoomLevel: 0, ref: ['overall','potential'], styleName: 'Biomass_shape',layer_type: defaultLayerType},
  {id: 18, name: 'Forest residues', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'potential_forest', zoomLevel: 0, ref: ['overall','potential'], styleName: 'Biomass_forest_raster',layer_type: defaultLayerType},
  {id: 19, name: 'Municipal solid waste', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'potential_municipal_solid_waste', zoomLevel: 0, ref: ['potential'], styleName: 'waste_potential',layer_type: defaultLayerType},
  {id: 20, name: 'Wind potential in 50 meters', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'wind_50', zoomLevel: 0, ref: ['overall','potential'], styleName: 'wind',layer_type: defaultLayerType},


  {id: 20, name: 'Solar potential', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'solar_optimal_total', zoomLevel: 0, ref: ['overall', 'potential'], styleName: 'solar',layer_type: defaultLayerType},

// shallow geothermal vector layer
  {id: 20, name: 'Geothermal Potential Heat Conductivity ', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'potential_shallowgeothermal', zoomLevel: 0, ref: ['overall', 'potential'], styleName: 'shallowgeothermal',layer_type: defaultLayerType},

// I would suggest to only show on of the geothermal layers - in DB integrated as vector and raster - which one do we need for the indicator?
  /*  {id: 20, name: 'Geothermal Potential Hc Class ', category: 'R.E.S. Potential', isSelected: false,
      workspaceName: 'potential_shallowgeothermal_hc_class', zoomLevel: 0, ref: ['overall', 'potential'], styleName: 'potential_shallowgeothermal_hc_class'},*/

// Climate

  {id: 20, name: 'Average Temperature', category: 'Climate', isSelected: false,
    workspaceName: 'land_surface_temperature', zoomLevel: 0, ref: ['overall', 'climate'], styleName: 'temperature',layer_type: defaultLayerType},
  {id: 20, name: 'Cooling degree days', category: 'Climate', isSelected: false,
    workspaceName: 'cdd_curr', zoomLevel: 0, ref: ['overall', 'climate'], styleName: 'cdd',layer_type: defaultLayerType},
  {id: 20, name: 'Heating degree days', category: 'Climate', isSelected: false,
    workspaceName: 'hdd_curr', zoomLevel: 0, ref: ['overall', 'climate'], styleName: 'hdd',layer_type: defaultLayerType},
  {id: 20, name: 'Solar radiation', category: 'Climate', isSelected: false,
    workspaceName: 'solar_radiation', zoomLevel: 0, ref: ['overall', 'climate'], styleName: 'solar',layer_type: defaultLayerType},

// Electricity
  {id: 20, name: 'Electricity CO2 emissions - country average', category: 'Electricity', isSelected: false,
    workspaceName: 'yearly_co2_emission', zoomLevel: 0, ref: ['overall', 'electricity'], styleName: 'yearly_co2_emission',layer_type: defaultLayerType},


/* CMs
  {id: 20, name: 'CM - Heat demand reduction', category: 'CM', isSelected: false,
    workspaceName: 'calculation_module_1', zoomLevel: 0, ref: ['overall', 'demand'], styleName: ''},*/
  ];

export const cm_default_layer = {
  id: 21, name: '',
  category: calculation_module_category,
  isSelected: true,
  workspaceName: '',
  zoomLevel: 0, ref: ['overall', calculation_module_category],
  styleName: '',
  layer_type: calculation_module_category,
  cm_id: ''
}
