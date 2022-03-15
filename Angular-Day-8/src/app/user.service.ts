import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn = false;
  constructor(public firebaseAuth: AngularFireAuth,
  private http:HttpClient) { }

  signIn(email:string, password:string){
    return this.firebaseAuth.signInWithEmailAndPassword(email, password)
  }
  getData() {
    return  this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
