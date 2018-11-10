import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions,  } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-info-modal',
  templateUrl: 'info-modal.html',
})
export class InfoModalPage {

  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Back', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
    useWideViewPort: 'yes',
    toolbarcolor: '009900'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public viewCtrl: ViewController, private iab: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoModalPage');
  }

  closeModal(){
    this.navCtrl.pop();
  }
  newsPage(){
    console.log('Info function new page');
  }

  public payWithEcocash(){
    let target = "_blank";
    this.iab.create('https://services.gzu.ac.zw/ecocash/',target,this.options);
  }

}
