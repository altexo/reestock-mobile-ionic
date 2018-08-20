import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }
  openProductModal(){
    const modal = this.modalCtrl.create('ProductModalPage');
    
    modal.present();
  }

}