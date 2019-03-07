// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { DecimalPipe } from '@angular/common';
import { BusinessInterfaceRenderArray } from './business.data';
import { MockLoaderService } from './../services/mock/loader.service';
import { Logger } from './../services/logger.service';
import { TestBed, inject, async } from '@angular/core/testing';
import { BusinessInterfaceRenderService } from './business.service';
import { Helper } from './../helper';


describe('BusinessService', () => {
    let service: BusinessInterfaceRenderService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: BusinessInterfaceRenderService,
                    useClass: BusinessInterfaceRenderService
                },
                { provide: Helper, useClass: Helper },
                { provide: Logger, useClass: Logger },
                { provide: DecimalPipe, useClass: DecimalPipe },
            ]
        });

    });
    beforeEach(inject([BusinessInterfaceRenderService], (businessService: BusinessInterfaceRenderService) => {
        service = businessService;
    }));

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get business array', () => {
        expect(service.getBusiness()).toBe(BusinessInterfaceRenderArray);
    });

    it('should return the business name from the api_name', () => {
        const api_name = 'heat_tot_curr_density_density';
        const business_name = 'Average heat density';
        expect(service.getReadableName(api_name)).toBe(business_name);
    })
});

