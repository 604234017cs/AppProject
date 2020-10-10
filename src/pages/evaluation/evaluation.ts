import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import * as Enums from '../enums/enums';


@IonicPage()
@Component({
  selector: 'page-evaluation',
  templateUrl: 'evaluation.html',
})
export class EvaluationPage {
  postdata: any = {};
  Tid;
  id;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: HttpClient) {
    this.id = this.navParams.get('Tid');
    console.log(this.id);

  }
  Evaluation(){
    let url = Enums.APIURL.URL +  '/Appservice/evaluate.php';
    // console.log(this.postdata.Clarity);
    console.log(this.id);
    
    let postdataset = new FormData();
    postdataset.append('T_ID', this.id);
    // postdataset.append('T_ID', this.postdata.T_ID);
    // postdataset.append('L_ID', this.postdata.L_ID);
    postdataset.append('Clarity', this.postdata.Clarity);
    postdataset.append('Ability', this.postdata.Ability);
    postdataset.append('ContentAssociation', this.postdata.ContentAssociation);
    postdataset.append('Completeness', this.postdata.Completeness);
    postdataset.append('BeforeTraining', this.postdata.BeforeTraining);
    postdataset.append('AfterTraining', this.postdata.AfterTraining);
    postdataset.append('Applied', this.postdata.Applied);
    postdataset.append('KnowledgeGained', this.postdata.KnowledgeGained);
    postdataset.append('Transferable', this.postdata.Transferable);
    postdataset.append('Suggestion', this.postdata.Suggestion);


    let callback:Observable<any>  = this.http.post(url,postdataset);
    callback.subscribe(call =>{
      if(call.status == 200){
        alert(call.msg);
        this.navCtrl.pop();
    }else{
      alert(call.msg);
    } 
   });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EvaluationPage');
  }



  
}
