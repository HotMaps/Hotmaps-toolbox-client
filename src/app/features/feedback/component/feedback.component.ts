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
import { urlSendMail, timeOutAjaxRequest } from 'app/shared';
import {InteractionService} from '../../../shared/services/interaction.service';

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
    private files;
    private submited = false;
    private feedbackLoader = false;
    constructor(private toasterService: ToasterService, private  interactionService: InteractionService) {
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
    close(f) {
      this.interactionService.closeTopPanel();
    }
    onUploadFile(files) {
        // console.log(files[0]);
        this.files = files[0];
    }
    showError() {
        this.toasterService.showToaster('Enable to send the message! Please, try later or send a mail to administrator');
    }
    sendRequest(f) {
        const fd = new FormData();

        if (this.files) {
            fd.append('file', this.files, this.files.name);
        }
        fd.append('formValues', JSON.stringify(f.value))
        jQuery.ajax({
            url : urlSendMail,
            type: 'POST',
            data : fd,
            processData: false,
            contentType: false,
            success: (data, status) => {
                if (data === '1') {
                    f.reset();
                    this.submited = true;
                    this.feedbackLoader = false;
                } else {
                    this.showError();
                    this.feedbackLoader = false;
                }

            },
            error: () => {
                this.showError();
                this.feedbackLoader = false;
            },
            timeout: timeOutAjaxRequest
        });
    }
}
