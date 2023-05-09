import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyModalComponent } from '../my-modal/my-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalCtrl: ModalController) { }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: MyModalComponent,
      componentProps: {
        modalData: {
          title: 'My Modal Title',
          message: 'This is a custom modal!',
        },
      },
      cssClass: 'my-modal-css',
      mode: 'ios',
    });
    await modal.present();
  }
}
