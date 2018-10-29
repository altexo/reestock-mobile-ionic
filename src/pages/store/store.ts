import { CategoriesPage } from './../categories/categories';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import {ProductsPage} from '../pages/products/products';
/**
 * Generated class for the StorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { ProductsPage } from "../../pages/products/products";


@IonicPage()
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})

export class StorePage {
  public hideMe = false;
  public deparments: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiCall: AuthServiceProvider) {
   
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad StorePage');
    const token = JSON.parse(localStorage.getItem("session"));

   // console.log(token);
    // this.apiCall.getData('store/departments', token).then((result) =>{
    //   console.log(result['Departments']);
    //   this.deparments = result['Departments'];
    // });
  
  }
  goToProductsPage(id){
    let departmentId = {id: id};
    this.navCtrl.push(CategoriesPage, departmentId);
    console.log("Dep ID: "+id);
    
  }

  hide() {
  
    if(this.hideMe == true)
    {
      this.hideMe = false;
    }else{
      this.hideMe = true;
    }
   
  }
  

}
