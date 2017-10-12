import { Response } from '@angular/http';
import { User } from './../../_models/user.model';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder,  FormGroup,  Validators, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from '../../_services/auth.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-register-box',
  templateUrl: './register-box.component.html',
  styleUrls: ['./register-box.component.scss']
})

export class RegisterBoxComponent {
  private registerForm: FormGroup;
  constructor(private authService: AuthService,
              private vcr: ViewContainerRef,
              private fb: FormBuilder,
              private router: Router,
              public toastr: ToastsManager) {
    this.toastr.setRootViewContainerRef(vcr);
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  };

  public onSubmit() {
    const formModel = this.registerForm.value;
    const form = this.registerForm;
    console.log("Hi")
    if (this.registerForm.status === 'INVALID') {
      if (this.registerForm.get('username').status === 'INVALID') {
        this.toastr.error('Username is missing');
      }
      if (this.registerForm.get('email').status === 'INVALID') {
        this.toastr.error('Email is missing');
      }
      if (this.registerForm.get('password').status === 'INVALID') {
        this.toastr.error('Password is missing');
      }
    } else {
      const user = new User(form.get('username').value, form.get('password').value, form.get('email').value);
      this.authService.register(user)
      .then((u: User) => {
          console.log('hi?')
          this.router.navigateByUrl('/login');
      })
      .catch((res: Response) => {
        if (res.json().errors) {
          this.toastr.error(res.json().errors[0].detail, null, {showCloseButton: true});
        } else if (res.url == null) {
          this.toastr.error("Cannot connect to server");
        } else {
          console.log(res);
        }
      });
    }
  };
}
