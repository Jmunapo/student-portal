import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccommodationPage } from './accommodation';

@NgModule({
  declarations: [
    AccommodationPage,
  ],
  imports: [
    IonicPageModule.forChild(AccommodationPage),
  ],
})
export class AccommodationPageModule {}
