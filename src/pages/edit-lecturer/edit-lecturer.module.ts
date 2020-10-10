import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditLecturerPage } from './edit-lecturer';

@NgModule({
  declarations: [
    EditLecturerPage,
  ],
  imports: [
    IonicPageModule.forChild(EditLecturerPage),
  ],
})
export class EditLecturerPageModule {}
