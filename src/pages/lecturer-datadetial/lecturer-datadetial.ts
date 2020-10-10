import { LoaddataProvider } from './../../providers/loaddata/loaddata';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the LecturerDatadetialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lecturer-datadetial',
  templateUrl: 'lecturer-datadetial.html',
})
export class LecturerDatadetialPage {
  training: any=[];
  Tid;
  id;
  regis : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams , public http:HttpClient, public loaddata :LoaddataProvider) {
    this.id = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LecturerDatadetialPage');
    this.training = this.navParams.data;
    console.log(this.training);
  }

  // ionViewWillEnter(){
  //   // console.log(this.id);

  //   let url: string = "http://localhost/Appservice/show_register.php";
  //   let dataPost = new FormData();
  //   dataPost.append('id', this.id);
  //   let data: Observable<any> = this.http.post(url, dataPost);
  //   data.subscribe(data => {
  //       // console.log(data);
  //       this.regis = data;
  //       console.log(this.regis);
  
  //   });
    

  // }

  Name(T_ID){
    console.log(T_ID);
    this.navCtrl.push("NamePage",T_ID);
  }

  summary(Tid){
    console.log(Tid);

    this.navCtrl.push("SummaryPage",{
      Tid:Tid
    });
  }

  upfile(){
    this.navCtrl.push("FilePage");

  }


  openfile(){
    this.navCtrl.push("OpenfilePage");
  }

}
