import { Component, OnInit, Input } from '@angular/core';
import { Helper } from 'app/shared';

@Component({
  selector: 'htm-custom-symbology',
  templateUrl: './custom-symbology.component.html',
  styleUrls: ['./custom-symbology.component.css']
})
export class CustomSymbologyComponent implements OnInit {
  @Input() symbolgies:any[];
  constructor(private helper:Helper) { }

  ngOnInit() {
    if(!this.helper.isNullOrUndefined(this.symbolgies)) {
      this.symbolgies.sort((a,b) => {
        if (+a.value > +b.value) return 1;
        if (+a.value < +b.value) return -1;
        return 0;
      })
    }
  }

}
