import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenfilePage } from './openfile';

@NgModule({
  declarations: [
    OpenfilePage,
  ],
  imports: [
    IonicPageModule.forChild(OpenfilePage),
  ],
})
export class OpenfilePageModule {}
