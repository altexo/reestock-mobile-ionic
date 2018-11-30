import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the DeliveryDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delivery-details',
  templateUrl: 'delivery-details.html',
})

export class DeliveryDetailsPage {
  selectOptions: any;
  address: string;
  session = JSON.parse(localStorage.getItem('session'));
  shippingAddress = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private apiCall: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliveryDetailsPage');
    this.selectOptions = {
      title: 'Direcciones',
      subTitle: 'Selecciona una de tus direcciones guardades.',
      mode: 'md'
    };
    this.apiCall.getData("order/getAddresses/"+this.session.id_user,"").then((result)=>{
      console.log(result['response']);
      this.shippingAddress = result['response'].exists;
      
    }).catch((err)=>{
      console.log("Network error", err);
    });
  }
 
}
