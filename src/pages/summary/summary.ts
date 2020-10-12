import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoaddataProvider } from '../../providers/loaddata/loaddata';
import { Observable } from 'rxjs/Observable';
declare var google;

@IonicPage()
@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
})
export class SummaryPage {
  sum_Clarity  : any = {};
  sum_Ability   : any = {};
  sum_ContentAssociation   : any = {};
  sum_Completeness   : any = {};
  sum_BeforeTraining  : any = {};
  sum_AfterTraining   : any = {};
  sum_Applied : any = {};
  sum_KnowledgeGained : any = {};
  sum_Transferable  : any = {};
  Tid;
  id;
  dataother:any=[];

  // Suggestion : any =[];



  constructor(public navCtrl: NavController, public navParams: NavParams, public loaddata : LoaddataProvider,public http: HttpClient) {
    // this.id = this.navParams.data;
    this.id = this.navParams.get('Tid');
    console.log(this.id);

   

    this.showchart1(this.id);
    this.showchart2(this.id);
    this.showchart3(this.id);
    this.showchart4(this.id);
    this.showchart5(this.id);
    this.showchart6(this.id);
    this.showchart7(this.id);
    this.showchart8(this.id);
    this.showchart9(this.id);
    this.getSuggestion(this.id);
    // this.suggestion();

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SummaryPage');
  }

  
  getSuggestion(id){
    
    this.loaddata.Suggestion(this.id).subscribe(loaddata=>{
      // console.log("33");
      this.dataother=loaddata;
      console.log(this.dataother);
      
    });
  }



  showchart1(id){
    console.log("1");
    
    this.loaddata.sum_clairity(this.id).subscribe(data=>{
      this.sum_Clarity = data;
      console.log(data);
    var dataset = new google.visualization.DataTable();
        dataset.addColumn('string', 'Topping');
        dataset.addColumn('number', 'Slices');
        for(let x of this.sum_Clarity){
          dataset.addRows([
            [x['Clarity'], parseInt(x['num'])],
          ]);
        }
        var options = {'title':'การถ่ายทอดความรู้ของวิทยากรมีความชัดเจน',
                       'width':400,
                       'height':300};
        var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
        chart.draw(dataset, options);
      });
        
  }


  showchart2(id){
    console.log("2");
    this.loaddata.sum_ability(this.id).subscribe(data=>{
      this.sum_Ability = data;
      console.log(data);
    var dataset = new google.visualization.DataTable();
        dataset.addColumn('string', 'Topping');
        dataset.addColumn('number', 'Slices');
        for(let x of this.sum_Ability){
          dataset.addRows([
            [x['Ability'], parseInt(x['num'])],
          ]);
        }
        var options = {'title':'ความสามารถในการอธิบายเนื้อหา',
                       'width':400,
                       'height':300};
        var chart = new google.visualization.PieChart(document.getElementById('chart_div2'));
        chart.draw(dataset, options);
      });
        
  }

  showchart3(id){
    console.log("3");
    this.loaddata.sum_contentAssociation(this.id).subscribe(data=>{
      this.sum_ContentAssociation = data;
      console.log(data);
    var dataset = new google.visualization.DataTable();
        dataset.addColumn('string', 'Topping');
        dataset.addColumn('number', 'Slices');
        for(let x of this.sum_ContentAssociation){
          dataset.addRows([
            [x['ContentAssociation'], parseInt(x['num'])],
          ]);
        }
        var options = {'title':'การเชื่อมโยงเนื้อหาในการฝึกอบรม',
                       'width':400,
                       'height':300};
        var chart = new google.visualization.PieChart(document.getElementById('chart_div3'));
        chart.draw(dataset, options);
      });
  }


