import { SearchResultsPage } from './../search-results/search-results';
import { ProductModalPage } from './../product-modal/product-modal';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController } from 'ionic-angular';

/**
 * Generated class for the SearchBarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-bar',
  templateUrl: 'search-bar.html',
})
export class SearchBarPage {
  items: any;
  showLoading = false;
  search: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiCall: AuthServiceProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchBarPage');
  }
  getItems(ev: any){
    this.showLoading = true;
    console.log(ev.target.value);
    var search = ev.target.value;
  
      this.apiCall.getData("store/search/"+search,"").then((result)=>{
        console.log(result);
        this.items = result['response'];
        this.showLoading = false;
      }).catch(error =>{
        console.log(error);
        this.items = [];
        this.showLoading = false;
      });

    
  }
  openProduct(id){
    console.log(id);
    const modal = this.modalCtrl.create(ProductModalPage, {productId: id});
    
    modal.present();
  }
  searchEnter(){
    console.log(this.search);
    var search = {search: this.search};
    this.navCtrl.push(SearchResultsPage, search);
  }
}
