import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { ScenarioAssessmentService } from '../service/scenario-assessment.service';

@Component({
  selector: 'htm-scenario-assessment',
  templateUrl: 'scenario-assessment.component.html',
  styleUrls: ['scenario-assessment.component.css'],
})
export class ScenarioAssessmentComponent implements OnInit, OnDestroy, OnChanges {
  private sessions = null;
  private cm_list = []
  constructor(private scenarioAssessmentService:ScenarioAssessmentService) {}

  ngOnChanges(changes: SimpleChanges): void {  }
  ngOnDestroy(): void {  }
  ngOnInit(): void { 
    this.getListScenario()
    
  }

  getListScenario() {
    this.scenarioAssessmentService.getSavedSessions().then(data => {
      this.sessions = data;
      this.cm_list = Object.keys(this.sessions)
    })
  }
  sessionKeys() {
    return Object.keys(this.sessions)
  }
}
