import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  responseData: any;
  userData = {"name": "", "email": "", "phone": "", "password": "", "repeatPassword": ""};

  presentAlert(msj) {
    let alert = this.alertCtrl.create({
      title: 'Whoops!',
      subTitle: msj,
      buttons: ['Cerrar']
    });
    alert.present();
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
    this.authService.postAuthData(this.userData, "signUp").then((result) => {
      this.responseData = result;
      if (this.responseData.error == true) {
        this.presentAlert(this.responseData.msj);
      }
      console.log(this.responseData);
      localStorage.setItem('session', JSON.stringify(this.responseData));
      this.navCtrl.setRoot(HomePage);
   }, (err) =>{
    this.presentAlert('Error insesperado. Intentelo mas tarde');

   });

  }
}
