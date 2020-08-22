import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordMatch } from 'src/app/shared/validators/password-match';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  form: FormGroup;

  registerInvalid: boolean = false;

  constructor(
    private fb: FormBuilder,
  ) { }

  onSubmit() {
    if (this.form.invalid) {
      return
    }

    console.log(this.form.value);
  }

  ngOnInit(): void {
    const url_pattern = '((http|https)\:\/\/)?[a-zA-Z0-9\.\/\?\:@\-_=#]+\.([a-zA-Z0-9\&\.\/\?\:@\-_=#])*';

    this.form = this.fb.group({
      displayName: [''],
      imageUrl: ['', [Validators.pattern(url_pattern)]],
      passData: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        rePassword: ['', [Validators.required, Validators.minLength(8)]]
      }, { validators: [passwordMatch] }),
    });
  }
}
