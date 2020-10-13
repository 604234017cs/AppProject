import { LoaddataProvider } from './../../providers/loaddata/loaddata';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Identifiers } from '@angular/compiler';



@IonicPage()
@Component({
  selector: 'page-cer',
  templateUrl: 'cer.html',
})
export class CerPage {
  cerdata: any= [];
  regis_id;
  pid;
  tid;

  constructor(public navCtrl: NavController, public navParams: NavParams, public datas: LoaddataProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CerPage');
    // this.regis_id = this.navParams.data;
    // console.log(this.regis_id);
    this.pid = this.navParams.get('pid');
    console.log(this.pid);
    this.tid = this.navParams.get('tid');
    console.log(this.tid);



    this.loadcer(this.pid,this.tid);
  }

  loadcer(pid,tid){
    this.datas.showcer(this.pid,this.tid).subscribe(data=>{
      this.cerdata = data;
      console.log(data);
    });
  
  }
  

  

}
