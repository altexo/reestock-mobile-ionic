import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, ModalController } from 'ionic-angular';

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
  showLoading = false;
  inCart = false;
  productId: string;
  product: any;
  reestock = 0; 
  quantity = 1;
  session = JSON.parse(localStorage.getItem('session'));
  addToCartButton:boolean=false;
  cartDetails: any;
 
 
  constructor(public navParams: NavParams, private view: ViewController, public modalCtrl: ModalController, public apiCall: AuthServiceProvider) {
  }
  openProductModal(){
    const modal = this.modalCtrl.create('ProductModalPage');
    
    modal.present();
  }
  openCart(){
    const modal = this.modalCtrl.create('CartPage');
    
    modal.present();
    console.log('fondekdnslkn');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductModalPage');
   
    this.productId = this.navParams.get('productId');
    console.log(this.productId);
    this.apiCall.getData('store/products/get_product/'+this.productId+'/'+this.session.id_user, "").then((result) => {
      this.product = result['product'];
      this.inCart = result['response'].isInCart;
      this.addToCartButton = result['response'];
      this.cartDetails = result['response'];
      
      console.log(this.cartDetails);
    });
  }
  closeProductModal(){
    this.view.dismiss();
  }

  reestockFrequency(){
    console.log(this.reestock) ;//show nothing 
    this.addToCartButton = true;
  }
  addToCart(){
   
    var productObj = {'id': this.productId, 'quantity': this.quantity, 'frequency': this.reestock, 'user': this.session.id_user};
    this.apiCall.postData(productObj, 'cart/addToCart','').then((result) => {
      console.log(result);
      if (result['error'] == false) {
        this.inCart = true;
        this.cartDetails.quantity = 1;
        this.cartDetails.cart_id = result['response'].id;
      }
    });
    console.log(productObj);
  }
  quantityHandler(type,id){

    this.showLoading = true;
    this.apiCall.postData({id: id,type: type, user:this.session.id_user}, 'cart/quantity',"").then((result) =>{
      console.log(result['response']);
      if (result['error'] == true) {
          console.log('Algo salio mal.')
      }else if (result['msj'] == 'updated') {
          this.cartDetails.quantity = result['response'].quantity;
          this.showLoading = false;
      }else if (result['msj'] == 'deleted'){
          this.inCart = false;
          this.showLoading = false;
      }
     
    });
    
  }
  private increment () {
    this.quantity++;
  }
  
  private decrement () {
    if (this.quantity == 1) {
      this.quantity = 1;
    }else{
    this.quantity--;
    }
  }

}
