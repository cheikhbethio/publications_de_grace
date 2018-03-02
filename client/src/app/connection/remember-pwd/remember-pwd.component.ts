import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'pdg-remember-pwd',
  templateUrl: './remember-pwd.component.html',
  styleUrls: ['./remember-pwd.component.scss']
})
export class RememberPwdComponent implements OnInit {
  rememberPwdForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private connectionServices: ConnectionService
  ) { }

  ngOnInit() {
    this.rememberPwdForm = this.formBuilder.group({
      email:  ['', [Validators.required, Validators.email,]],
      password: ['', [Validators.required,  Validators.minLength(5), Validators.maxLength(32), this.matchPassword.bind(this)]],
      pwdConfirm: ['', [Validators.required,  Validators.minLength(5), Validators.maxLength(32), this.matchPassword.bind(this)]],
    });
  }

  // matchPassword(formControl: FormControl) {
  //   if(!this.rememberPwdForm){
  //     return;
  //   }
  //   console.log('******', this.rememberPwdForm.get('password').value);
  //   console.log('******', this.rememberPwdForm.get('pwdConfirm').value);
  //   if (this.rememberPwdForm.get('password').value !== this.rememberPwdForm.get('pwdConfirm').value) {
  //     return { noMatch: true };
  //   }
  //   return null;
  // }

  matchPassword(formControl: FormControl) {
    console.log(formControl);

    if (this.rememberPwdForm &&
      this.rememberPwdForm.get('pwdConfirm').value !==
      this.rememberPwdForm.get('password').value) {
      return { noMatch: true };
    }
    if (this.rememberPwdForm && (this.rememberPwdForm.get('password').touched ||
      this.rememberPwdForm.get('pwdConfirm').touched)) {
      this.rememberPwdForm.get('password').setErrors(null);
      this.rememberPwdForm.get('pwdConfirm').setErrors(null);
    }
    return null;
  }

  getErrorMessage(inputName){
    return this.connectionServices.getErrorMessage(inputName, this.rememberPwdForm);
  }

  getPwdErrorMessage(inputName){
    return this.connectionServices.getPwdErrorMessage(inputName,this.rememberPwdForm);
  }

}
