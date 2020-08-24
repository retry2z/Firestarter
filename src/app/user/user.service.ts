import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User, auth } from 'firebase';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user$: Observable<User>;

  currentUser: User;

  get isLogged() { return !!this.currentUser; }

  authCompleted$ = this.afAuth.user.pipe(shareReplay(1));

  constructor(public afAuth: AngularFireAuth) {
    this.authCompleted$.subscribe((user: User) => {
      this.currentUser = user;
    }, () => {
      this.currentUser = null;
    });
  }

  async register(email: string, password: string) {
    return await this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  async login(email: string, password: string) {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async update(displayName: string, photoURL: string) {
    return await this.currentUser.updateProfile({ displayName, photoURL });
  }

  async passwordReset(email: string) {
    return await this.afAuth.sendPasswordResetEmail(email);
  }

  async logout() {
    return await this.afAuth.signOut();
  }
}
