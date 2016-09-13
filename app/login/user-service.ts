import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LocalStorageService } from '../localstorage-service'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService{
  private loggedIn = false;

  constructor(private http: Http, private localStorage: LocalStorageService){
    // this.loggedIn = !!localStorage.getToken();
  }

  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
  }

  login(username: string, password: string){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let body = `username=${username}&password=${password}`;
    let options = new RequestOptions({ headers: headers, method: "post"});
    return this.http.post('localhost:3030/api/login',body,options).toPromise().then(res => {
                  console.log(res);
                  if(res.ok){
                    var token = res.json().token;
                    this.localStorage.setToken(token);
                    return res;
                  }
                }).catch(this.handleError);
  }

  logout(){
    this.localStorage.removeToken('auth_token');
  }

  // isLoggedIn(){
  //   console.log('2', this.loggedIn);
  //   return this.loggedIn;
  // }
}