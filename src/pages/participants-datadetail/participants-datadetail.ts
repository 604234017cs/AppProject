import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import { LoaddataProvider } from '../../providers/loaddata/loaddata';
import * as Enums from '../enums/enums';


@IonicPage()
@Component({
  selector: 'page-participants-datadetail',
  templateUrl: 'participants-datadetail.html',
})
export class ParticipantsDatadetailPage {
  data:any=[];
  Tid;
  tid;
  id;
  // data:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,public datas: LoaddataProvider,
              public alertCtrl : AlertController) {
              }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticipantsDatadetailPage');
    this.data = this.navParams.data;
    console.log(this.data);
  }

  // loaddata(id){
  //   this.datas.loaddatatraindetail(id).subscribe((data:any)=>{
  //       this.data2 = data;
  //       console.log(this.data2);   
  //   }) 
  // }


  deletedata(regis_id){
    let url = Enums.APIURL.URL + "/Appservice/deleteregis.php";

    let postdata = new FormData();
    postdata.append('regis_id',regis_id.toString());

    this.http.post(url,postdata)
    .subscribe(data =>{
      if(data != null){
        this.navCtrl.pop();
      }
    },error=>{
    
    });
  }

  Evaluation(Tid){
   
    console.log(Tid);

    this.navCtrl.push("EvaluationPage",{
      Tid:Tid
    });
  }

  Name1(T_ID){
    console.log(T_ID);
    this.navCtrl.push("Name1Page",T_ID);
  }

  openfile(){
    this.navCtrl.push("OpenfilePage")
  }


  
  btdelete(regis_id){
    let alert1 = this.alertCtrl.create({
      title: 'ยืนยันการลบ',
      message:'คุณต้องการลบรายการนี้ หรือไม่?',
      buttons: [{
          text: 'ยกเลิก',
          role: 'cancel',
          handler: () =>{
          }
        },
        {
          text: 'ใช่',
          handler: () => {
          this.deletedata(regis_id)
          }
        }
      ]
    });
    alert1.present();
  }

  cer(regis_id){
    this.navCtrl.push("CerPage",regis_id)
  }
}
