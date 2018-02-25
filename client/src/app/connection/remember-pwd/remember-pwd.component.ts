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
      password: ['', [Validators.required,  Validators.minLength(5), Validators.maxLength(32)]],
      pwdConfirm: ['', [Validators.required,  Validators.minLength(5), Validators.maxLength(32), this.matchPassword.bind(this)]],
    });
  }

  matchPassword(formControl: FormControl) {
    if(!this.rememberPwdForm){
      return;
    }
    console.log('******', this.rememberPwdForm.get('password').value);
    console.log('******', this.rememberPwdForm.get('pwdConfirm').value);
    if (this.rememberPwdForm.get('password').value !== this.rememberPwdForm.get('pwdConfirm').value) {
      return { noMatch: true };
    }
    return null;
  }

  getErrorMessage(input){
    return this.connectionServices.getErrorMessage(input, this.rememberPwdForm);
  }
  
  getPwdErrorMessage(){
    return this.connectionServices.getPwdErrorMessage(this.rememberPwdForm);
  }

}
