import { ProductsPage } from './../products/products';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})

export class CategoriesPage {
  departmentId: string;
  categories: any;
  pageTitle = "Categorias";
  shownGroup = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiCall: AuthServiceProvider) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
    this.departmentId = this.navParams.get('id');
 
    this.apiCall.getData('store/categories/department/'+this.departmentId, "").then((result) => {
      this.categories = result['Categories'];
    });
  }
  toggleSection(i) {
    this.categories[i].open = !this.categories[i].open;
  }
 
  toggleItem(i, j) {
    this.categories[i].sub_category[j].open = !this.categories[i].sub_category[j].open;
  }
  productsBySubCategory(id){
    console.log(id);
    let sub_category = {id: id}
    this.navCtrl.push(ProductsPage, sub_category);
  }
}
