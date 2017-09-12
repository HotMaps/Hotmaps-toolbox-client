import { NavigationButton } from './navigation-bar.class';

export const navigationButtons: NavigationButton[] = [
    {title: 'Layers', buttonFunction: 'left', iconClass: 'flaticon-layers-1', enable: true, stateOpen: false},
    {title: 'Selection', buttonFunction: 'selection', iconClass: 'flaticon-vector', enable: true, stateOpen: false},
    {title: 'Folder', buttonFunction: '', iconClass: 'flaticon-folder-2', enable: false, stateOpen: false},
    {title: 'Load result', buttonFunction: 'right', iconClass: 'flaticon-pie-chart-1', enable: false, stateOpen: false},
    {title: 'Import data', buttonFunction: '', iconClass: 'flaticon-cloud-computing', enable: false, stateOpen: false},
    {title: 'Calculation modules', buttonFunction: 'left', iconClass: 'flaticon-interface-1', enable: false, stateOpen: false},
    {title: 'Save as', buttonFunction: '', iconClass: 'flaticon-technology-2', enable: false, stateOpen: false},
    {title: 'Comparison', buttonFunction: '', iconClass: 'flaticon-comparison-1', enable: false, stateOpen: false},
    {title: 'Dataset informations', buttonFunction: '', iconClass: 'flaticon-database-7', enable: false, stateOpen: false}
]
