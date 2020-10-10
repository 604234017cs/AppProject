import {TrainDetialPage} from '../train-detial/train-detial';
import { LoaddataProvider } from './../../providers/loaddata/loaddata';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-train',
  templateUrl: 'train.html',
})
export class TrainPage {
  data: Object;

  id;
  Tid;
  Pid;
 

  
  constructor(public navCtrl: NavController, public navParams: NavParams,  public datas: LoaddataProvider) {

    this.id = this.navParams.get('id');
    console.log(this.id);
    
  this.loaddata();
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainPage');
    
  }

  
 
  loaddata(){

    this.datas.getTrain().subscribe(datas=>{
      this.data=datas;
      console.log(datas);
    });
  }
 

  getdetail(Tid){
    // console.log(this.id);
    // console.log(Tid);
    
    this.navCtrl.push(TrainDetialPage,{
      Tid:Tid,
      Pid:this.id
    });
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