import { NavigationBarService } from './../../pages/nav/service/navigation-bar.service';
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


@Component({
    moduleId: module.id,

})
export class SideComponent implements OnInit, OnDestroy {
    protected expanded = false;
    protected title = 'SideComponent title';
    protected expandedState = 'collapsed';
    constructor() {
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

    toggleExpandedState(func: string) {
        this.expandedState = this.expanded ? 'collapsed' : 'expanded';
        if (!this.expanded) {
            // this.navigationBarService.disableButtonsWithFunction(func);
        } else {
            // this.navigationBarService.enableButtonsWithFunction(func);
        }
        this.expanded = !this.expanded;
    }

    display(val: boolean) {
        if (val) {
            this.expandedState =  'expanded';
            this.expanded = true;
        } else {
            this.expandedState = 'collapsed';
            this.expanded = false;
        }
      console.log('this.expandedState ' + this.expandedState);
    }
}
