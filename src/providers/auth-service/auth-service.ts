import { Http,  Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


let apiUrl = "http://127.0.0.1:8000/api/";
/*
  Generated class for the AuthServiceProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }
  postAuthData(credentials, type){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
  
   
    return new Promise((resolve, reject) => {  
      this.http.post(apiUrl+type, JSON.stringify(credentials), {headers: headers}).subscribe(res =>{
        resolve(res.json());
      }, (err) => {
        reject(err)
      });
    });
    
   
  }

  postData(credentials, type, token){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    headers.append("Authorization", "Bearer "+token);
  
   
    return new Promise((resolve, reject) => {  
      this.http.post(apiUrl+type, JSON.stringify(credentials), {headers: headers}).subscribe(res =>{
        resolve(res.json());
      }, (err) => {
        reject(err)
      });
    });
    
   
  }


  getData(type, token){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
   // headers.append("Authorization", "Bearer "+token);
    
   
    return new Promise((resolve, reject) => {  
      this.http.get(apiUrl+type, {headers: headers}).subscribe(res =>{
        var response = res.json();
        resolve(response);
      }, (err) => {
        reject(err)
      });
    });
    
   
  }
}