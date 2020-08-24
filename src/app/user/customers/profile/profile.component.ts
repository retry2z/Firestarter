import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  form: FormGroup;
  errorMessage: string;
  loading: boolean = false;

  constructor(private fb: FormBuilder, public userService: UserService) { }

  async onSubmit() {
    if (this.form.invalid) {
      return
    }

    this.loading = true;
    const { email, password } = this.form.value;


    try {
      await this.userService.login(email, password);
      this.loading = false;
    }
    catch (e) {
      this.errorMessage = e;
      setTimeout(() => this.errorMessage = '');

      this.loading = false;
    }
  }

  ngOnInit(): void {
    const url_pattern = '((http|https)\:\/\/)?[a-zA-Z0-9\.\/\?\:@\-_=#]+\.([a-zA-Z0-9\&\.\/\?\:@\-_=#])*';

    this.form = this.fb.group({
      displayName: [this.userService.currentUser.displayName],
      photoURL: [this.userService.currentUser.photoURL || '', [Validators.pattern(url_pattern)]],
    });
  }
}