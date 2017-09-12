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
import { NavigationButton } from './../../pages/nav/navigation.class';
import { navigationButtons } from './../../pages/nav/nav-buttons.data';


@Component({
    moduleId: module.id,

})
export class SideComponent implements OnInit, OnDestroy {
    expanded = false;
    private title = 'SideComponent title';
    expandedState = 'collapsed';
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

    toggleExpandedState() {
        this.expandedState = this.expanded ? 'collapsed' : 'expanded';
        console.log('this.expandedState ' + this.expandedState);
        this.expanded = !this.expanded;
    }

    display(val: boolean) {
        if (val) {
            this.expandedState =  'expanded';
        } else {
            this.expandedState = 'collapsed';
        }
        this.expanded = !this.expanded;
    }


    // A check par Lesly
    changeOpenState(side: string) {
        navigationButtons.forEach(button => {
            if (button.buttonFunction === side) {
                button.stateOpen = false;
            }
        });
    }
}
