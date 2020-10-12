import { ParticipantsPage } from './../participants/participants';
import { HttpClient } from '@angular/common/http';
import { LoaddataProvider } from './../../providers/loaddata/loaddata';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,Events } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import * as Enums from './../../enums/enums';

@IonicPage()
@Component({
  selector: 'page-train-detial',
  templateUrl: 'train-detial.html',
})
export class TrainDetialPage {
  training: any=[];
  // data: Object=[];
  // cid:any=[];
  Tid;
  data2:any=[];
  tid;
  postdata: any = {};
  pid;
  T_ID;
  P_ID;
  constructor(public navCtrl: NavController, public navParams: NavParams,public datas: LoaddataProvider, 
              public http: HttpClient , public alertCtrl : AlertController,public event : Events) {
    // this.Tid = this.navParams.get('Tid');
    this.tid = this.navParams.get('Tid');
    this.pid = this.navParams.get('Pid');
    console.log('tid',this.pid);
    console.log('pid',this.tid);
    // this.id = this.navParams.get('Tid');
    // console.log(this.id);
    this.loaddata(this.tid);
  }

  loaddata(id){
    this.datas.loaddatatraindetail(id).subscribe((data:any)=>{
        this.data2 = data;
        console.log(data);   
    }) 
  }


  regisTrain(){

    if(this.tid != "" && this.pid != ""){
      // console.log("tid:",this.tid);
      // console.log("pid:",this.pid);

      let url1 = Enums.APIURL.URL + '/Appservice/regis/regis.php';

      let url:string = Enums.APIURL.URL + "/AppService/testcheckregis.php";
     
      let dataPost = new FormData();
      dataPost.append('tid', this.tid);
      dataPost.append('pid', this.pid);
            
      let datas:Observable<any> = this.http.post(url,dataPost);datas.subscribe((data:any)=>{
        
        console.log(data);
        // console.log(data2.T_ID);
        // console.log(data[0]['T_ID']);
        // console.log(data2[0]['P_ID']);
        if(data.status == 404){
          console.log("1");
          
          const alert = this.alertCtrl.create({
            title: 'เกิดข้อพิดผลาด',
            subTitle: 'คุณได้ลงทะเบียนนี้ไปแล้ว',
            buttons: ['OK']
            
          });
          alert.present();
        }else if(data.status == 200) { 
          console.log("2");
          let dataset = new FormData();
          dataset.append('T_ID', this.tid);
          dataset.append('P_ID',this.pid);
          const confirm = this.alertCtrl.create({
            title: 'ยืนยันการลงทะเบียน',
            message: 'กดปุ่มยืนยันการลงทะเบียน',
            buttons:[{
              text: 'ยืนยัน',
              handler:()=>{
                this.navCtrl.pop();
                this.http.post(url1,dataset).subscribe((data:any)=>{
                  console.log(data);
                });
              }
            }]
          })
          confirm.present();
        }
      });
  
                
    }
  }


 
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainDetialPage');
    // this.training = this.navParams.data;
    // console.log(this.training);
  }



  Name2(T_ID){
    console.log(T_ID);
    this.navCtrl.push("Name2Page",T_ID);
  }

 
}