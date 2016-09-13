import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService{

  constructor(private window: Window){}

  getToken(){
    return this.window.localStorage.getItem('auth_token');
  }

  setToken(token: string){
    this.window.localStorage.setItem('auth_token', token);
  }

  removeToken(token: string){
    this.window.localStorage.removeItem('auth_token');
  }
}