import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { shareReplay, map } from 'rxjs/operators';
import { UserService } from 'src/app/user/user.service';
import { User } from 'firebase';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit, OnDestroy {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()
    )

  user$: Observable<User> = this.userService.user$;
  sub: Subscription;



  constructor(private breakpointObserver: BreakpointObserver, public userService: UserService) { }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  logout() {
    this.userService.logout();
  }
}
