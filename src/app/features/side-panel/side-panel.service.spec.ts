import { inject, async, TestBed } from '@angular/core/testing';
import { SidePanelService } from './side-panel.service';


describe('SidePanelService', () => {
    let service: SidePanelService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                {provide: SidePanelService, useClass: SidePanelService}
            ]
        })
    }));
    beforeEach(inject([SidePanelService], (sidePanelService: SidePanelService) => {
        service = sidePanelService;
    }));

    // INIT TESTS
    it('service should be created', () => {
        expect(service).toBeTruthy()
    });
    it('should not be open at start', () => {
        expect(service.rightPanelStatus.value).toBeFalsy()
        expect(service.leftPanelStatus.value).toBeFalsy()
    });

    // RIGHT PANEL TESTS
    it('should open right panel', () => {
        service.openRightPanel();
        expect(service.rightPanelStatus.value).toBeTruthy()
    });
    it('should close right panel', () => {
        service.closeRightPanel()
        expect(service.rightPanelStatus.value).toBeFalsy()
    });

    // LEFT PANEL TESTS
    it('sould open left panel', () => {
        service.openLeftPanel()
        expect(service.leftPanelStatus.value).toBeTruthy()
    });
    it('should close left panel', () => {
        service.closeLeftPanel()
        expect(service.leftPanelStatus.value).toBeFalsy()
    });
})
