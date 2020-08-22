import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordMatch } from '../../../shared/validators/password-match';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  registerInvalid: boolean = false;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    public userService: UserService
  ) { }

  async onSubmit() {
    if (this.form.invalid) {
      return
    }

    this.loading = true;
    const { email, password } = this.form.value;


    try {
      await this.userService.register(email, password);
      this.loading = false;
    }
    catch (e) {
      this.registerInvalid = true;
      this.loading = false;
    }
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
