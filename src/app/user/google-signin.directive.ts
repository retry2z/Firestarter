import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {
  constructor(private auth: AngularFireAuth) { }

  @HostListener('click')
  onclick() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
}