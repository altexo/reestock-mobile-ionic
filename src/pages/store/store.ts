import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {ProductsPage} from '../pages/products/products';
/**
 * Generated class for the StorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { ProductsPage } from "../../pages/products/products";


@IonicPage()
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})

export class StorePage {
  public hideMe = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad StorePage');
  }
  goToProductsPage(){
    this.navCtrl.push(ProductsPage);
  }

  hide() {
  
    if(this.hideMe == true)
    {
      this.hideMe = false;
    }else{
      this.hideMe = true;
    }
   
  }
  

}
