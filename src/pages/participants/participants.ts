import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrainPage } from '../train/train';
// import { Storage } from '@ionic/storage';
/**
 * Generated class for the ParticipantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-participants',
  templateUrl: 'participants.html',
})
export class ParticipantsPage {
  
  
  logindata :any =[];
  train: any;

  id;
  pid;
  
  
  dataParti = [];

  constructor(public navCtrl: NavController, public navParams: NavParams ) {
    
      // this.Pdata=this.navParams.data;
      // this.loadPData();
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticipantsPage');
    this.logindata = this.navParams.data;
    console.log(this.logindata);
  }


  goedit(logindata){
    this.navCtrl.push("EditParticipantsPage",logindata);
   }

  
  ParticipantsData(id){
    this.navCtrl.push("ParticipantsDataPage",{
      pid:id
    });
  }

  Trains(id){
    this.navCtrl.push(TrainPage,{
      id:id
    })
  }

}
