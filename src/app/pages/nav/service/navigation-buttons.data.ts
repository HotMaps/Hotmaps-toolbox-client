import { NavigationButton } from '../class/navigation-bar.class';

export const navigationButtons: NavigationButton[] = [
  { id: 'layers', title: 'Layers', buttonFunction: 'left', iconClass: 'flaticon-layers-1', enable: true, stateOpen: false },
  { id: 'selection', title: 'Selection tool', buttonFunction: 'selection', iconClass: 'flaticon-vector', enable: true, stateOpen: false },
  { id: 'load_result', title: 'Show results', buttonFunction: 'right', iconClass: 'flaticon-pie-chart-1', enable: false, stateOpen: false },
  { id: 'feedback', title: 'Feedback', buttonFunction: 'send_mail', iconClass: 'flaticon-send', enable: true, stateOpen: false },
  
  { id: 'save', title: 'Save', buttonFunction: 'save', iconClass: 'flaticon-technology-2', enable: false, stateOpen: false},
  { id: 'folder', title: 'Folder', buttonFunction: 'folder', iconClass: 'flaticon-folder-2', enable: false, stateOpen: false},

  /*
  { id: 'import_data', title: 'Import data', buttonFunction: '', iconClass: 'flaticon-cloud-computing', enable: false, stateOpen: false },
  { id: 'calculation_modules', title: 'Calculation modules', buttonFunction: 'left', iconClass: 'flaticon-interface-1', enable: true, stateOpen: false},
  { id: 'comparison', title: 'Comparison', buttonFunction: '', iconClass: 'flaticon-comparison-1', enable: false, stateOpen: false},
  { id: 'data_info', title: 'Dataset informations', buttonFunction: '', iconClass: 'flaticon-database-7', enable: false, stateOpen: false},
  */ 
  
]