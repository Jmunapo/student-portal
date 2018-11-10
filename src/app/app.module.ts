import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClientModule } from "@angular/common/http";
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/account/login/login';
import { AuthProvider } from '../providers/auth/auth';
import { BackbuttonService } from '../src/services/backbutton.service';


import { SuperTabsModule } from 'ionic2-super-tabs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DbServiceProvider } from '../providers/db-service/db-service';

//https://www.mtu.edu/deanofstudents/students/concern/
//http://www.ac.ac.cy/en/current-students/student-life

import { OneSignal } from '@ionic-native/onesignal'; //GitHub Acc
//Onesiginal AppID: 0f890728-d58c-4822-92ed-6e2d7a076031
//Firebase jmunapo@gmail.com Chrome

@NgModule({
  declarations: [
    MyApp,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    SuperTabsModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    BackbuttonService,
    InAppBrowser,
    DbServiceProvider,
    OneSignal
  ]
})
export class AppModule {}
