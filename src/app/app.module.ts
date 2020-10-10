

import { TrainPage } from './../pages/train/train';
import { LecturerPage } from './../pages/lecturer/lecturer';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ParticipantsPage } from '../pages/participants/participants';
import { LoaddataProvider } from '../providers/loaddata/loaddata';
import { TrainDetialPage } from '../pages/train-detial/train-detial';
import { LogoutPage } from '../pages/logout/logout';
import { LoginPage } from '../pages/login/login';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LecturerPage,
    ParticipantsPage,
    LogoutPage,
    TrainPage,
    TrainDetialPage,
    LoginPage,
    
   
    
    
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LecturerPage,
    ParticipantsPage,
    LogoutPage,
    TrainPage,
    TrainDetialPage,
    LoginPage,
    

   
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoaddataProvider
  ]
})
export class AppModule {}