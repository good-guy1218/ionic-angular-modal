import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MyModalComponent } from './my-modal.component';

@NgModule({
  declarations: [
    MyModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
})
export class MyModalModule { }
