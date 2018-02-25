import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class ConnectionService {

  constructor() { }
  
  matchPassword(formControl: FormControl, pwdConfirm) {
    if (formControl.value !== pwdConfirm) {
      return { noMatch: true };
    }
    return null;
  }


  getErrorMessage(inputName, form) {
    const required = form.get(inputName).hasError('required');
    if (required) {
      return 'Ce champ est obligatoire';
    }
    const minLength = form.get(inputName).hasError('minlength');
    if (minLength) {
      return 'Au moins 2 caractères sont requis';
    }

    const maxLength = form.get(inputName).hasError('maxlength');
    if (maxLength) {
      return 'La taille max ne peut excéder 32 caractères';
    }

    const emailFormat = form.get(inputName).hasError('email');
    if (emailFormat) {
      return 'Format email incorrect';
    }
  }
  getPwdErrorMessage(form) {
    const noMatch = form.get('password').hasError('noMatch');
    console.log('++++++++++', noMatch)
    if (noMatch) {
      return 'les deux mot de passe ne sont pas identiques';
    }
    const minLength = form.get('password').hasError('minlength');
    if (minLength) {
      return 'Au moins 5 caractères sont requis';
    }
    return this.getErrorMessage('password', form);
  }

}
