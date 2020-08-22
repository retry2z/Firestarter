import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordMatch } from '../../../shared/validators/password-match';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      passData: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        rePassword: ['', [Validators.required, Validators.minLength(8)]]
      }, { validators: [passwordMatch] }),
    });
  }
}
