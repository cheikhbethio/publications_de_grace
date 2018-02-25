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
  pwdConfirm;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
      lastName:  ['', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
      email:  ['', [Validators.required, Validators.email,]],
      password: ['', [Validators.required,  Validators.minLength(5), Validators.maxLength(32), this.matchPassword.bind(this)]],
    })
  }

  matchPassword(formControl: FormControl) {
    if (formControl.value !== this.pwdConfirm) {
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
  getPwdErrorMessage() {
    const noMatch = this.signupForm.get('password').hasError('noMatch');
    if (noMatch) {
      return 'les deux mot de passe ne sont pas identiques';
    }
    const minLength = this.signupForm.get('password').hasError('minlength');
    if (minLength) {
      return 'Au moins 5 caractères sont requis';
    }
    return this.getErrorMessage('password');
  }

}
