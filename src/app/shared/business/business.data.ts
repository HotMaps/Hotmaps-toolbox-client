import {BusinessInterfaceRenderClass } from './business.class'


const heat_tot_curr_density  =  'heat_tot_curr_density';
const gfa_tot_curr_density  =  'gfa_tot_curr_density';
const gfa_res_curr_density  =  'gfa_res_curr_density';
const gfa_nonres_curr_density  =  'gfa_nonres_curr_density';
const heat_res_curr_density  =  'heat_res_curr_density';
const heat_nonres_curr_density  =  'heat_nonres_curr_density';
const solar_optimal_total  =  'solar_optimal_total';
const vol_tot_curr_density  =  'vol_tot_curr_density';
const vol_res_curr_density  =  'vol_res_curr_density';
const cool_tot_curr_density  =  'cool_tot_curr_density';
const vol_nonres_curr_density  =  'vol_nonres_curr_density';
const pop_tot_curr_density = 'pop_tot_curr_density'
const wwtp_capacity = 'wwtp_capacity'
const wwtp_power = 'wwtp_power'

const potential_forest = 'potential_forest'
const livestock_effluents_view = 'livestock_effluents_view'
const potential_municipal_solid_waste = 'potential_municipal_solid_waste'
const output_wind_speed = 'output_wind_speed'
const wind_50m = 'wind_50m'
const potential_potential_shallowgeothermal = 'potential_shallowgeothermal'
const yearly_co2_emission = 'yearly_co2_emission'
const hdd_curr = 'hdd_curr'
const cdd_curr = 'cdd_curr'
const land_surface_temperature = 'land_surface_temperature'
const agricultural_residues_view = 'agricultural_residues_view'
const solar_radiation = 'solar_radiation'








