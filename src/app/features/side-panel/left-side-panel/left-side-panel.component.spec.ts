import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, ConnectionBackend, BaseRequestOptions } from '@angular/http';
import { TestBed, ComponentFixture, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { DebugElement } from '@angular/core';


import { DataInteractionCellComponent } from './../../data-interaction/data-interaction-cell/data-interaction-cell.component';
import { SidePanelService } from './../side-panel.service';
import { LeftSideComponent } from './left-side-panel.component';
import { DataInteractionService } from './../../data-interaction/data-interaction.service';
import { Logger } from './../../../shared/services/logger.service';
import { LoaderService } from './../../../shared/services/loader.service';
import { Helper } from './../../../shared/helper';
import { ToasterService } from './../../../shared/services/toaster.service';


describe('LeftSideComponent', () => {
    let component: LeftSideComponent;
    let fixture: ComponentFixture<LeftSideComponent>;
    let debugEl: DebugElement;
    let loggerStub: Logger;
    let loaderServiceStub: LoaderService;
    beforeEach(async(() => {
        loggerStub = new Logger();
        loaderServiceStub = new LoaderService();
        TestBed.configureTestingModule({
            declarations: [ LeftSideComponent, DataInteractionCellComponent ],
            providers: [
                {
                    provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }, deps: [ MockBackend, BaseRequestOptions ]
                },
                { provide: ToasterService },
                { provide: Helper },
                { provide: DataInteractionService, useClass: DataInteractionService},
                { provide: MockBackend, useClass: MockBackend },
                { provide: BaseRequestOptions, useClass: BaseRequestOptions },
                { provide: Logger, useValue: loggerStub },
                { provide: LoaderService, useValue: loaderServiceStub },
            ],
            imports: [
                BrowserAnimationsModule,
                NoopAnimationsModule
            ]
        });
        fixture = TestBed.createComponent(LeftSideComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
    }));
    beforeEach(inject([MockBackend], (mockBackend: MockBackend) => {
        backend = mockBackend;
      }));
    let backend: MockBackend = null;
    it('should create left panel component', () => {
        expect(component).toBeTruthy();
        expect(fixture).toBeTruthy();
        expect(debugEl).toBeTruthy();
    });

    it('should have layer in layers array', fakeAsync(() => {
        expect(component.layers).toBeUndefined();
        fixture.detectChanges();
        tick();
        expect(component.layers).toBeDefined();
        expect(component.category).toBeDefined();
    }));
})
