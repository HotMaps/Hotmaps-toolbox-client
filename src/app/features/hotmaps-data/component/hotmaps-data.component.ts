import { HotmapsDataServices } from './../service/hotmaps-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'htm-hotmaps-data',
  templateUrl: './hotmaps-data.component.html',
  styleUrls: ['./hotmaps-data.component.css']
})
export class HotmapsDataComponent implements OnInit {
  private hotmapsDataArray = []
  private hotmapsDataCategories = []
  constructor(private hotmapsDataServices: HotmapsDataServices) { }

  ngOnInit() {
    this.initHotmapsData()
  }
  initHotmapsData() {

    this.hotmapsDataServices.getMockHotmapsData().then((data) => {
      this.hotmapsDataArray = data;
    }).then(() => {
      this.hotmapsDataServices.getMockCategory().then((data) => {
        this.hotmapsDataCategories = data;
      })
    }).then(() => {
      console.log(this.hotmapsDataArray, this.hotmapsDataCategories)
    })
  }

}
