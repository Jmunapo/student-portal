import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-exam-t-table',
  templateUrl: 'exam-t-table.html',
})
export class ExamTTablePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamTTablePage');
  }

  testFunc(){
    console.log("Answers");
  }

}
