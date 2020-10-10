import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditParticipantsPage } from './edit-participants';

@NgModule({
  declarations: [
    EditParticipantsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditParticipantsPage),
  ],
})
export class EditParticipantsPageModule {}
