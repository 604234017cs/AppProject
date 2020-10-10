import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisParticipantsPage } from './regis-participants';

@NgModule({
  declarations: [
    RegisParticipantsPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisParticipantsPage),
  ],
})
export class RegisParticipantsPageModule {}
