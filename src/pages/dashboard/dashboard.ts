import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../account/login/login';

import { Globals } from "../../app/app.config";
import { trigger, state, style, animate, transition } from '@angular/animations';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  animations: [
    trigger('visibilityChanged', [ //https://stackoverflow.com/questions/45155822/ionic-3-animate-while-show-hide
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('* => *', animate('500ms'))
    ])
  ]
})
export class DashboardPage {
  closeClicked: boolean;
  visibility: string = 'shown';
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthProvider) {
    this.closeClicked = Globals.alert_close;
  }

  ionViewDidLoad() {
    if(!this.navParams.get('user')){
      let user = this.auth.getUserInfo();
      if(!user){
        this.navCtrl.setRoot(LoginPage);
      }
    }
  }
  ionViewDidEnter(){
    //console.log('Test');
  }

  public closeAlert(){
    this.visibility = 'hidden';
    setTimeout(()=>{
      this.closeClicked = true;
      Globals.alert_close = true;
    }, 600);
  }

  openOption(page: string){
    this.navCtrl.setRoot("PlaceholderPage", {view: page});
  }

  openInfo(){
    this.navCtrl.push('InfoModalPage');
  }

}
