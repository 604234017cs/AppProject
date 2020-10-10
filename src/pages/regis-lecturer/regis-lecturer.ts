import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as Enums from '../enums/enums';



@IonicPage()
@Component({
  selector: 'page-regis-lecturer',
  templateUrl: 'regis-lecturer.html',
})
export class RegisLecturerPage {


  postdata: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: HttpClient) {
  }

  Register(){
      let url = Enums.APIURL.URL + '/AppService/lecturer/insert_regis.php';

      let postdataset = new FormData();
  
      postdataset.append('DirName', this.postdata.DirName);
      postdataset.append('Name', this.postdata.Name);
      postdataset.append('Tell', this.postdata.Tell);
      postdataset.append('Workplace', this.postdata.Workplace);
      postdataset.append('Username', this.postdata.Username);
      postdataset.append('Password', this.postdata.Password);

      let callback:Observable<any> = this.http.post(url,postdataset);
      callback.subscribe(call =>{
        if(call.status == 200){
          alert(call.msg);
          this.navCtrl.pop();
      }else{
        alert(call.msg);
      } 
     });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisLecturerPage');
  }

 
}