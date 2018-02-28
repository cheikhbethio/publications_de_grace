import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'pdg-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  passwordError;
  password;
  pwdConfirm;
  passwordMatching = true;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
      lastName:  ['', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
      email:  ['', [Validators.required, Validators.email,]],
      password: ['', [Validators.required,  Validators.minLength(5), Validators.maxLength(32)]],
      pwdConfirm: ['', [Validators.required,  Validators.minLength(5), Validators.maxLength(32)]],
    })
    this.signupForm.get('password').valueChanges.subscribe(passwordValue => {
      console.log(passwordValue)
      this.password = passwordValue;
      this.checkMatchingPwd();
    });
    this.signupForm.get('pwdConfirm').valueChanges.subscribe(pwdConfirmValue => {
      console.log(pwdConfirmValue)
      this.pwdConfirm = pwdConfirmValue;
      this.checkMatchingPwd();
    });

  }
  checkMatchingPwd() {
    this.passwordMatching = this.password === this.pwdConfirm;
    console.log( this.pwdConfirm, this.password, this.passwordMatching)
  }

  matchPassword(formControl: FormControl) {
    console.log(formControl);

    if (this.signupForm &&
      this.signupForm.get('pwdConfirm').value !==
      this.signupForm.get('password').value) {
      return { noMatch: true };
    }
    return null;
  }

  getErrorMessage(inputName) {
    const required = this.signupForm.get(inputName).hasError('required');
    if (required) {
      return 'Ce champ est obligatoire';
    }
    const minLength = this.signupForm.get(inputName).hasError('minlength');
    if (minLength) {
      return 'Au moins 2 caractères sont requis';
    }

    const maxLength = this.signupForm.get(inputName).hasError('maxlength');
    if (maxLength) {
      return 'La taille max ne peut excéder 32 caractères';
    }

    const emailFormat = this.signupForm.get(inputName).hasError('email');
    if (emailFormat) {
      return 'Format email incorrect';
    }
  }
  getPwdErrorMessage(input) {
    // const noMatch = this.signupForm.get(input).hasError('noMatch');
    // console.log('----*****-----', noMatch, input);

    // if (!this.passwordMatching) {
    //   return 'les deux mot de passe ne sont pas identiques';
    // }
    const minLength = this.signupForm.get(input).hasError('minlength');
    if (minLength) {
      return 'Au moins 5 caractères sont requis';
    }
    const toto = this.getErrorMessage(input);
    return toto;
  }

}
