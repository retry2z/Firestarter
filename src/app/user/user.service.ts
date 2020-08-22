import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _currentUser = false;

  get isLogged() { return !!this._currentUser; }

  get currentUser() { return this._currentUser; }

  authCompleted$ = this.afAuth.authState;

  constructor(private afAuth: AngularFireAuth) {
    this.authCompleted$.subscribe((user: any) => {
      this._currentUser = user;
    }, () => {
      this._currentUser = null;
    });
  }

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
