import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  lists: any = [
      {
        listHeader: "Grocery",
          Items: [
              {
                  item: "wine",
                  Info: {
                      price: "$3.45",
                      tinderScale: "3.5"
                  }
              },
              {
                  item: "beer",
                  Info: {
                      price: "$3.45",
                      tinderScale: "3.5"
                  }
              },
              {
                  item: "dick",
                  Info: {
                      price: "$3.45",
                      tinderScale: "3.5"
                  }
              }
          ]
      }
  ];


  constructor() {
    console.log('Hello DataProvider Provider');
  }

}
