import {BusinessInterfaceRenderClass } from './business.class'
import {hectare, nuts0, nuts1, nuts2, nuts3} from '../data.service';

const heat_tot_curr_density  =  'heat_tot_curr_density';
const wwtp  =  'wwtp';
const gfa_tot_curr_density  =  'gfa_tot_curr_density_tif';
const gfa_tot_curr_density_indicator_name  =  'Heated gross floor area';
const gfa_res_curr_density  =  'gfa_res_curr_density_tif';
const gfa_res_curr_density_indicator_name  = 'Heated gross floor area -residential buildings'

const gfa_nonres_curr_density  =  'gfa_nonres_curr_density_tif';
const gfa_nonres_curr_density_indicator_name  = 'Heated gross floor Area -non residential buildings'

const heat_res_curr_density  =  'heat_res_curr_density';
const heat_res_curr_density_indicator_name  = 'Heat consumption - Residential Buildings'

const heat_nonres_curr_density  =  'heat_nonres_curr_density';
const heat_nonres_curr_density_indicator_name  = 'Heat consumption - Non-Residential Buildings'

const solar_optimal_total  =  'solar_optimal_total';
const solar_optimal_total_indicator_name  = 'solar energy '
const potential_shallowgeothermal_heat_cond  =  'potential_shallowgeothermal_heat_cond';
const potential_shallowgeothermal_heat_cond_indicator_name  = 'Average potential of shallow geothermal energy'
const cdd_curr_tif_density  =  'cdd_curr_tif';
const cdd_curr_tif_density_indicator_name  = 'Average cooling degree days'
const hdd_curr_tif_density  =  'hdd_curr_tif';
const hdd_curr_tif_density_indicator_name  = 'Average heating degree days'
const yearly_co2_emission_density  =  'yearly_co2_emission';
const yearly_co2_emission_density_indicator_name  = 'average CO2 emissions for electricity'
const cell = 'Counted cells with values'

const vol_tot_curr_density  =  'vol_tot_curr_density_tif';
const vol_tot_curr_density_indicator_name  =  'Building volumes';

const vol_res_curr_density  =  'vol_res_curr_density_tif';
const vol_res_curr_density_indicator_name  =  'Building volumes - residential buildings';

const vol_nonres_curr_density  =  'vol_nonres_curr_density_tif';
const vol_nonres_curr_density_indicator_name  =  'Building volumes - non-residential buildings';


