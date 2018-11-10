import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-accommodation',
  templateUrl: 'accommodation.html',
})
export class AccommodationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccommodationPage');
  }

 pushPage(){
   this.navCtrl.push('PlaceholderPage');
 }

}
