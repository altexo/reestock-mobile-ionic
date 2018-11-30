import { ProductModalPage } from './../product-modal/product-modal';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the SearchResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
  
})
export class SearchResultsPage {
  search: string;
  products: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private apiCall: AuthServiceProvider, private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.search = this.navParams.get("search");
    console.log(this.search);
    this.apiCall.getData("store/search/get-by/"+this.search, "").then((result)=>{
      console.log(result);
      this.products = result['response'];
    })
    console.log('ionViewDidLoad SearchResultsPage');
  }
  openProduct(id){
    console.log(id);
    const modal = this.modalCtrl.create(ProductModalPage, {productId: id});
    
    modal.present();
  }

}
