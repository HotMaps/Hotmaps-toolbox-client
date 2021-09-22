import { Component, OnInit } from '@angular/core';
import { standaloneCMs } from './stand-alone-cm.data';
@Component({
  selector: 'app-stand-alone-cm',
  templateUrl: './stand-alone-cm.component.html',
  styleUrls: ['./stand-alone-cm.component.css', '../component/calculation-module.component.css']
})
export class StandAloneCmComponent implements OnInit {
  standaloneCMs = standaloneCMs;
  constructor() { }

  ngOnInit() {
  }

}
