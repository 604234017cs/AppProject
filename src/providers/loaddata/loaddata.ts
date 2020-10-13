import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Enums from './../../enums/enums';


@Injectable()
export class LoaddataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoaddataProvider Provider');
  }



  loaddatatraindetail(Tid,Pid){
    const url =  Enums.APIURL.URL + "/AppService/traindetail.php?Tid="+Tid+"&&Pid="+Pid;
    return this.http.get(url);
    // const url = "http://localhost/Appservice/CheckRegis.php?tid="+tid+"&&pid="+pid;
  }

  loaddatatraindetail1(Tid){
    const url =  Enums.APIURL.URL + "/AppService/traindetail1.php?Tid="+Tid;
    return this.http.get(url);
  }

  loaddatatrainregister(Pid){
    const url =  Enums.APIURL.URL + "/AppService/registrain.php?Pid="+Pid;
    return this.http.get(url);
  }

  // regisTrain(){
  //   const url = "http://localhost/Appservice/regis/regis.php";
  //   return this.http.get(url);
  // }

  getTrain(){
    const url =  Enums.APIURL.URL + "/AppService/train/loaddata.php";
    return this.http.get(url);
  }

  

  searchtrain(query){
    let url =  Enums.APIURL.URL + "/todoslim/public/search/"+query;   
    return this.http.get(url);
  }

  showRe(){
    const url =  Enums.APIURL.URL + "/Appservice/show_register.php";
    return this.http.get(url);
  }

  loadParticipants(){
    const url =  Enums.APIURL.URL + "/Appservice/participants/loaddata.php";
    return this.http.get(url);
  }

  loadLecturer(){
    const url =  Enums.APIURL.URL + "/Appservice/lecturer/loaddata.php";
    return this.http.get(url);
  }


  // สรุปการประเมิน
  sum_clairity(id){
    const url =  Enums.APIURL.URL + "/Appservice/summary/sum_Clarity.php?id="+id;
    return this.http.get(url);
  }


sum_ability(id){
  const url = Enums.APIURL.URL + "/Appservice/summary/sum_ability.php?id="+id;
  return this.http.get(url);
  }

  sum_contentAssociation(id){
    const url =  Enums.APIURL.URL + "/Appservice/summary/sum_ContentAssociation.php?id="+id;
    return this.http.get(url);

  }

  sum_completeness(id){
    const url =  Enums.APIURL.URL +"/Appservice/summary/sum_Completeness.php?id="+id;
    return this.http.get(url);
  }

  sum_BeforeTraining(id){
    const url =  Enums.APIURL.URL + "/Appservice/summary/sum_BeforeTraining.php?id="+id;
    return this.http.get(url);
  }

  sum_AfterTraining(id){
    const url = Enums.APIURL.URL + "/Appservice/summary/sum_AfterTraining.php?id="+id;
    return this.http.get(url);
  }

  sum_Applied(id){
    const url =  Enums.APIURL.URL + "/Appservice/summary/sum_Applied.php?id="+id;
    return this.http.get(url);
  }

  sum_KnowledgeGained(id){
    const url =  Enums.APIURL.URL + "/Appservice/summary/sum_KnowledgeGained.php?id="+id;
    return this.http.get(url);
  }

  sum_Transferable(id){
    const url = Enums.APIURL.URL + "/Appservice/summary/sum_Transferable.php?id="+id;
    return this.http.get(url);
  }

 Suggestion(id){  
    const url =  Enums.APIURL.URL + "/Appservice/summary/sum_Suggestion.php?id="+id;
    return this.http.get(url);
 }
 //end สรุปการประเมิน

 checkregister(tid,pid){
  const url =  Enums.APIURL.URL + "/Appservice/CheckRegis.php?tid="+tid+"&&pid="+pid;
 }
 

 showcer(pid,tid){
   const url =  Enums.APIURL.URL + "/Appservice/showcer.php?pid="+pid+"&&tid="+tid;
   return this.http.get(url);
   
 }
 

}
