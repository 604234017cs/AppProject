import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import * as Enums from '../enums/enums';

/**
 * Generated class for the EditLecturerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-lecturer',
  templateUrl: 'edit-lecturer.html',
})
export class EditLecturerPage {

  postdata: any={};
  lecturerdata: any = [];

  L_ID : string;
  Dir_Name : string;
  L_Name : string;
  Tell : string;
  Workplace : string;
  Username : string;
  Password : string;
 

  constructor(public navCtrl: NavController,
                     public navParams: NavParams,
                     public http : HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditLecturerPage');
    this.lecturerdata = this.navParams.data;
    console.log(this.lecturerdata);
    console.log(this.lecturerdata[0]['L_ID']);
    
    
    this.L_ID = this.lecturerdata[0]['L_ID'];
    this.Dir_Name = this.lecturerdata[0]['Dir_Name'];
    this.L_Name = this.lecturerdata[0]['L_Name'];
    this.Tell = this.lecturerdata[0]['Tell'];
    this.Workplace = this.lecturerdata[0]['Workplace'];
    this.Username = this.lecturerdata[0]['Username'];
    this.Password = this.lecturerdata[0]['Password'];

    if(this.L_ID != null){
      this.postdata.L_ID = this.L_ID;
    }if(this.Dir_Name != null){
      this.postdata.Dir_Name = this.Dir_Name;
    }if(this.L_Name != null){
      this.postdata.L_Name = this.L_Name;
    }if(this.Tell != null){
      this.postdata.Tell = this.Tell;
    }if(this.Workplace != null){
      this.postdata.Workplace = this.Workplace;
    }if(this.Username != null){
      this.postdata.Username = this.Username;
    }if(this.Password != null){
      this.postdata.Password = this.Password;
    }
  }

  Edit1(){
    let url = Enums.APIURL.URL + '/Appservice/lecturer/edit.php';

    let postdataset = new FormData();
    postdataset.append('L_ID', this.L_ID.toString());
    postdataset.append('Dir_Name', this.postdata.Dir_Name);
    postdataset.append('L_Name', this.postdata.L_Name);
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
          alert(call.msg)
        }
    });
  }

}
