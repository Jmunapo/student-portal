import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
 
const STORAGE_KEY = 'userDetails';


@Injectable()
export class AuthProvider {
  currentUser: any = null;

  constructor(public http: HttpClient, public storage: Storage, public events: Events) {
    this.storage.get(STORAGE_KEY).then(user => {
      if(user && 'firstname' in user){
        this.currentUser = user;
        this.events.publish('instorage', user);
      }else{
        this.events.publish('instorage', null);
      }
    });
  }

  

  public login(credentials): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post("https://portalapi.joemags.co.zw/auth/login.php", credentials).subscribe(user=>{
        if('success' in user){
          resolve(false);
        }
        if(user && 'firstname' in user){
          this.currentUser = user;
          this.storage.set(STORAGE_KEY, user);
          resolve(user);
        }else{
          resolve(false);
        }
      }, error => {
        reject(true);
        console.log(error);
      })
    });
  }
 
  public getUserInfo() : any {
    return this.currentUser;
  }
 
  public logout() {
    return this.storage.remove(STORAGE_KEY).then(()=>{
      return true;
    })
  }

}
