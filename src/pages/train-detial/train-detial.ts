import { ParticipantsPage } from './../participants/participants';
import { HttpClient } from '@angular/common/http';
import { LoaddataProvider } from './../../providers/loaddata/loaddata';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,Events } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import * as Enums from '../enums/enums';


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
                this.http.post(url1,dataset).subscribe((data:any)=>{
                  console.log(data);
                  // if(data != null){
                  //   const alert = this.alertCtrl.create({
                  //     title: 'สำเร็จ',
                  //     subTitle: 'เพิ่มการลงทะเบียนสำเร็จ',
                  //     buttons:[{
                  //       text: 'ตกลง',
                  //       handler:()=>{
                  //        this.navCtrl.pop();
                  //       }
                  //     }]
                  //   })
                  //   alert.present();
                  // }
                  
                });
              }
            }]
          })
          confirm.present();
      // //  let callback:Observable<any> = this.http.post(url,postdataset);
      // //  callback.subscribe(call =>{
      // //   if(call.status == 200){
      // //     alert(call.msg);
      // //     this.navCtrl.pop();
      // //   }else{
      // //   alert(call.msg);
      // // } 
      // // });
        }
      });
      // data.subscribe(data =>{

      //   console.log(data);
        

      //   if(data != null){

          
      //   this.event.publish('username:Login');

      //   this.navCtrl.setRoot(ParticipantsPage,data);
      //   }else{

      //   }
      //   console.log(data);

      // });

                   
    }else{
      console.log("Enter Password");
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
  }


 
  // regissTrain(){
  //   console.log(this.pid);     
  //   console.log(this.tid);     
  //   // console.log(this.id);     

  //   let url = Enums.APIURL.URL + '/Appservice/regis/regis.php';
  //   console.log("1");
  
  //   let url1 = 'http://localhost/Appservice/CheckRegis.php?tid='+this.tid+'&&pid='+this.pid;
  //   console.log("2");
  //   this.http.get(url1).subscribe((data:any)=>{
  //     console.log(data);

  //     console.log('databaseT_ID',data['T_ID']);
  //     console.log('databaseP_ID',data['P_ID']);
  //     console.log('tid',this.tid);
  //     console.log('pid',this.pid);
  //     // console.log(data['P_ID']);

  //    if(data['T_ID'] == this.tid && data['P_ID'] == this.pid){
  //       const alert = this.alertCtrl.create({
  //         title: 'เกิดข้อพิดผลาด',
  //         subTitle: 'คุณได้ลงทะเบียนนี้ไปแล้ว',
  //         buttons: ['OK']
          
  //       });
  //       alert.present();
  //     }
  //     else if(data['T_ID'] != this.tid && data['P_ID'] != this.pid){
  //       let dataset = JSON.stringify({
  //         T_ID:this.tid,
  //         P_ID:this.pid
  //       });
  //       let datapost = JSON.parse(dataset);
  //       const confirm = this.alertCt rl.create({
  //         title: 'ยืนยันการลงทะเบียน',
  //         message: 'กดปุ่มยืนยันการลงทะเบียน',
  //         buttons:[{
  //           text: 'ยืนยัน',
  //           handler:()=>{
  //             this.http.post(url,datapost).subscribe((data:any)=>{
  //               console.log(data);
  //               if(data != null){
  //                 const alert = this.alertCtrl.create({
  //                   title: 'สำเร็จ',
  //                   subTitle: 'เพิ่มการลงทะเบียนสำเร็จ',
  //                   buttons:[{
  //                     text: 'ตกลง',
  //                     handler:()=>{
  //                      this.navCtrl.pop();
  //                     }
  //                   }]
  //                 })
  //               }
                
  //             })
  //           }
  //         }]
  //       })
   

  //   // //  let callback:Observable<any> = this.http.post(url,postdataset);
  //   // //  callback.subscribe(call =>{
  //   // //   if(call.status == 200){
  //   // //     alert(call.msg);
  //   // //     this.navCtrl.pop();
  //   // //   }else{
  //   // //   alert(call.msg);
  //   // // } 
  //   // // });

  //     }

  //   })
    

  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainDetialPage');
    this.training = this.navParams.data;
    console.log(this.training);
  }

  // btregis(){
  //   let alert1 = this.alertCtrl.create({
  //     title: 'ยืนยันการลงทะเบียน',
  //     message:'คุณต้องการลงทะเบียน หรือไม่?',
  //     buttons: [{
  //         text: 'ยกเลิก',
  //         role: 'cancel',
  //         handler: () =>{
  //         }
  //       },
  //       {
  //         text: 'ใช่',
  //         handler: () => {
  //         this.regisTrain()
  //         }
  //       }
  //     ]
  //   });
  //   alert1.present();
  // }

 

 

  Name2(T_ID){
    console.log(T_ID);
    this.navCtrl.push("Name2Page",T_ID);
  }

 
}