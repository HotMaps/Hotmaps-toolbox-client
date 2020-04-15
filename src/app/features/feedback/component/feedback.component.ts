import {
    Component,
    OnInit,
    OnDestroy,
    trigger,
    state,
    style,
    transition,
    animate,
    Input,
    ViewChild,
    ElementRef
} from '@angular/core';
import { InteractionService } from '../../../shared/services/interaction.service';
import { issue_levels, issue_type } from 'app/features/feedback/data-taiga';
import { FeedbackService } from '../feedback.service';
import { Helper } from 'app/shared';
import{GoogleAnalyticsService} from '../../../google-analytics.service';

@Component({
    selector: 'htm-feedback',
    templateUrl: 'feedback.component.html',
    styleUrls: ['feedback.component.css'],
    animations: [
        // Formulare trigger
        trigger('feedbackTrigger', [
            state('expanded', style({ opacity: 1 })),
            state('collapsed', style({ opacity: 0 })),
            transition('collapsed => expanded', animate('200ms 150ms linear')),
            transition('expanded => collapsed', animate('100ms linear'))
        ]),
    ]
})
export class FeedbackComponent implements OnInit, OnDestroy {
  @Input() expandedState;
    private issue_levels = issue_levels;
    private issue_type = issue_type;
    private type=null;
    private level=null;
    private files;
    @ViewChild('file_input') file_input:ElementRef;
    @ViewChild('file_string') file_string:ElementRef;
    private submited = false;
    private feedbackLoader = false;
    constructor(private interactionService: InteractionService,
      private feedbackService:FeedbackService, private helper:Helper, private googleAnalyticsService:GoogleAnalyticsService
      ) {

    }
    ngOnInit() {
      this.type=null;
      this.level=null;
    }
    ngOnDestroy() {
    }
    resetForm(f) {
      this.file_input.nativeElement.value = "";
      this.file_string.nativeElement.value = "";
      f.reset()
    }
    makeNewRequest() {
        this.submited = false;
    }
    submit(f) {
      // this.feedbackLoader = true;
      if (f.valid) {
          this.sendRequest(f);
          this.googleAnalyticsService
            .eventEmitter("send_feedback", "feedback", "send", "click");
      } else {
          this.feedbackLoader = false;
          this.submited = false;
      }
    }

    close() {
        this.interactionService.closeTopPanel();
        this.interactionService.disableStateOpenWithFunction('send_mail');
    }
    onUploadFile(files) {
        this.files = files[0];
    }
    showError() {
        this.interactionService.showToaster('Unable to send the issue! Please, try later or send a mail to administrator');
    }
    sendRequest(f) {
        this.feedbackLoader = true;
        const fd = new FormData();
        if (!this.helper.isNullOrUndefined(this.files)) {
            fd.append('file', this.files, this.files.name);
        }
        fd.append('firstname',f.value['name'])
        fd.append('email',f.value['mail'])
        fd.append('company',f.value['company'])
        fd.append('feedback_type',f.value['type'].name)
        fd.append('feedback_priority',f.value['level'].name)
        fd.append('title',f.value['title'])
        fd.append('description',f.value['description'])
        this.feedbackService.sendFeedback(fd).then((val)=>{
            this.feedbackLoader = false
            this.resetForm(f)
            this.close()
            this.interactionService.showToaster(val.message)
        }).catch((e)=>{
            this.feedbackLoader = false
        })
    }
}
