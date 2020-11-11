import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoaddataProvider } from '../../providers/loaddata/loaddata';
// import { TrainDetialPage } from '../train-detial/train-detial';
import { TraindetailLoginPage } from '../traindetail-login/traindetail-login';

/**
 * Generated class for the TrainLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-train-login',
  templateUrl: 'train-login.html',
})
export class TrainLoginPage {
  data: Object;
  tid;

  constructor(public navCtrl: NavController, public navParams: NavParams, public datas: LoaddataProvider) {
    this.loaddata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainLoginPage');
  }

  loaddata(){

    this.datas.getTrain().subscribe(datas=>{
      this.data=datas;
      console.log(datas);
      // this.tid = 
    });
  }


  // getdetail(){
  //   // console.log(this.id);
  //   // console.log(Tid);
    
  //   this.navCtrl.push(TrainDetialPage,{
  //     // Tid:Tid,
  //     // Pid:this.id
  //   });
  // }

  
  getdetail(item){
    this.navCtrl.push(TraindetailLoginPage,item);
  }

  getItems(ev:any) {
    let val = ev.target.value;

    if (val != 0) {
      this.datas.searchtrain(val).subscribe(datas => {
        this.data = datas;
      });
    }else {
      this.loaddata();
    }
  }
}
