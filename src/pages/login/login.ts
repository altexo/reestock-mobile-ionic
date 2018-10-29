import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { Headers } from "@angular/http";
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  responseData: any;
  userData = {"email": "", "password": ""};
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
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
//    this.navCtrl.setRoot(HomePage);

    this.authService.postAuthData(this.userData, "login").then((result) => {
      this.responseData = result;
      if (this.responseData.err == false) {
        console.log('Iniciando sesion...');
        localStorage.setItem('session', JSON.stringify(this.responseData));
        this.navCtrl.setRoot(HomePage);
      }else{
        this.presentAlert(this.responseData.msj);
      }
   });
  }
}
