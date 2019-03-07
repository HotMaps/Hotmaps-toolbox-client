import { Component, OnInit } from '@angular/core';
import * as uikit from 'uikit';

@Component({
  selector: 'htm-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    uikit.modal('#modal-full').show()
  }

}
