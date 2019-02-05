import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'htm-custom-symbology',
  templateUrl: './custom-symbology.component.html',
  styleUrls: ['./custom-symbology.component.css']
})
export class CustomSymbologyComponent implements OnInit {
  @Input() symbolgies:any[];
  constructor() { }

  ngOnInit() {
    this.symbolgies.sort((a,b) => {
      const avalue = +a.value;
      const bvalue = +b.value;
      if (avalue > bvalue) return 1;
      if (avalue < bvalue) return -1;
      return 0;
    })
  }

}
