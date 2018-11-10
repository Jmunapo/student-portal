import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';
import { StudentResidentialComponent } from '../../components/student-residential/student-residential';

@NgModule({
  declarations: [
    DashboardPage,
    StudentResidentialComponent
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage)
  ],
})
export class DashboardPageModule {}
