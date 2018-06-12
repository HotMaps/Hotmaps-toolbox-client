
import {CalculationModuleClass} from './calculation-module.class';
import {ComponentClass} from '../component/component.class';



export const calculation_module_components: ComponentClass[] = [
  {
    component_name: 'Reduction factor',
    component_type: 'input',
    parameter_name: 'reduction_factor',
    value: 1,
    unit: '',
    min: 1,
    max: 10,
    cmId: 'calculation_module_1'
  },
  {
    component_name: 'Blablabla',
    component_type: 'range',
    parameter_name: 'bla',
    value: 50,
    unit: '',
    min: 10,
    max: 1000,
    cmId: 'calculation_module_2'
  },
  {
    component_name: 'Test name component',
    component_type: 'input',
    parameter_name: 'test',
    value: -10,
    unit: '',
    min: -20,
    max: 10,
    cmId: 'calculation_module_2'
  }
  /* ,
  {
    component_name: 'Number 2',
    component_type: 'range',
    parameter_name: 'number_2',
    value: 50,
    unit: 'pourcentage',
    min: 30,
    max: 129
  } */
];

export const calculationModuleClassArray: CalculationModuleClass[] = [
  {
    id: 'calculation_module_1',
    cm_name: 'CREM - CM Test',
    category: 'Demand',
    layer_needed: ['']
  }
  ,
  {
    id: 'calculation_module_2',
    cm_name: 'Calculation module 2',
    category: 'Industry',
    layer_needed: ['']

  },
  {
    id: 'calculation_module_3',
    cm_name: 'Calculation module 3',
    category: 'Demand',
    layer_needed: ['']
  }
];




