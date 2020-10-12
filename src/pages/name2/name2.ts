import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import * as Enums from './../../enums/enums';



@IonicPage()
@Component({
  selector: 'page-name2',
  templateUrl: 'name2.html',
})
export class Name2Page {
  id;
  regiss : any = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
    this.id = this.navParams.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NamePage2');
    console.log(this.id);
    let url: string = Enums.APIURL.URL + "/Appservice/show_register.php";
    let dataPost = new FormData();
    dataPost.append('id', this.id);
    let data: Observable<any> = this.http.post(url, dataPost);
    data.subscribe(data => {
        // console.log(data);
        this.regiss = data;
        console.log(this.regiss);

    });
  }

}