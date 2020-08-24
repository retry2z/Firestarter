import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { User } from 'firebase';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: User;

  get isLogged() { return !!this.currentUser; }

  authCompleted$ = this.afAuth.user.pipe(shareReplay(1));

  constructor(public afAuth: AngularFireAuth, private storage: AngularFireStorage) {
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
    const data = {
      displayName: displayName || this.currentUser.displayName,
      photoURL: photoURL || this.currentUser.photoURL
    }
    return await this.currentUser.updateProfile(data);
  }

  async passwordReset(email: string) {
    return await this.afAuth.sendPasswordResetEmail(email);
  }

  async uploadFile(imageAsFile) {
    await this.storage.upload(`/users/${this.currentUser.uid}`, imageAsFile);
    const photoRef$ = await this.storage.ref('users').child(this.currentUser.uid).getDownloadURL();

    photoRef$.subscribe(photoURL => this.update(null, photoURL));
  }

  async logout() {
    return await this.afAuth.signOut();
  }
}
