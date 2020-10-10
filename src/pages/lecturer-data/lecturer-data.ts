import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import * as Enums from '../enums/enums';


@IonicPage()
@Component({
  selector: 'page-lecturer-data',
  templateUrl: 'lecturer-data.html',
})
export class LecturerDataPage {
  id;
  lec : any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
    this.id = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LecturerDataPage');
  }

  ionViewWillEnter() {
    console.log(this.id);

    let url: string = Enums.APIURL.URL + "/Appservice/lecturer/lecturer_data.php";
    let dataPost = new FormData();
    dataPost.append('id', this.id);
    let data: Observable<any> = this.http.post(url, dataPost);
    data.subscribe(data => {
        // console.log(data);
        this.lec = data;
        console.log(this.lec);
  
  });

}

  getdetail(item){
    this.navCtrl.push("LecturerDatadetialPage",item);
  }


}



