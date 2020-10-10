import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeleteTrainPage } from './delete-train';

@NgModule({
  declarations: [
    DeleteTrainPage,
  ],
  imports: [
    IonicPageModule.forChild(DeleteTrainPage),
  ],
})
export class DeleteTrainPageModule {}
