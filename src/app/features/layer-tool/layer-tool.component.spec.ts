import { DataInteractionArray } from './../layers-interaction/layers-interaction.data';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerToolComponent } from './layer-tool.component';
import { MapService } from 'app/pages/map';
import { UploadService } from 'app/shared/services/upload.service';
import { ToasterService, Logger, LoaderService, Helper, BusinessInterfaceRenderService } from 'app/shared';
import { Http, BaseRequestOptions, ConnectionBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { UserManagementStatusService } from '../user-management';
import { SelectionToolService, SelectionToolButtonStateService } from '../selection-tools';
import { DecimalPipe } from '@angular/common';
import { InteractionService } from 'app/shared/services/interaction.service';
import { SidePanelService } from '../side-panel';
import { NavigationBarService } from 'app/pages/nav';
import { LayersService } from '../layers';
import { SelectionScaleService } from '../selection-scale';
import { CMLayersService } from '../calculation-module/cm-layers.service';

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
        { provide: UploadService, useValue: UploadService },
        { provide: ToasterService, useValue: ToasterService },
        { provide: SelectionScaleService, useValue: SelectionScaleService },
        { provide: CMLayersService, useValue: CMLayersService },
        { provide: SelectionToolButtonStateService, useValue: SelectionToolButtonStateService },
        {
          provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }, deps: [MockBackend, BaseRequestOptions]
        },
        { provide: MockBackend, useValue: MockBackend },
        { provide: BaseRequestOptions, useValue: BaseRequestOptions },

        { provide: UserManagementStatusService, useValue: UserManagementStatusService },
        { provide: SelectionToolService, useValue: SelectionToolService },

        { provide: Logger, useValue: loggerStub },
        { provide: LayersService, useValue: LayersService },
        { provide: LoaderService, useValue: loaderServiceStub },
        { provide: Helper, useClass: Helper },

        { provide: BusinessInterfaceRenderService, useValue: BusinessInterfaceRenderService },
        // { provide: InteractionService, useValue: InteractionService },
        { provide: SidePanelService, useValue: SidePanelService },
        { provide: NavigationBarService, useValue: NavigationBarService },
        {provide: DecimalPipe, useClass: DecimalPipe},

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
