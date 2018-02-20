import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'pdg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
  getPwdErrorMessage() {
    const error = this.loginForm.controls.password.hasError('required');
    if (error) {
      return 'Mot de passe obligatoire';
    }
  }
  getEmailErrorMessage() {
    return this.loginForm.controls.email.hasError('required') ?
        `l'email est obligatoire` :
        this.loginForm.controls.email.hasError('email') ?
            'email invalide' : '';
  }

}
