import { hotmapsData } from './../hotmaps-data.data';
import { Injectable } from '@angular/core';
import { APIService } from './../../../shared/services/api.service';



@Injectable()
export class HotmapsDataServices {
  private hotmapsDataArray = hotmapsData;
  private hotmapsDataCategories = new Set()

  getMockHotmapsData() {
    return Promise.resolve(this.hotmapsDataArray)
  }
  getMockCategory() {
    this.hotmapsDataCategories.clear()
    this.hotmapsDataArray.forEach((data) => {
      this.hotmapsDataCategories.add(data.category)
    })

    return Promise.resolve(Array.from(this.hotmapsDataCategories.values()))
  }
}
