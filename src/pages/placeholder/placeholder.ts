import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-placeholder',
  templateUrl: 'placeholder.html',
})
export class PlaceholderPage {
  viewing: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    this.viewing = this.navParams.get('view');
    console.log(this.viewing);
  }

}
