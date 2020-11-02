import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainLoginPage } from './train-login';

@NgModule({
  declarations: [
    TrainLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainLoginPage),
  ],
})
export class TrainLoginPageModule {}
