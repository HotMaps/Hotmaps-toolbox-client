import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  Input
} from '@angular/core';
import { ScenarioAssessmentService } from '../service/scenario-assessment.service';




@Component({
  selector: 'htm-scenario-assessment-cell',
  templateUrl: 'scenario-assessment-cell.component.html',
  styleUrls: ['scenario-assessment-cell.component.css'],
})
export class ScenarioAssessmentCellComponent implements OnInit, OnDestroy, OnChanges {
  @Input() session;
  private selected = false;
  private tag_name = 'Scenario tag'
  constructor(private scenarioAssessmentService:ScenarioAssessmentService) {}

  ngOnChanges(changes: SimpleChanges): void { }
  ngOnDestroy(): void {  }
  ngOnInit(): void { }
  changeSelected() {
    this.selected=!this.selected;
    if(this.selected) {
      this.scenarioAssessmentService.addSession(this.session);
    } else {
      this.scenarioAssessmentService.removeSession(this.session.session_id);
    }
  }
  
}
