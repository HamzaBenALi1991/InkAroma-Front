import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
// login and sending token to localstorage 
  logIn(token: any) {
    localStorage.setItem('token', token)
  }
  logout(){
    localStorage.clear() 
  }
}
