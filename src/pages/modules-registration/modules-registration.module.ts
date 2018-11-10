import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModulesRegistrationPage } from './modules-registration';

@NgModule({
  declarations: [
    ModulesRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(ModulesRegistrationPage),
  ],
})
export class ModulesRegistrationPageModule {}
