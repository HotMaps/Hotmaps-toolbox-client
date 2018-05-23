// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import {
    Component,
    OnInit,
    OnDestroy,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';
import { InteractionService } from 'app/shared/services/interaction.service';


@Component({
    moduleId: module.id,

})
export class SideComponent implements OnInit, OnDestroy {

    // Improvement of coding style :

    // place private members after public members, alphabetized
    protected expanded = false;
    protected title = 'SideComponent title';
    protected expandedState = 'collapsed';
    constructor(protected interactionService: InteractionService) {
    }



    setTitle(title: string) {
        this.title = title
    }
    getTitle(): string {
      return  this.title;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }

    toggleExpandedState() {
        this.expandedState = this.expanded ? 'collapsed' : 'expanded';
        this.expanded = !this.expanded;
    }
    disableButtons(functionString: string) {
    }

    // Improvement of coding style :
    // display what ? The name of the method should describes his intent
    display(val: boolean) {
        if (val) {
            this.expandedState =  'expanded';
            this.expanded = true;
        } else {
            this.expandedState = 'collapsed';
            this.expanded = false;
        }

    }
    closePanel(functionString) {
        this.interactionService.disableStateOpenWithFunction(functionString)
    }
}
