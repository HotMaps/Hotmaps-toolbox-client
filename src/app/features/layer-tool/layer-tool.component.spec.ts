import { DataInteractionArray } from './../layers-interaction/layers-interaction.data';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerToolComponent } from './layer-tool.component';
import { MapService } from 'app/pages/map';
import { UploadService } from 'app/shared/services/upload.service';
import { ToasterService, Logger, LoaderService, Helper, BusinessInterfaceRenderService } from 'app/shared';
import { Http, BaseRequestOptions, ConnectionBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { UserManagementStatusService } from '../user-management';
import { SelectionToolService } from '../selection-tools';
import { DecimalPipe } from '@angular/common';
import { InteractionService } from 'app/shared/services/interaction.service';
import { SidePanelService } from '../side-panel';
import { NavigationBarService } from 'app/pages/nav';

describe('LayerToolComponent', () => {
  let component: LayerToolComponent;
  let fixture: ComponentFixture<LayerToolComponent>;


  
  let loggerStub: Logger;
  let loaderServiceStub: LoaderService;
  
  beforeEach(async(() => {
    loggerStub = new Logger();
    loaderServiceStub = new LoaderService();

    TestBed.configureTestingModule({
      declarations: [ LayerToolComponent ],
      providers: [
        
        { provide: MapService, useClass: MapService },
        { provide: UploadService, useClass: UploadService },
        { provide: ToasterService, useClass: ToasterService },

        {
          provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }, deps: [MockBackend, BaseRequestOptions]
        },        
        { provide: MockBackend, useClass: MockBackend },
        { provide: BaseRequestOptions, useClass: BaseRequestOptions },

        { provide: UserManagementStatusService, useClass: UserManagementStatusService },
        { provide: SelectionToolService, useClass: SelectionToolService },

        { provide: Logger, useClass: loggerStub },
        { provide: LoaderService, useClass: loaderServiceStub },
        //{ provide: Helper, useValue: new Helper(loggerStub, new DecimalPipe('')) },
        { provide: Helper, useClass: Helper },

        { provide: BusinessInterfaceRenderService, useClass: BusinessInterfaceRenderService },
        { provide: InteractionService, useClass: InteractionService },
        { provide: SidePanelService, useClass: SidePanelService },
        { provide: NavigationBarService, useClass: NavigationBarService },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerToolComponent);
    component = fixture.componentInstance;
    component.dataInteraction = DataInteractionArray[0]
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