export const BusinessInterfaceRenderArray: BusinessInterfaceRenderClass[] = [

	// Buildings
  {id: 17, api_name: heat_tot_curr_density +'_consumption', business_name: 'Heat demand total'},
  {id: 17, api_name: heat_tot_curr_density +'_count_cell', business_name: 'Counted Cells'},
  {id: 17, api_name: heat_tot_curr_density +'_consumption_min', business_name: 'Heat density min'},
  {id: 17, api_name: heat_tot_curr_density +'_consumption_max', business_name: 'Heat density max'},
  {id: 17, api_name: heat_tot_curr_density +'_density', business_name: 'Average heat density'},
  {id: 17, api_name: heat_tot_curr_density +'_' + heat_tot_curr_density + '_per_' + pop_tot_curr_density, business_name: 'Heat demand per person'},

  {id: 17, api_name: heat_res_curr_density +'_consumption', business_name: 'Heat demand total'},
  {id: 17, api_name: heat_res_curr_density +'_count_cell', business_name: 'Counted Cells'},
  {id: 17, api_name: heat_res_curr_density +'_density', business_name: 'Average heat density'},
  {id: 17, api_name: heat_res_curr_density +'_' + heat_res_curr_density + '_per_' + pop_tot_curr_density, business_name: 'Heat demand per person'},

  {id: 17, api_name: heat_nonres_curr_density +'_consumption', business_name: 'Heat demand total'},
  {id: 17, api_name: heat_nonres_curr_density +'_count_cell', business_name: 'Counted Cells'},
  {id: 17, api_name: heat_nonres_curr_density +'_density', business_name: 'Average heat density'},
  {id: 17, api_name: heat_nonres_curr_density +'_' + heat_nonres_curr_density + '_per_' + pop_tot_curr_density, business_name: 'Heat demand per person'},

  {id: 17, api_name: cool_tot_curr_density +'_consumption', business_name: 'Theoretical cooling needs total'},
  {id: 17, api_name: cool_tot_curr_density +'_count_cell', business_name: 'Counted Cells'},
  {id: 17, api_name: cool_tot_curr_density +'_consumption_min', business_name: 'Cooling density min'},
  {id: 17, api_name: cool_tot_curr_density +'_consumption_max', business_name: 'Cooling density max'},
  {id: 17, api_name: cool_tot_curr_density +'_density', business_name: 'Average cooling density'},
  {id: 17, api_name: cool_tot_curr_density +'_' + cool_tot_curr_density + '_per_' + pop_tot_curr_density, business_name: 'Theoretical cooling needs per person'},





////////////////////////////////////////////////////////////////////////////////////////////////////////

	// Gross floor Area
  {id: 175, api_name: gfa_tot_curr_density + '_total', business_name: 'Gross floor area'},
  {id: 176, api_name: gfa_tot_curr_density + '_density', business_name: 'Gross floor area density' },
  {id: 177, api_name: gfa_tot_curr_density + '_count_cell', business_name:  'Counted cells'},
  {id: 17, api_name: gfa_tot_curr_density +'_' + gfa_tot_curr_density + '_per_' + pop_tot_curr_density, business_name: 'GFA per person'},

  {id: 175, api_name: gfa_res_curr_density + '_total', business_name: 'Gross floor area'},
  {id: 176, api_name: gfa_res_curr_density + '_density', business_name: 'Gross floor area density' },
  {id: 177, api_name: gfa_res_curr_density + '_count_cell', business_name:  'Counted cells'},
  {id: 17, api_name: gfa_res_curr_density +'_' + gfa_res_curr_density + '_per_' + pop_tot_curr_density, business_name: 'GFA per person'},

  {id: 175, api_name: gfa_nonres_curr_density + '_total', business_name: 'Gross floor area'},
  {id: 176, api_name: gfa_nonres_curr_density + '_density', business_name: 'Gross floor area density' },
  {id: 177, api_name: gfa_nonres_curr_density + '_count_cell', business_name:  'Counted cells'},
  {id: 17, api_name: gfa_nonres_curr_density +'_' + gfa_nonres_curr_density + '_per_' + pop_tot_curr_density, business_name: 'GFA per person'},

//////////////////////////////////////////////////////////////////////////////////////////////////////////

	// Building volume
  {id: 175, api_name: vol_tot_curr_density + '_total', business_name: 'Building volume'},
  {id: 176, api_name: vol_tot_curr_density + '_density', business_name: 'Building volume density' },
  {id: 177, api_name: vol_tot_curr_density + '_count_cell', business_name:  'Counted cells'},
  {id: 17, api_name: vol_tot_curr_density +'_' + vol_tot_curr_density + '_per_' + pop_tot_curr_density, business_name: 'Building volume per person'},

  {id: 175, api_name: vol_res_curr_density + '_total', business_name: 'Building volume'},
  {id: 176, api_name: vol_res_curr_density + '_density', business_name: 'Building volume density' },
  {id: 177, api_name: vol_res_curr_density + '_count_cell', business_name:  'Counted cells'},
  {id: 17, api_name: vol_res_curr_density +'_' + vol_res_curr_density + '_per_' + pop_tot_curr_density, business_name: 'Building volume per person'},

  {id: 175, api_name: vol_nonres_curr_density + '_total', business_name: 'Building volume'},
  {id: 176, api_name: vol_nonres_curr_density + '_density', business_name: 'Building volume density' },
  {id: 177, api_name: vol_nonres_curr_density + '_count_cell', business_name:  'Counted cells'},
  {id: 17, api_name: vol_nonres_curr_density +'_' + vol_nonres_curr_density + '_per_' + pop_tot_curr_density, business_name: 'Building volume per person'},



////////////////////////////////////////////////////////////////////////////////////////////////////////

	//Industry
  {id: 178, api_name: 'industrial_database_emissions_value', business_name: 'CO_2 emissions of energy intensive industries'},
  {id: 178, api_name: 'industrial_database_excess_heat_value1', business_name: 'excess heat potential [100°C - 200°C]'},
  {id: 178, api_name: 'industrial_database_excess_heat_value2', business_name: 'excess heat potential [200°C - 500°C]'},
  {id: 178, api_name: 'industrial_database_excess_heat_value3', business_name: 'excess heat potential [ > 500°C]'},
  {id: 178, api_name: 'industrial_database_excess_heat_total', business_name: 'Total excess heat potential of energy-intensive industries'},

////////////////////////////////////////////////////////////////////////////////////////////////////////

	//Population
  {id: 179, api_name: pop_tot_curr_density + '_population', business_name: 'Total population'},
  {id: 179, api_name: pop_tot_curr_density + '_density', business_name: 'Average population density'},
  {id: 179, api_name: pop_tot_curr_density + '_count_cell', business_name: 'Counted cells'},



////////////////////////////////////////////////////////////////////////////////////////////////////////

	//Potentials
  {id: 176, api_name: wwtp_capacity + '_capacity', business_name: 'Waste water treatment capacity'},
  {id: 176, api_name: wwtp_power+ '_power', business_name: 'Average excess heat power from waste water treatment'},

  {id: 176, api_name: solar_optimal_total + '_average', business_name: 'Average solar radiation'},
  {id: 176, api_name: solar_optimal_total + '_min', business_name: 'Minimum solar radiation'},
  {id: 176, api_name: solar_optimal_total + '_max', business_name: 'Maximum solar radiation'},
  {id: 176, api_name: solar_optimal_total + '_cells', business_name: 'Counted cells'},
  {id: 176, api_name: solar_optimal_total + '_potential_5_percent', business_name: 'Restricted solar potential estimate'},

  {id: 176, api_name: wind_50m + '_average', business_name: 'Average wind speed'},
  {id: 176, api_name: wind_50m + '_min', business_name: 'Minimum wind speed'},
  {id: 176, api_name: wind_50m + '_max', business_name: 'Maximum wind speed'},
  {id: 176, api_name: wind_50m + '_cells', business_name: 'Counted cells'},

  {id: 175, api_name: potential_potential_shallowgeothermal + '_value', business_name: 'average_heat_conductivity'},

  {id: 176, api_name: potential_municipal_solid_waste + '_val', business_name: 'Potential from Waste based on NUTS3 data'},

  {id: 176, api_name: potential_municipal_solid_waste + '_agriculture_pp', business_name: 'Potential from Waste per capita'},

  {id: 176, api_name: potential_municipal_solid_waste + '_NUTS_potential', business_name: 'Potential from agricultural residues based on NUTS3 data'},
  {id: 176, api_name: potential_municipal_solid_waste + '_agriculture_pp', business_name: 'Potential from agricultural residues per capita'},

  {id: 176, api_name: agricultural_residues_view + '_NUTS_potential', business_name: 'Potential from agricultural residues based on NUTS3 data'},
  {id: 176, api_name: agricultural_residues_view + '_agriculture_pp', business_name: 'Potential from agricultural residues per capita'},

  {id: 176, api_name: livestock_effluents_view + '_NUTS_potential', business_name: 'Potential from livestock effluents based on NUTS3 data'},
  {id: 176, api_name: livestock_effluents_view + '_livestock_effluents_pp', business_name: 'Potential from livestock_effluents_view per capita'},

  {id: 176, api_name: potential_forest + '_average', business_name: 'Average potential from forest resdiues'},
  {id: 176, api_name: potential_forest + '_value', business_name: 'Potential from forest resdiues'},
  {id: 176, api_name: potential_forest + '_cells', business_name: 'Counted cells'},



/////////////////////////////////////////////////////////////////////////////////////////////////////////


	//Climate
  {id: 175, api_name: cdd_curr + '_average', business_name: 'Average CDD'},
  {id: 176, api_name: cdd_curr + '_max', business_name: 'Maximum CDD'},
  {id: 176, api_name: cdd_curr + '_min', business_name: 'Minimum CDD'},
  {id: 177, api_name: cdd_curr + '_cells', business_name: 'Counted cells'},

  {id: 175, api_name: hdd_curr + '_average', business_name: 'Average HDD'},
  {id: 176, api_name: hdd_curr + '_max', business_name: 'Maximum HDD'},
  {id: 176, api_name: hdd_curr + '_min', business_name: 'Minimum HDD'},
  {id: 177, api_name: hdd_curr + '_cells', business_name: 'Counted cells'},

  {id: 175, api_name: land_surface_temperature + '_average', business_name: 'Average Temperature'},
  {id: 176, api_name: land_surface_temperature + '_max', business_name: 'Maximum Temperature'},
  {id: 176, api_name: land_surface_temperature + '_min', business_name: 'Minimum Temperature'},
  {id: 177, api_name: land_surface_temperature + '_cells', business_name: 'Counted cells'},

  {id: 176, api_name: solar_radiation + '_average', business_name: 'Average solar radiation'},
  {id: 176, api_name: solar_radiation + '_min', business_name: 'Minimum solar radiation'},
  {id: 176, api_name: solar_radiation + '_max', business_name: 'Maximum solar radiation'},
  {id: 176, api_name: solar_radiation + '_cells', business_name: 'Counted cells'},
  {id: 176, api_name: solar_radiation + '_total_radiation', business_name: 'Total radiation on surface'},

  {id: 176, api_name: output_wind_speed + '_average', business_name: 'Average wind speed'},
  {id: 176, api_name: output_wind_speed + '_min', business_name: 'Minimum wind speed'},
  {id: 176, api_name: output_wind_speed + '_max', business_name: 'Maximum wind speed'},
  {id: 176, api_name: output_wind_speed + '_cells', business_name: 'Counted cells'},



/////////////////////////////////////////////////////////////////////////////////////////////////////////

	//Electricity

  {id: 176, api_name: yearly_co2_emission + '_density', business_name: 'Average CO2 emissions on NUTS0'},


];




