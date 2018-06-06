
import {ComputationalModuleClass} from './computational-module.class';
import {ComponentClass} from './component.class';



const computational_module_1_components: ComponentClass[] = [{
    component_name: 'factor',
    component_type: 'texbox',
    parameter_name: 'factor',
    unit: 'pourcentage',

  },

]

export const computationalModuleClassArray: ComputationalModuleClass[] = [


  {
    id: 1,
    cm_name: 'Computational_module_1',
    components: computational_module_1_components,
  },

  {
    id: 2,
    cm_name: 'Computational_module_2',
    components: computational_module_1_components,
  },


];




