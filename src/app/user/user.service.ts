import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  get user(): Observable<User> { return this.afAuth.user }

  constructor(public afAuth: AngularFireAuth) { }

  async register(email: string, password: string) {
    return await this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  async login(email: string, password: string) {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async passwordReset(email: string) {
    return await this.afAuth.sendPasswordResetEmail(email);
  }

  async logout() {
    return await this.afAuth.signOut();
  }
}
