import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-student-welfare',
  templateUrl: 'student-welfare.html',
})


export class StudentWelfarePage {
  importance: number = 1;
  reportData: any = {};
  color: string[] = ['oneTwo' ,'oneTwo', 'threeFour','threeFour',
    'fiveSix','fiveSix','sevenEight','sevenEight','nineTen', 'nineTen'];
  importanceRange: string[] = ['Very Low' ,'Very Low', 'Low','Low',
    'Medium','Medium','High','High','Very High', 'Very High'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentWelfarePage');
  }

  rangeChange(ev){
    let val = ev.value;
    //console.log(ev, val);
  }

  selectSubject(){
    this.navCtrl.push('SelectSubjectPage');
  }

}
