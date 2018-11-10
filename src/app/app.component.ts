import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController, MenuController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular';

import { LoginPage } from '../pages/account/login/login';
import { AuthProvider } from '../providers/auth/auth';
import { DashboardPage } from '../pages/dashboard/dashboard';

import { OneSignal, OSNotificationPayload } from '@ionic-native/onesignal';
import { isCordovaAvailable } from '../common/is-cordova-available';
import { oneSignalAppId, sender_id } from './app.config';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  alert;
  clicked: boolean = false;
  rootPage: any;
  user: any = {};
  constructor(public platform: Platform, public statusBar: StatusBar,
    private auth: AuthProvider,
    private alertController: AlertController,
    public menu: MenuController,
    private toastController: ToastController,
    private events: Events, public splashScreen: SplashScreen,
    private oneSignal: OneSignal) {
    this.initializeApp();
    
    this.events.subscribe('logged', user=>{
      this.user = user;
    })
    // used for an example of ngFor and navigation
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //ProfilePage
      //ModulesRegistrationPage
      //LoginPage
      this.nav.setRoot(LoginPage, {
        start: true
      });
      //https://hackernoon.com/handling-android-back-button-in-ionic-33f7cfbba4b9?gi=d716101600c9
      this.registerBackButton();

      //this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (isCordovaAvailable()){
        this.oneSignal.startInit(oneSignalAppId, sender_id);
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationReceived().subscribe(data => this.onPushReceived(data.payload));
        this.oneSignal.handleNotificationOpened().subscribe(data => this.onPushOpened(data.notification.payload));
        this.oneSignal.endInit();
      }
    });
  }

  private onPushReceived(payload: OSNotificationPayload) {
    alert('Push recevied:' + payload.body);
  }
  
  private onPushOpened(payload: OSNotificationPayload) {
    alert('Push opened: ' + payload.body);
  }

  openSettings(){
    console.log('Settings Page')
  }

  openAbout(){
    console.log('Settings About Page')
  }

  SignOut(){
    this.auth.logout();
    this.nav.setRoot(LoginPage);
  }

  openPage(page, view = null){
    console.log(view)
    this.nav.setRoot(page, {view});
  }

  registerBackButton() {
    this.platform.registerBackButtonAction(() => {
      if (this.menu.isOpen()) {
        this.menu.close();
        return;
      }
      if(this.nav.getActive().instance instanceof DashboardPage && !this.nav.canGoBack()){
        this.doubleClick();
        return;
      }

      if(this.nav.getActive().instance instanceof LoginPage){
        this.doubleClick();
        return;
      }

      if (this.nav.canGoBack()) {
        this.nav.pop();
        return;
      }
      
      this.nav.setRoot('DashboardPage');
      return;
    });
  }

  showAlert() {
    this.alert = this.alertController.create({
      title: "Exit?",
      message: "Are you sure you want to exit?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            this.alert = null;
          }
        },
        {
          text: "Exit",
          handler: () => {
            this.platform.exitApp();
          }
        }
      ]
    });
    this.alert.present();
  }

  showNotification(){
    let toast = this.toastController.create({
      message: "Press again to exit",
      duration: 2000,
      dismissOnPageChange: false,
      position: "bottom",
      cssClass:"my-toast",
    });

    toast.present();
  }

  doubleClick(){
    if(this.clicked){
      this.platform.exitApp();
      return;
    }
    this.showNotification();
    this.clicked = true;
    setTimeout(()=>{
      this.clicked = false;
    },2100);
  }
}
