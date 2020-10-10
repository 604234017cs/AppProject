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
  constructor(public navCtrl: NavController, public navParams: NavParams, public datas: LoaddataProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CerPage');
    this.regis_id = this.navParams.data;
    console.log(this.regis_id);

    this.loadcer(this.regis_id);
  }

  loadcer(regis_id){
  
    this.datas.showcer(this.regis_id).subscribe(data=>{
      this.cerdata = data;
      console.log(data);
    });
  
  }
  

  

}
