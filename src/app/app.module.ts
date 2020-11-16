

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
import { ParticipantsDatadetailPage } from '../pages/participants-datadetail/participants-datadetail';
import { TrainLoginPage } from '../pages/train-login/train-login';
import { TraindetailLoginPage } from '../pages/traindetail-login/traindetail-login';

import { DocumentViewer } from '@ionic-native/document-viewer';
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
    ParticipantsDatadetailPage,
    TrainLoginPage,
    TraindetailLoginPage
   
    
    
    
    
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
    ParticipantsDatadetailPage,
    TrainLoginPage,
    TraindetailLoginPage,

   
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoaddataProvider,DocumentViewer
  ]
})
export class AppModule {}