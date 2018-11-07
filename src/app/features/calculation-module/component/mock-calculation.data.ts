import { gfa_type } from "app/features/layers-interaction/layers-interaction.data";

export const cms = [
  {
    "category": "Buildings",
    "cm_id": 1,
    "layers_needed": "[u'heat_tot_curr_density']",
    "type_layer_needed":['heat',gfa_type],
    "authorized_scale":['NUTS 3','Hectare'],
    "type_layer_needed":['heat','gross_floor_area'],
    "cm_description": "this computation module allows to divide the HDM",
    "cm_name": "calculation_module_test",
    "cm_url": "http://172.26.0.2:80/",
    "updatedAt": "2018-10-08 08:24:25.769397",
    "createdAt": "2018-10-08 08:24:25.769399"
  },
  {
    "category": "Buildings",
    "cm_id": 2,
    "layers_needed": "[u'heat_tot_curr_density']",
    "type_needed":['heat'],

    "type_layer_needed":["heat"],
    "cm_description": "This computation module calculates district heating potential within the selected region",
    "cm_name": "District Heating Potential",
    "cm_url": "http://172.26.0.4:80/",
    "updatedAt": "2018-10-08 08:24:25.796067",
    "createdAt": "2018-10-08 08:24:25.796069"
  }
]
export const mockComponents = [
  {
    "input_unit": "none",
    "input_value": 1,
    "input_id": 51,
    "updatedAt": "2018-10-08 08:47:53.430731",
    "createdAt": "2018-10-08 08:47:53.430733",
    "input_min": 1,
    "cm_id": 1,
    "category": 3,
    "input_type": "input",
    "input_max": 10,
    "input_name": "Reduction factor",
    "input_parameter_name": "reduction_factor"
  },
  {
    "input_unit": "",
    "input_value": 50,
    "input_id": 52,
    "updatedAt": "2018-10-08 08:47:53.430731",
    "createdAt": "2018-10-08 08:47:53.430733",
    "input_min": 10,
    "category": 0,
    "cm_id": 1,
    "input_type": "range",
    "input_max": 1000,
    "input_name": "Blablabla",
    "input_parameter_name": "bla"
  }
]
