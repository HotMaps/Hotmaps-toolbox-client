/**
 * Created by lesly on 09.06.17.
 */
import { Component,trigger, transition, style, animate } from '@angular/core';
import { ModulesService } from './modules-service';
import { ModulesServiceService } from './modules-service.service';

import { OnInit } from '@angular/core';





@Component({
  selector: 'htm-modules-service-list',
  animations: [
  trigger(
    'enterAnimation', [
      transition(':enter', [
        style({transform: 'translateX(100%)', opacity: 0}),
        animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0)', opacity: 1}),
        animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
      ])
    ]
  )
],
  templateUrl: './modules-service-list.component.html',
  styleUrls: [ './modules-service-list.component.css' ]
})


export class ModuleServiceListComponent implements OnInit {
  services: ModulesService[];
  selectedModulesService: ModulesService;
  constructor(private modulesServiceService: ModulesServiceService) { }
  getmodulesServices(): void {
    this.modulesServiceService.getModulesServices().then(services => this.services = services);
  }
  ngOnInit(): void {
    this.getmodulesServices();
  }
  onSelect(service: ModulesService): void {
    this.selectedModulesService = service;
  }
  gotoDetail(): void {
  }
}
