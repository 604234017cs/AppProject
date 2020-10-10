import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LecturerDataPage } from './lecturer-data';

@NgModule({
  declarations: [
    LecturerDataPage,
  ],
  imports: [
    IonicPageModule.forChild(LecturerDataPage),
  ],
})
export class LecturerDataPageModule {}
