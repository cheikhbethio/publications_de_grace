import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ConnectionService } from '../../../../connection/connection.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'pdg-user-edit',
  templateUrl: 'user-edit.component.html',
  styleUrls: ['user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  signupForm: FormGroup;
  currentUser;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private connectionService: ConnectionService,
    private router: Router

  ) { }

  ngOnInit() {
    this.activatedRoute.data.map(data => data.user)
      .subscribe(res => this.currentUser = res);
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
      email: ['', [Validators.required, Validators.email]],
      date: [{value: '', disabled: true}],
      status: [{value: '', disabled: true}],
      description: ['']
    });
    this.signupForm.reset(this.currentUser)
    console.log('++++++++++++++', this.currentUser)
  }
  save(){
    //save and redirect
    this.router.navigate(['../../'], {relativeTo: this.activatedRoute});
  }
  cancel(){
    this.router.navigate(['../../'], {relativeTo: this.activatedRoute});
  }
  getErrorMessage(inputName) {
    return this.connectionService.getErrorMessage(inputName, this.signupForm);
  }
  getPwdErrorMessage(inputName) {
    return this.connectionService.getPwdErrorMessage(inputName, this.signupForm);
  }


}
