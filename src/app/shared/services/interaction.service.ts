import { Injectable } from '@angular/core';

import { LoaderService } from './loader.service';
import { MailService } from './../../features/feedback/mail.service';
import { SummaryResultService } from './../../features/summary-result/summary-result.service';
import { NavigationBarService } from './../../pages/nav/service/navigation-bar.service';
import { Logger } from './logger.service';
import { SidePanelService } from './../../features/side-panel/side-panel.service';
@Injectable()
export class InteractionService  {

    
    constructor(logger: Logger, sidePanelService: SidePanelService,
        navigationBarService: NavigationBarService, summaryResultService: SummaryResultService,
        mailService: MailService, loaderService: LoaderService
    ) { }

    
}
