import { ToasterService } from './../../../shared/services/toaster.service';
import { Http } from '@angular/http';

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
    ViewChild
} from '@angular/core';
import { Validators, NgForm } from '@angular/forms';

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
    private submited = false;
    private feedbackLoader = false;
    constructor(private toasterService: ToasterService) {
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    resetForm(f) {
        f.reset()
    }
    makeNewRequest() {
        this.submited = false;
    }
    submit(f) {
        this.feedbackLoader = true;
        if (f.valid) {
            this.sendRequest(f);
        } else {
            this.feedbackLoader = false;
            this.submited = false;
        }
    }

    showError() {
        this.toasterService.showToaster('Enable to send the message! Please, try later or send a mail to administrator');
    }
    sendRequest(f) {
        jQuery.post('sendmailurl.php', f.value, (data) => {
            if (data === '1') {
                f.reset();
                this.submited = true;
                this.feedbackLoader = false;
            } else {
                this.showError();
                this.feedbackLoader = false;
            }
        }).fail(() => {
            this.showError();
        });
    }
}
