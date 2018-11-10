import { Component } from '@angular/core';
import { LoadingController, Loading, AlertController, App } from 'ionic-angular';

@Component({
  selector: 'student-residential',
  templateUrl: 'student-residential.html'
})
export class StudentResidentialComponent {
  loading: Loading;
  text: string;
  resData: any = {};

  constructor(
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private appCtrl: App
  ) {
    console.log('Hello StudentResidentialComponent Component');
    this.text = 'Hello World';
  }

  getRoom(){
    this.appCtrl.getRootNav().setRoot("AccommodationPage");
  }

  updateRes(){
    this.loading = this.loadingCtrl.create({
      content: 'Updating...',
      dismissOnPageChange: true
    });
    this.loading.present();
    console.log(this.resData);
    setTimeout(()=>{
      this.loading.dismiss();
      let alert = this.alertCtrl.create({
        message: "Successfully updated",
        buttons: ['Ok']
      });
      alert.present();
    },2000)
  }
  

}
