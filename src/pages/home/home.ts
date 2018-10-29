import { ProductModalPage } from './../product-modal/product-modal';
import { WelcomePage } from './../welcome/welcome';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, NavParams, App } from 'ionic-angular';

//import {ProductModalPage} from '../product-modal/ProductModalPage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public sessionDetails: any;
  destacado: string = "abarrotes";
  pageTitle: any = "Inicio";
  
  constructor(public navCtrl: NavController, private modalCtrl: ModalController, public app: App) {
    const data = JSON.parse(localStorage.getItem('session'));
    this.sessionDetails = data.session;
  }

  openProductModal(id){
    const modal = this.modalCtrl.create(ProductModalPage, {productId: id});
    modal.present();
  }

  backToWelcome(){
    this.navCtrl.setRoot(WelcomePage);
  }

  logout(){
    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 2000);
  }
}

