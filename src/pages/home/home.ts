import { ParticipantsPage } from './../participants/participants';
import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import * as Enums from '../enums/enums';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  logindata:any = {};

  constructor(public navCtrl: NavController ,public navParams: NavParams ,public event : Events,
    public http:HttpClient) {
       
      

    this.logindata.username = "";
    this.logindata.password = "";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  Login(){

    if(this.logindata.username != "" && this.logindata.password!= ""){
      console.log("user:",this.logindata.username);
      console.log("pass:",this.logindata.password);

      

      let url:string = Enums.APIURL.URL + "/AppService/login.php";
     
      let dataPost = new FormData();
      dataPost.append('user', this.logindata.username);
      dataPost.append('pass', this.logindata.password);
            
      let data:Observable<any> = this.http.post(url,dataPost);
      data.subscribe(data =>{

        if(data != null){
        this.event.publish('username:Login');

        this.navCtrl.setRoot(ParticipantsPage,data);
        }
        console.log(data);

      });

                   
    }else{
      console.log("Enter Password");
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
  }

  

  RegisParticipants(){
    this.navCtrl.push("RegisParticipantsPage");
  }
}