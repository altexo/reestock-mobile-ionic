import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})

export class CartPage {
  products: any;
  loadingGif = "assets/imgs/loadingDots.gif";
  session = JSON.parse(localStorage.getItem('session'));
  shownGroup = null;
  constructor( public navParams: NavParams, private view: ViewController, private apiCall: AuthServiceProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
   // const session = JSON.parse(localStorage.getItem('session'));
    this.apiCall.getData('cart/getCartContent/'+this.session.id_user, "").then((result)=>{
      console.log(result);
      this.products = result['cart'];
    });
  }
  closeCartModal(){
    this.view.dismiss();
  }
  quantityHandler(type,id, i){
    this.toggleSection(i);
    console.log(this.products[i].quantity);
    console.log({id: id,type: type, user:this.session.id_user});
    this.apiCall.postData({id: id,type: type, user:this.session.id_user}, 'cart/quantity',"").then((result) =>{
      console.log(result['response']);
      if (result['error'] == true) {
          console.log('Algo salio mal.')
      }else if (result['msj'] == 'updated') {
          this.products[i].quantity = result['response'].quantity;
          this.products[i].sale_price = result['response'].sale_price;
          this.products[i].open = !this.products[i].open;
      }else if (result['msj'] == 'deleted'){
          this.products.splice(i, 1);
      }
     
    });
    
  }

  deleteFromCart(id, i){
    this.apiCall.postData({id: id, user:this.session.id_user}, 'cart/delete', "").then((result) => {
      // console.log(result);
      if (result['error'] == false) {
        this.products.splice(i, 1);
      }else{
        console.log('error detected');
      }
    });
  }
  toggleSection(i) {
    if (this.products[i].open == true) {
        console.log('true');

    }else{
      console.log('false')
      this.products[i].open = !this.products[i].open;
    }
    
  }
}
