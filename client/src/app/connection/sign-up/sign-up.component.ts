import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'pdg-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  passwordError;

  constructor(
    private formBuilder: FormBuilder,
    private connectionService: ConnectionService
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
      email: ['', [Validators.required, Validators.email,]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(32), this.matchPassword.bind(this)]],
      pwdConfirm: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(32), this.matchPassword.bind(this)]],
    });
  }

  matchPassword(formControl: FormControl) {
    if (this.signupForm &&
      this.signupForm.get('pwdConfirm').value !==
      this.signupForm.get('password').value) {
      return { noMatch: true };
    }
    if (this.signupForm && (this.signupForm.get('password').touched ||
      this.signupForm.get('pwdConfirm').touched)) {
      this.signupForm.get('password').setErrors(null);
      this.signupForm.get('pwdConfirm').setErrors(null);
    }
    return null;
  }
  getErrorMessage(inputName) {
    return this.connectionService.getErrorMessage(inputName, this.signupForm);
  }
  getPwdErrorMessage(inputName) {
    return this.connectionService.getPwdErrorMessage(inputName, this.signupForm);
  }

}
