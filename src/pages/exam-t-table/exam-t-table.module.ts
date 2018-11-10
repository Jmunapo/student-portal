import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamTTablePage } from './exam-t-table';

@NgModule({
  declarations: [
    ExamTTablePage,
  ],
  imports: [
    IonicPageModule.forChild(ExamTTablePage),
  ],
})
export class ExamTTablePageModule {}
