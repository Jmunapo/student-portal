import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentWelfarePage } from './student-welfare';

@NgModule({
  declarations: [
    StudentWelfarePage,
  ],
  imports: [
    IonicPageModule.forChild(StudentWelfarePage),
  ],
})
export class StudentWelfarePageModule {}
