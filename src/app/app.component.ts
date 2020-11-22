import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as Enums from './../enums/enums';
import { HomePage } from '../pages/home/home';
// import { ParticipantsPage } from '../pages/participants/participants';
import { LogoutPage } from '../pages/logout/logout';
import { LoginPage } from '../pages/login/login';
// import { TrainPage } from '../pages/train/train';
import { TrainLoginPage } from '../pages/train-login/train-login';
// import { RegisParticipantsPage } from '../pages/regis-participants/regis-participants';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { BackgroundMode } from '@ionic-native/background-mode';
import { LoaddataProvider } from './../providers/loaddata/loaddata';
import * as moment from 'moment';
import { LocalNotifications } from '@ionic-native/local-notifications';
@Injectable()

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  interval;
  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public event: Events,
    private storage: Storage, private backgroundMode: BackgroundMode, public trarnregister: LoaddataProvider,
    private localNotifications: LocalNotifications) {
    this.initializeApp();
    this.Notification();
    this.storage.set("loginstatus", 0);

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'สำหรับผู้เข้าอบรม', component: HomePage },
      { title: 'สำหรับวิทยากร', component: LoginPage },
      { title: 'ข้อมูลการอบรม', component: TrainLoginPage },



    ];

    event.subscribe('username:Login', () => {
      this.pages = [
        { title: 'ออกจากระบบ', component: LogoutPage },
      ];
    });

    event.subscribe('username:Loguot', () => {
      this.pages = [
        { title: 'สำหรับผู้เข้าอบรม', component: HomePage },
        { title: 'สำหรับวิทยากร', component: LoginPage },
        { title: 'ข้อมูลการอบรม', component: TrainLoginPage },

      ];
      this.storage.set("loginstatus", 0);
      storage.remove('user');
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


  Notification() {

    this.interval = setInterval(() => {
      this.storage.get('loginstatus').then((status) => {
        this.backgroundMode.moveToForeground();
        this.backgroundMode.disableWebViewOptimizations();
        this.backgroundMode.isActive();
        if (status == 1) {

          this.storage.get('user').then((user) => {
            if (user[0]['type'] == 1) {

              let myDate = new Date();
              let day = myDate.getDate().toString();
              let month = (myDate.getMonth() + 1).toString();
              let year = myDate.getFullYear().toString();
              let date_now: any = year + '-' + month + '-' + day;
              // console.log(date_now);
              this.trarnregister.loaddatatrainregister(user[0]['P_ID']).subscribe((arry: any) => {

                // console.log("เวลาปัจจุบัน" + date_now);
                // console.log("เวลาอบรม" + arry[0]['Date']);
                // console.log(duration);
                // console.log(days);

                for (let i = 0; i < arry.length; i++) {
                  let date1 = moment(arry[i]['Date']);
                  let date2 = moment(date_now);
                  let duration = moment.duration(date1.diff(date2));
                  let days = duration.asDays();
                  if (days == 1) {
                    this.localNotifications.schedule({
                      title: 'คุณมีการอบรมในวันพรุ่งนี้',
                      text: 'อบรม' + arry[i]['T_Name'] + 'เวลา' + arry[i]['Time'],
                    });
                    console.log('อบรม' + arry[i]['T_Name'] + ' ' + 'เวลา ' + arry[i]['Time']);
                  }
                }
                // }

              });


            } else if (user[0]['type'] == 2) {
              // console.log("ผู้อบรม");
            }
          });

        } else if (status == 0) {

        }
      });


    }, 10000);

  }



}