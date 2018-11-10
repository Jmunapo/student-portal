import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthProvider } from '../../../providers/auth/auth';

import { Events } from 'ionic-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  checkingSession: boolean = true;
  loading: Loading;
  cred = { reg_number: '', password: '' };

  constructor(public navParams: NavParams,
    private nav: NavController, private auth: AuthProvider, private alertCtrl: AlertController,
    private loadingCtrl: LoadingController, private events: Events) {
      
  }

  ionViewDidLoad() {
    if(this.navParams.get('start')){
      let load = this.loadingCtrl.create({ dismissOnPageChange: true});
      load.present();
      this.auth.events.subscribe('instorage', user=>{
        if(user){
          this.events.publish('logged', user);
          this.nav.setRoot("DashboardPage", {user});
          load.dismiss();
        }else{
          load.dismiss();
        }
      });
    }
  }


  public createAccount() {
    let alert = this.alertCtrl.create({
      subTitle: "Please use Student Portal Website for registration",
      buttons: ['OK']
    });
    alert.present();
  }

  public forgotPass(){
    this.nav.push("ForgotPasswordPage");
  }

  public login() {
    this.showLoading()
    this.auth.login(this.cred).then(user=>{
      if(!user){
        this.showError("Invalid credentials");
        return;
      }
      this.events.publish('logged', user);
      this.nav.setRoot("DashboardPage", {user});
    }).catch(error=>{
      if(error){
        this.showError("Network error, please try again");
      }
    })
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      subTitle: 'Login failed',
      message: text,
      buttons: ['OK']
    });
    alert.present();
  }

}
