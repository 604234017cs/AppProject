import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import * as Enums from './../../enums/enums';


@Injectable()
export class LoaddataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoaddataProvider Provider');
  }

  loaddatatraindetail(Tid){
    const url = "http://localhost/AppService/traindetail.php?Tid="+Tid;
    return this.http.get(url);
  }
  loaddatatrainregister(Pid){
    const url = "http://localhost/AppService/registrain.php?Pid="+Pid;
    return this.http.get(url);
  }

  // regisTrain(){
  //   const url = "http://localhost/Appservice/regis/regis.php";
  //   return this.http.get(url);
  // }

  getTrain(){
    const url = "http://localhost/AppService/train/loaddata.php";
    return this.http.get(url);
  }

  searchtrain(query){
    let url = "http://localhost/todoslim/public/search/"+query;   
    return this.http.get(url);
  }

  showRe(){
    const url = "http://localhost/Appservice/show_register.php";
    return this.http.get(url);
  }

  loadParticipants(){
    const url = "http://localhost/Appservice/participants/loaddata.php";
    return this.http.get(url);
  }

  loadLecturer(){
    const url = "http://localhost/Appservice/lecturer/loaddata.php";
    return this.http.get(url);
  }


  // สรุปการประเมิน
  sum_clairity(id){
    const url = "http://localhost/Appservice/summary/sum_Clarity.php?id="+id;
    return this.http.get(url);
  }


sum_ability(id){
  const url = "http://localhost/Appservice/summary/sum_ability.php?id="+id;
  return this.http.get(url);
  }

  sum_contentAssociation(id){
    const url = "http://localhost/Appservice/summary/sum_ContentAssociation.php?id="+id;
    return this.http.get(url);

  }

  sum_completeness(id){
    const url ="http://localhost/Appservice/summary/sum_Completeness.php?id="+id;
    return this.http.get(url);
  }

  sum_BeforeTraining(id){
    const url ="http://localhost/Appservice/summary/sum_BeforeTraining.php?id="+id;
    return this.http.get(url);
  }

  sum_AfterTraining(id){
    const url ="http://localhost/Appservice/summary/sum_AfterTraining.php?id="+id;
    return this.http.get(url);
  }

  sum_Applied(id){
    const url =" http://localhost/Appservice/summary/sum_Applied.php?id="+id;
    return this.http.get(url);
  }

  sum_KnowledgeGained(id){
    const url ="http://localhost/Appservice/summary/sum_KnowledgeGained.php?id="+id;
    return this.http.get(url);
  }

  sum_Transferable(id){
    const url ="http://localhost/Appservice/summary/sum_Transferable.php?id="+id;
    return this.http.get(url);
  }

 Suggestion(id){  
    const url =  "http://localhost/Appservice/summary/sum_Suggestion.php?id="+id;
    return this.http.get(url);
 }

 //end สรุปการประเมิน

 checkregister(tid,pid){
  const url = "http://localhost/Appservice/CheckRegis.php?tid="+tid+"&&pid="+pid;
 }
 

 showcer(regis_id){
   const url = "http://localhost/Appservice/showcer.php?regis_id="+regis_id;
   return this.http.get(url);
 }
 

}
