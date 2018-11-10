import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Loading } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modules-registration',
  templateUrl: 'modules-registration.html',
})
export class ModulesRegistrationPage {
  registered: boolean = false;
  loading: Loading;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModulesRegistrationPage');
  }

  getItems(eve){
    console.log(eve);
  }

  confirmRegistration(){
    this.loading = this.loadingCtrl.create({
      content: 'Confirming...',
      dismissOnPageChange: true
    });
    this.loading.present();
    setTimeout(()=>{
      this.loading.dismiss();
      let alert = this.alertCtrl.create({
        message: "Confirmation Success",
        buttons: ['Ok']
      });
      alert.present();
    },3000)
  }

  register(){
    this.loading = this.loadingCtrl.create({
      content: 'Registering...',
      dismissOnPageChange: true
    });
    this.loading.present();
    setTimeout(()=>{
      this.loading.dismiss();
      this.registered = true;
      let alert = this.alertCtrl.create({
        message: "Successfully registered, please confirm",
        buttons: ['Ok']
      });
      alert.present();
    },2000)
  }

}
