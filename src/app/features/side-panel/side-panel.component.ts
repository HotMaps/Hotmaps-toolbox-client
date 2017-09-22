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

    toggleExpandedState() {
      console.log('SideComponent/toggleExpandedState');
        this.expandedState = this.expanded ? 'collapsed' : 'expanded';
        console.log('this.expandedState ' + this.expandedState);
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
