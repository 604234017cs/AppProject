import { ParticipantsPage } from './../participants/participants';
import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import * as Enums from './../../enums/enums';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
@Injectable()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  logindata: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public event: Events, private storage: Storage,
    public http: HttpClient) {



    this.logindata.username = "";
    this.logindata.password = "";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  Login() {

    if (this.logindata.username != "" && this.logindata.password != "") {
      console.log("user:", this.logindata.username);
      console.log("pass:", this.logindata.password);



      let url: string = Enums.APIURL.URL + "/AppService/login.php";

      let dataPost = new FormData();
      dataPost.append('user', this.logindata.username);
      dataPost.append('pass', this.logindata.password);

      let data: Observable<any> = this.http.post(url, dataPost);
      data.subscribe(data => {

        if (data != null) {
          this.event.publish('username:Login');
          let array = [];
          array.push({
            Dir_Name: data[0]['Dir_Name'],
            P_ID: data[0]['P_ID'],
            P_Name: data[0]['P_Name'],
            Password: data[0]['Password'],
            Tell: data[0]['Tell'],
            Username: data[0]['Username'],
            Workplace: data[0]['Password'],
            type: 1
          });

          this.storage.set("loginstatus", 1);
          this.storage.set("user", array);
          this.navCtrl.setRoot(ParticipantsPage, data);
        }
        console.log(data[0]['P_Name']);

      });


    } else {
      console.log("Enter Password");
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
  }



  RegisParticipants() {
    this.navCtrl.push("RegisParticipantsPage");
  }
}