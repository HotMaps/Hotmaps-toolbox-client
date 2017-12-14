// Improvement of coding style : 
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { ToasterService } from './../../../shared/services/toaster.service';
declare var jQuery: any;

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
import {urlMailServer} from '../../../shared/data.service';

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

    // Improvement of coding style : 
    // place private members after public members, alphabetized
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

    /**
     * Make a new request
     */
    makeNewRequest() {
        this.submited = false;
    }

    // Improvement of coding style : 
    // The name of this method could be more specific
    /**
     * Submit the feedback
     */
    submit(f) {
        this.feedbackLoader = true;
        if (f.valid) {
            this.sendRequest(f);
        } else {
            this.feedbackLoader = false;
            this.submited = false;
        }
    }

    /**
     * Show an error when fail to send a request
     */
    showError() {
        this.toasterService.showToaster('Unable to send the message! Please, try later or send a mail to administrator');
    }

    // Improvement of coding style : 
    // make data services responsible for XHR calls, local storage, stashing in memory, or any other data operations
    // this method should be in a service and not in a component 
    /**
     * Send a request by mail
     */
    sendRequest(f) {
        jQuery.post(urlMailServer, f.value, (data) => {

            if (data === '1') {
                f.reset();
                this.submited = true;
                this.feedbackLoader = false;
            } else {
                this.feedbackLoader = false;
                this.showError();

            }
        }).fail(() => {
            this.feedbackLoader = false;
            this.showError();
        });
    }
}
