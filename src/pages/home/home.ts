import {Component} from '@angular/core';
import {DataProvider} from "../../providers/data/data";
import {NavController} from "ionic-angular";
import {InfoPage} from "../info/info";
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore'
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    speakersListRef:AngularFirestoreCollection<Speaker>;
    speakerList: Observable<Speaker[]>;
    lists: any;

    constructor(public navCtrl: NavController, public dataService: DataProvider, public afs:AngularFirestore) {
        this.speakersListRef = this.afs.collection('Speakers');
        this.speakerList = this.speakersListRef.valueChanges();
    }


    ionViewDidLoad() {
        this.lists = this.dataService.lists;
    }

    itemClicked(item): void {
        console.log(item.Info);
        this.navCtrl.push(InfoPage, item);
    }
}
