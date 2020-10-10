import { LecturerPage } from './../lecturer/lecturer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Events } from 'ionic-angular';
import * as Enums from '../enums/enums';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  logindata:any = {};


  constructor(public navCtrl: NavController, public navParams: NavParams,public event : Events, public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  Login1(){
    if(this.logindata.username != "" && this.logindata.password!= ""){
      console.log("user:",this.logindata.username);
      console.log("pass:",this.logindata.password);

      

      let url:string = Enums.APIURL.URL +  "/AppService/login1.php";
      // let dataPost = JSON.stringify({
      //                   user:this.logindata.username,
      //                   pass:this.logindata.password,
      //                 });

      // this.http.post(url,dataPost)
      // .map(res=>res.json())
      // .subscribe(data=>{
      //     console.log(data);
      // });
      let dataPost = new FormData();
      dataPost.append('user', this.logindata.username);
      dataPost.append('pass', this.logindata.password);
            
      let data:Observable<any> = this.http.post(url,dataPost);
      data.subscribe(data =>{

        if(data != null){
        this.event.publish('username:Login');

        this.navCtrl.setRoot(LecturerPage,data);
        }
        console.log(data);
      });

                   
    }else{
      console.log("Enter Password");
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
  
  }


  

  RegisLecturer(){
    this.navCtrl.push("RegisLecturerPage");
  }
}
