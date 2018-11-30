import { SearchBarPage } from './../../pages/search-bar/search-bar';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NavComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'nav',
  templateUrl: 'nav.html'
})
export class NavComponent {
@Input() navTitle: string;
  text: string;
 

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {
    console.log('Hello NavComponent Component');
    this.text = this.navTitle;
  }
  
  ngAfterViewinit(){
    this.text = this.navTitle;
  }

  openCart(){
    const modal = this.modalCtrl.create('CartPage');
    
    modal.present();
    console.log('fondekdnslkn');
  }
  OpensearchBar(){
    this.navCtrl.push(SearchBarPage);
  }

}
