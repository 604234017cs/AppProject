import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LecturerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lecturer',
  templateUrl: 'lecturer.html',
})
export class LecturerPage {

  logindata: any = [];
  train: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LecturerPage');
    this.logindata = this.navParams.data;
    this.storage.get('user1').then((val) => {
      console.log(val);
    });
    console.log(this.logindata);
  }



  goedit1(logindata) {
    this.navCtrl.push("EditLecturerPage", logindata);
  }

  LecturerData(id) {
    this.navCtrl.push("LecturerDataPage", id);
  }

  alertlec() {
    this.navCtrl.push("AlertlecPage");
  }

}
