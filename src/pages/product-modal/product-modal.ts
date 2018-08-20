import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ProductModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
@Component({
  selector: 'page-product-modal',
  templateUrl: 'product-modal.html',
})
export class ProductModalPage {

  constructor(private navParams: NavParams, private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductModalPage');
  }
  closeProductModal(){
    this.view.dismiss();
  }

}
