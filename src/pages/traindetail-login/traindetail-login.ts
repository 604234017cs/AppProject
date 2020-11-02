import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoaddataProvider } from '../../providers/loaddata/loaddata';
import { HomePage } from '../home/home';

/**
 * Generated class for the TraindetailLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-traindetail-login',
  templateUrl: 'traindetail-login.html',
})
export class TraindetailLoginPage {
  data2:any=[];
tid;
  

  constructor(public navCtrl: NavController, public navParams: NavParams ,public datas: LoaddataProvider) {
  
  this.loaddata(this.tid);  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TraindetailLoginPage');
  }

  loaddata(id){
    this.datas.getTrain().subscribe((data:any)=>{
        this.data2 = data;
        console.log(data);   
    }) 
  }

  

  Login(){
    this.navCtrl.push(HomePage)
  }
}
