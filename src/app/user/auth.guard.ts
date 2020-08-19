import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';
import { SnackService } from '../services/snack.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private auth: AngularFireAuth,
    private snack: SnackService,
  ) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {

    const user = await this.auth.currentUser;
    const isLogged = !!user;

    if (!isLogged) {
      this.snack.authError();
    }

    return isLogged;
  }

}
