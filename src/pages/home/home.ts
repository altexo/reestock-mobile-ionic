import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';

//import {ProductModalPage} from '../product-modal/ProductModalPage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
    destacado: string = "abarrotes";
    pageTitle: any = "Inicio";
  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {

  }

  openProductModal(){
    const modal = this.modalCtrl.create('ProductModalPage');
    
    modal.present();
  }


}
