import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { operators } from 'rxjs';
/**
 * Generated class for the OpenfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-openfile',
  templateUrl: 'openfile.html',
})
export class OpenfilePage {


  options:DocumentViewerOptions ={
    title:'My PDF'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private document: DocumentViewer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenfilePage');
  }

  Opendoc() {

    // let options:DocumentViewerOptions = {
    //   title: 'My PDF'
    // }


    this.document.viewDocument('http://localhost/ProjectWeb/doc/PhysRevA.93.032319.pdf', 'application/pdf', this.options)
  }

}
