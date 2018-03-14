// Improvement of coding style : 
// listing import lines alphabetized by the module
import { DataInteractionClass } from './data-interaction.class';
import { business_name_wwtp, defaultLayer, populationLayerName, idDefaultLayer } from '../../shared/data.service';
import { zoomLevelDetectChange } from './../../shared/data.service';
export const DataInteractionArray: DataInteractionClass[] = [
 // {id: 11, name: 'Heat map', category: 'Comsumption'},

  {id: idDefaultLayer, name: 'Heat Map', category: 'Building', isSelected: true, workspaceName: defaultLayer, zoomLevel: 0},
  {id: 12, name: business_name_wwtp, category: 'Building', isSelected: false, workspaceName: 'wwtp', zoomLevel: zoomLevelDetectChange},
  {id: 14, name: 'Population', category: 'Population', isSelected: false, workspaceName: populationLayerName, zoomLevel: 0}/*,
   {id: 15, name: 'Industrial thermal waste', category: 'Building', isSelected: false, workspaceName: 'workspaceName', zoomLevel: 0},
   {id: 16, name: 'Solar potential per roof', category: 'Building', isSelected: false, workspaceName: 'workspaceName', zoomLevel: 0},

  {id: 18, name: 'Service module 8', category: 'category module 1', isSelected: false, workspaceName: 'workspaceName', zoomLevel: 0},
  {id: 19, name: 'Service module 9', category: 'category module 1', isSelected: false, workspaceName: 'workspaceName', zoomLevel: 0},
  {id: 20, name: 'Service module 10', category: 'category module 1', isSelected: false, workspaceName: 'workspaceName', zoomLevel: 0},*/
];




