import { DataInteractionClass } from './data-interaction.class';
import {business_name_wwtp, defaultLayer, populationLayerName, idDefaultLayer} from '../../shared/data.service';
export const DataInteractionArray: DataInteractionClass[] = [
 // {id: 11, name: 'Heat map', category: 'Comsumption'},

  {id: idDefaultLayer, name: 'Heat Map', category: 'Comsumption', isSelected: true, workspaceName: defaultLayer, zoomLevel: 0},
  {id: 12, name: business_name_wwtp, category: 'Ressources', isSelected: false, workspaceName: 'wwtp', zoomLevel: 10},
  {id: 14, name: 'Population', category: 'Comsumption', isSelected: false, workspaceName: populationLayerName, zoomLevel: 0},
  /* {id: 15, name: 'Industrial thermal waste', category: 'Ressources', isSelected: false, workspaceName: 'workspaceName'},
   {id: 16, name: 'Solar potential per roof', category: 'Ressources', isSelected: false, workspaceName: 'workspaceName'},

  {id: 18, name: 'Service module 8', category: 'category module 1', isSelected: false, workspaceName: 'workspaceName'},
  {id: 19, name: 'Service module 9', category: 'category module 1', isSelected: false, workspaceName: 'workspaceName'},
  {id: 20, name: 'Service module 10', category: 'category module 1', isSelected: false, workspaceName: 'workspaceName'}*/
];




