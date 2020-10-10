import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { LoaddataProvider } from './../../providers/loaddata/loaddata';
import * as Enums from '../enums/enums';

 
@IonicPage()
@Component({
  selector: 'page-participants-data',
  templateUrl: 'participants-data.html',
})
export class ParticipantsDataPage {
  id;
  Pid;
  lec : any = [];
  data:any =[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,public datas: LoaddataProvider) {
    this.id = this.navParams.data;
    this.Pid = this.navParams.get('pid');
    console.log(this.Pid);

    this.loaddata(this.Pid);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticipantsDataPage');
  }
  loaddata(Pid){
    this.datas.loaddatatrainregister(Pid).subscribe((data:any)=>{
        this.data = data;
        console.log(data);   
        // console.log(this.data[0]['T_ID']);
    }) 
  }
  

  ionViewWillEnter(){
    console.log(this.id);

    let url: string = Enums.APIURL.URL + "/Appservice/participants/participants_data.php";
    let dataPost =  new FormData();
    dataPost.append('id', this.id);
    let data: Observable<any> = this.http.post(url, dataPost);
    data.subscribe(data => {
      // console.log(data) 
      this.lec = data;
        console.log(this.lec);
    });
  }

  getdetail(item){
    this.navCtrl.push("ParticipantsDatadetailPage",item);
  }
  

}