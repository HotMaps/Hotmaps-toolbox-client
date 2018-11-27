import { gfa_type } from "app/features/layers-interaction/layers-interaction.data";

export const cms = [
  {
    category: "Buildings",
    cm_id: 1,
    layers_needed: "[u'heat_tot_curr_density']",
    type_layer_needed: ["heat", gfa_type],
    authorized_scale: ["NUTS 3", "Hectare"],
    cm_description: "this computation module allows to divide the HDM",
    cm_name: "calculation_module_test",
    cm_url: "http://172.26.0.2:80/",
    updatedAt: "2018-10-08 08:24:25.769397",
    createdAt: "2018-10-08 08:24:25.769399"
  },
  {
    category: "Buildings",
    cm_id: 2,
    layers_needed: "[u'heat_tot_curr_density']",
    type_needed: ["heat"],

    type_layer_needed: ["heat"],
    cm_description:
      "This computation module calculates district heating potential within the selected region",
    cm_name: "District Heating Potential",
    cm_url: "http://172.26.0.4:80/",
    updatedAt: "2018-10-08 08:24:25.796067",
    createdAt: "2018-10-08 08:24:25.796069"
  }
];
export const mockComponents = [
  {
    input_id: "1",
    input_name: "Gross floor area",
    input_type: "input",
    input_parameter_name: "gfa",
    input_value: "100",
    input_priority: "0",
    input_unit: "m2",
    input_min: "0",
    input_max: "10000",
    createdAt: "2018-11-26 09:22:55.441705",
    updatedAt: "2018-11-26 09:22:55.441704",
    cm_id: "1"
  },
  {
    input_id: "2",
    input_name: "Interest rate",
    input_type: "input",
    input_parameter_name: "r",
    input_value: "0.05",
    input_default_value: "0.05",
    input_priority: "1",
    input_unit: "",
    input_min: "0",
    input_max: "1",
    createdAt: "2018-11-26 09:22:55.441705",
    updatedAt: "2018-11-26 09:22:55.441704",
    cm_id: "1"
  },
  {
    input_id: "3",
    input_name: "Sector",
    input_type: "radio",
    input_parameter_name: "sector",
    input_default_value: ["service", "residential"],
    input_value: "service",
    input_priority: "0",
    input_unit: "",
    input_min: "",
    input_max: "",
    createdAt: "2018-11-26 09:22:55.441705",
    updatedAt: "2018-11-26 09:22:55.441704",
    cm_id: "1"
  },
  {
    input_id: "4",
    input_name: "Building type",
    input_type: "radio",
    input_parameter_name: "building_type",
    input_value: "service",
    input_default_value:["service", "new SFH", "new MFH"],
    input_priority: "0",
    input_unit: "",
    input_min: "",
    input_max: "",
    createdAt: "2018-11-26 09:22:55.441705",
    updatedAt: "2018-11-26 09:22:55.441704",
    cm_id: "1"
  },
  {
    input_id: "5",
    input_name: "Demand type",
    input_type: "select",
    input_parameter_name: "demand_type",
    input_value: "heating",
    input_default_value:["heating", "cooling"],
    input_priority: "0",
    input_unit: "",
    input_min: "",
    input_max: "",
    createdAt: "2018-11-26 09:22:55.441705",
    updatedAt: "2018-11-26 09:22:55.441704",
    cm_id: "1"
  },
  {
    input_id: "6",
    input_name: "Year",
    input_type: "select",
    input_parameter_name: "year",
    input_value: "2015",
    input_default_value:["2015", "2020", "2030", "2050"],
    input_priority: "0",
    input_unit: "",
    input_min: "",
    input_max: "",
    createdAt: "2018-11-26 09:22:55.441705",
    updatedAt: "2018-11-26 09:22:55.441704",
    cm_id: "1"
  }
];
