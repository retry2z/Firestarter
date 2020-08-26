import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { UserService } from './user/user.service';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit{

  get isReady(): boolean {
    return this.userService.currentUser !== undefined;
  }
  
  constructor(private userService: UserService, private swUpdate: SwUpdate) { }

  ngAfterViewInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available
        .subscribe(() => {
          this.swUpdate
            .activateUpdate()
            .then(() => {
              window.location.reload();
            });
        });
    }
  }
}