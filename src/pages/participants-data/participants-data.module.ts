import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParticipantsDataPage } from './participants-data';

@NgModule({
  declarations: [
    ParticipantsDataPage,
  ],
  imports: [
    IonicPageModule.forChild(ParticipantsDataPage),
  ],
})
export class ParticipantsDataPageModule {}