export const BusinessInterfaceRenderArray: BusinessInterfaceRenderClass[] = [

  {id: 17, api_name: 'heat_density', business_name: 'Average heat density'},
  {id: 172, api_name: heat_tot_curr_density + '_lau2', business_name: 'Heat density total / aggregrated from Hectares to LAU2'},
  {id: 172, api_name: heat_tot_curr_density + '_nuts3', business_name: 'Heat density total / aggregrated from Hectares to NUTS3'},
  {id: 174, api_name: heat_tot_curr_density + '_nuts2', business_name: 'Heat density total  / aggregrated from Hectares to NUTS2'},
  {id: 175, api_name: heat_tot_curr_density + '_nuts1', business_name: 'Heat density total / aggregrated from Hectares to NUTS1'},
  {id: 176, api_name: heat_tot_curr_density + '_nuts0', business_name: 'Heat density total  / aggregrated from Hectares to NUTS0'},
  {id: 177, api_name: heat_tot_curr_density + '_ha', business_name: 'Heat density total'},
  {id: 15, api_name: 'calculation_module_1', business_name: 'CM - Heat demand reduction'},



  {id: 177, api_name: 'power', business_name: 'Average thermal power potential'},
  {id: 177, api_name: 'capacity', business_name: 'Waste treatment capacity'},

  {id: 17, api_name: gfa_tot_curr_density, business_name: 'Heated Gross Floor Area'},
  {id: 172, api_name: gfa_tot_curr_density + '_lau2', business_name: 'Heated Gross Floor Area total / aggregrated from Hectares to LAU2'},
  {id: 172, api_name: gfa_tot_curr_density + '_nuts3', business_name: 'Heated Gross Floor Area total / aggregrated from Hectares to NUTS3'},
  {id: 174, api_name: gfa_tot_curr_density + '_nuts2', business_name: 'Heated Gross Floor Area total  / aggregrated from Hectares to NUTS2'},
  {id: 175, api_name: gfa_tot_curr_density + '_nuts1', business_name: 'Heated Gross Floor Area total / aggregrated from Hectares to NUTS1'},
  {id: 176, api_name: gfa_tot_curr_density + '_nuts0', business_name: 'Heated Gross Floor Area  / aggregrated from Hectares to NUTS0'},
  {id: 177, api_name: gfa_tot_curr_density + '_ha', business_name: 'Heated Gross Floor Area'},

  {id: 175, api_name: gfa_tot_curr_density + '_value', business_name: gfa_tot_curr_density_indicator_name + ' value'},
  {id: 176, api_name: gfa_tot_curr_density + '_density', business_name: gfa_tot_curr_density_indicator_name },
  {id: 177, api_name: gfa_tot_curr_density + '_cells', business_name:  cell},

  {id: 175, api_name: gfa_res_curr_density + '_value', business_name: gfa_res_curr_density_indicator_name  + ' value'},
  {id: 176, api_name: gfa_res_curr_density + '_density', business_name: gfa_res_curr_density_indicator_name},
  {id: 177, api_name: gfa_res_curr_density + '_cells', business_name: cell},

  {id: 175, api_name: gfa_nonres_curr_density + '_value', business_name: gfa_nonres_curr_density_indicator_name},
  {id: 176, api_name: gfa_nonres_curr_density + '_density', business_name: gfa_nonres_curr_density_indicator_name },
  {id: 177, api_name: gfa_nonres_curr_density + '_cells', business_name: cell},


  {id: 175, api_name: heat_res_curr_density + '_value', business_name: 'Heat consumption - Residential Buildings'},
  {id: 176, api_name: heat_res_curr_density + '_density', business_name:  'Average heat density - Residential Buildings'},
  {id: 177, api_name: heat_res_curr_density + '_cells', business_name:  cell},

  {id: 175, api_name: heat_nonres_curr_density + '_value', business_name: heat_nonres_curr_density_indicator_name},
  {id: 176, api_name: heat_nonres_curr_density + '_density', business_name: 'Average heat density - Non-Residential Buildings'},
  {id: 177, api_name: heat_nonres_curr_density + '_cells', business_name: 'Counting cells with values'},

  {id: 175, api_name: cdd_curr_tif_density + '_value', business_name: cdd_curr_tif_density_indicator_name},
  {id: 176, api_name: cdd_curr_tif_density + '_density', business_name: cdd_curr_tif_density_indicator_name},
  {id: 177, api_name: cdd_curr_tif_density + '_cells', business_name: cell},

  {id: 175, api_name: hdd_curr_tif_density + '_value', business_name: hdd_curr_tif_density_indicator_name},
  {id: 176, api_name: hdd_curr_tif_density + '_density', business_name: hdd_curr_tif_density_indicator_name},
  {id: 177, api_name: hdd_curr_tif_density + '_cells', business_name: cell},


  {id: 175, api_name: vol_tot_curr_density + '_value', business_name: vol_tot_curr_density_indicator_name},
  {id: 176, api_name: vol_tot_curr_density + '_density', business_name: vol_tot_curr_density_indicator_name + ' density'},
  {id: 177, api_name: vol_tot_curr_density + '_cells', business_name: cell},

  {id: 175, api_name: vol_res_curr_density + '_value', business_name: vol_res_curr_density_indicator_name},
  {id: 176, api_name: vol_res_curr_density + '_density', business_name: vol_res_curr_density_indicator_name + ' density'},
  {id: 177, api_name: vol_res_curr_density + '_cells', business_name: cell},

  {id: 175, api_name: vol_nonres_curr_density + '_value', business_name: vol_nonres_curr_density_indicator_name},
  {id: 176, api_name: vol_nonres_curr_density + '_density', business_name: vol_nonres_curr_density_indicator_name + ' density'},
  {id: 177, api_name: vol_nonres_curr_density + '_cells', business_name: cell},



  {id: 175, api_name: yearly_co2_emission_density + '_value', business_name: yearly_co2_emission_density_indicator_name},
  {id: 176, api_name: yearly_co2_emission_density + '_density', business_name: yearly_co2_emission_density_indicator_name},
  {id: 177, api_name: yearly_co2_emission_density + '_cells', business_name: cell},

  {id: 175, api_name: potential_shallowgeothermal_heat_cond + '_value', business_name: potential_shallowgeothermal_heat_cond_indicator_name},

  {id: 175, api_name: 'heat_consumption_per_gfa_tot_curr_density_density', business_name: 'Heat consumption per m2'},

  {id: 172, api_name: wwtp + '_lau2', business_name: 'Waste Water treatment plants / aggregrated from Hectares to LAU2'},
  {id: 172, api_name: wwtp + '_nuts3', business_name: 'Waste Water treatment plants / aggregrated from Hectares to NUTS3'},
  {id: 174, api_name: wwtp + '_nuts2', business_name: 'Waste Water treatment plants  / aggregrated from Hectares to NUTS2'},
  {id: 175, api_name: wwtp + '_nuts1', business_name: 'Waste Water treatment plants / aggregrated from Hectares to NUTS1'},
  {id: 176, api_name: wwtp + '_nuts0', business_name: 'Waste Water treatment plants  / aggregrated from Hectares to NUTS0'},
  {id: 176, api_name: wwtp + '_ha', business_name: 'Waste Water treatment plants'},
  {id: 178, api_name: 'population_density_nuts3', business_name: 'population / aggregrated from Hectares to NUTS3'},

  {id: 175, api_name: solar_optimal_total + '_value', business_name: solar_optimal_total_indicator_name},
  {id: 176, api_name: solar_optimal_total + '_density', business_name: 'Average ' + solar_optimal_total_indicator_name + ' density'},
  {id: 177, api_name: solar_optimal_total + '_cells', business_name: cell},

  {id: 178, api_name: 'industrial_database_emissions_value', business_name: 'CO_2 emissions of energy intensive industries'},
  {id: 178, api_name: 'industrial_database_excess_heat_value', business_name: 'excess heat potential [100°C - 200°C]'},
  {id: 178, api_name: 'industrial_database_excess_heat_value2', business_name: 'excess heat potential [200°C - 500°C]'},
  {id: 178, api_name: 'industrial_database_excess_heat_value3', business_name: 'excess heat potential [ > 500°C]'},
  {id: 178, api_name: 'total', business_name: 'excess heat potential of energy-intensive industries total [°C]'},
  {id: 179, api_name: 'population_density_nuts2', business_name: 'population / aggregrated from Hectares to NUTS2'},
  {id: 147, api_name: 'population_density_nuts1', business_name: 'population / aggregrated from Hectares to NUTS1'},
  {id: 157, api_name: 'population_density_nuts0', business_name: 'population / aggregrated from Hectares to NUTS1\''},
  {id: 157, api_name: 'population_density_lau2', business_name: 'population / aggregrated from Hectares to LAU2'},
  {id: 157, api_name: 'population_density', business_name: 'Average population density'},
  {id: 167, api_name: 'population_density_ha', business_name: 'population density'},
  {id: 168, api_name: 'count_cell_pop', business_name: cell},
  {id: 169, api_name: 'count_cell_heat', business_name: cell},

  {id: 12, api_name: 'heat_consumption', business_name: 'Heat demand'},
  {id: 13, api_name: 'density', business_name: 'Total population'},
  {id: 16, api_name: 'heat_consumption_per_population', business_name: 'Heat consumption per person'},
  {id: 16, api_name: 'heat_res_curr_density_value_per_population', business_name: 'Heat consumption per person - Residential Buildings'},
  {id: 16, api_name: 'heat_nonres_curr_density_value_per_population', business_name: 'Heat consumption per person - Nonresidential Buildings'},
  {id: 25, api_name: 'population_density_sum', business_name: 'Population'},
  {id: 19, api_name: 'population_density_avg', business_name: 'Average population density'},
  {id: 179, api_name: 'Inhabitants', business_name: 'person'},
  {id: 1543, api_name: 'MWh/ha', business_name: 'MWh/ha'},
  {id: 1545, api_name: 'MWh/Inhabitants', business_name: 'MWh/person'},
  {id: 152, api_name: 'Inhabitants/ha', business_name: 'person/ha'},
];




