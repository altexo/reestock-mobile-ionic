import { ProductModalPage } from './../product-modal/product-modal';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

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
 // departmentId: string;
 sub_category: string;
 products: any;
  constructor(public navCtrl: NavController, private modalCtrl: ModalController,public navPar: NavParams, public apiCall: AuthServiceProvider) {
  }
  



  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
     this.sub_category = this.navPar.get('id');
    this.apiCall.getData('store/products/sub_category/'+this.sub_category, "").then((result) => {
      
      this.products = result['products'];
      console.log(this.products);
    });
    
  }
  openProductModal(id){
   // console.log(id);
    const modal = this.modalCtrl.create(ProductModalPage, {productId: id});
    
    modal.present();
  }


}