  showchart4(id){
    console.log("4");
    this.loaddata.sum_completeness(this.id).subscribe(data=>{
      this.sum_Completeness = data;
      console.log(data);
    var dataset = new google.visualization.DataTable();
        dataset.addColumn('string', 'Topping');
        dataset.addColumn('number', 'Slices');
        for(let x of this.sum_Completeness){
          dataset.addRows([
            [x['Completeness'], parseInt(x['num'])],
          ]);
        }
        var options = {'title':'มีความครบถ้วนของเนื้อหาในการฝึกอบรม',
                       'width':400,
                       'height':300};
        var chart = new google.visualization.PieChart(document.getElementById('chart_div4'));
        chart.draw(dataset, options);
      });
        
  }
  
  
  showchart5(id){
    console.log("5");
    this.loaddata.sum_BeforeTraining(this.id).subscribe(data=>{
      this.sum_BeforeTraining = data;
      console.log(data);
    var dataset = new google.visualization.DataTable();
        dataset.addColumn('string', 'Topping');
        dataset.addColumn('number', 'Slices');
        for(let x of this.sum_BeforeTraining){
          dataset.addRows([
            [x['BeforeTraining'], parseInt(x['num'])],
          ]);
        }
        var options = {'title':'ความรู้ ความเข้าใจในเรื่องนี้ก่อนการอบรม',
                       'width':400,
                       'height':300};
        var chart = new google.visualization.PieChart(document.getElementById('chart_div5'));
        chart.draw(dataset, options);
      });
        
  }


  showchart6(id){
    console.log("6");
    this.loaddata.sum_AfterTraining(this.id).subscribe(data=>{
      this.sum_AfterTraining = data;
      console.log(data);
    var dataset = new google.visualization.DataTable();
        dataset.addColumn('string', 'Topping');
        dataset.addColumn('number', 'Slices');
        for(let x of this.sum_AfterTraining){
          dataset.addRows([
            [x['AfterTraining'], parseInt(x['num'])],
          ]);
        }
        var options = {'title':'ความรู้ ความเข้าใจในเรื่องนี้หลังการอบรม',
                       'width':400,
                       'height':300};
        var chart = new google.visualization.PieChart(document.getElementById('chart_div6'));
        chart.draw(dataset, options);
      });
        
  }

  showchart7(id){
    console.log("7");
    this.loaddata.sum_Applied(this.id).subscribe(data=>{
      this.sum_Applied = data;
      console.log(data);
    var dataset = new google.visualization.DataTable();
        dataset.addColumn('string', 'Topping');
        dataset.addColumn('number', 'Slices');
        for(let x of this.sum_Applied){
          dataset.addRows([
            [x['Applied'], parseInt(x['num'])],
          ]);
        }
        var options = {'title':'สามารถนำความรู้ที่ได้รับไปประยุกต์ใช้ในการปฏิบัติงานได้',
                       'width':400,
                       'height':300};
        var chart = new google.visualization.PieChart(document.getElementById('chart_div7'));
        chart.draw(dataset, options);
      });
        
  }


  showchart8(id){
    console.log("8");
    this.loaddata.sum_KnowledgeGained(this.id).subscribe(data=>{
      this.sum_KnowledgeGained = data;
      console.log(data);
    var dataset = new google.visualization.DataTable();
        dataset.addColumn('string', 'Topping');
        dataset.addColumn('number', 'Slices');
        for(let x of this.sum_KnowledgeGained){
          dataset.addRows([
            [x['KnowledgeGained'], parseInt(x['num'])],
          ]);
        }
        var options = {'title':'มีความมั่นใจและสามารถนำความรู้ที่ได้รับไปใช้ได้',
                       'width':400,
                       'height':300};
        var chart = new google.visualization.PieChart(document.getElementById('chart_div8'));
        chart.draw(dataset, options);
      });
        
  }

  showchart9(id){
    console.log("9");
    this.loaddata.sum_Transferable(this.id).subscribe(data=>{
      this.sum_Transferable = data;
      console.log(data);
    var dataset = new google.visualization.DataTable();
        dataset.addColumn('string', 'Topping');
        dataset.addColumn('number', 'Slices');
        for(let x of this.sum_Transferable){
          dataset.addRows([
            [x['Transferable'], parseInt(x['num'])],
          ]);
        }
        var options = {'title':'สามารถนำความรู้ไปเผยแพร่/ถ่ายทอดได้',
                       'width':400,
                       'height':300};
        var chart = new google.visualization.PieChart(document.getElementById('chart_div9'));
        chart.draw(dataset, options);
      });
  }





}
