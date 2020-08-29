import { Component } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {

  constructor(public userService: UserService) { }
}
