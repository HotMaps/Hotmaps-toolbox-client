// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Logger } from '../../../shared/services/logger.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { APIService } from '../../../shared/services/api.service';
import { ToasterService } from '../../../shared/services/toaster.service';
import { scenarioAssessmentList } from './scenario-assessment.data';
import { BehaviorSubject } from 'rxjs';




@Injectable()
export class ScenarioAssessmentService extends APIService {
  private savedSession: BehaviorSubject<any> = new BehaviorSubject<any>({});
  constructor(http: Http,  logger: Logger, loaderService: LoaderService, toasterService: ToasterService) {
    super(http, logger, loaderService, toasterService);
  }
  getSelectedSavedSession() {
    return this.savedSession;
  }
  getSavedSessions() : Promise<any> {

    return Promise.resolve(scenarioAssessmentList);

  }
  addSession(sess) {
    this.savedSession.value[sess.session_id] = sess;
    this.update();
  }
  removeSession(id) {
    delete this.savedSession.value[id]
    this.update();
  }
  update() {
    this.savedSession.next(this.savedSession.value)
  }
}
