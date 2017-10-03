import { Response } from '@angular/http';
import { User } from './../../_models/user.model';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { Router} from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss'],
  providers: []
})
export class LoginBoxComponent {
  private loginForm: FormGroup;
  constructor(private authService: AuthService,
              private vcr: ViewContainerRef,
              private fb: FormBuilder,
              private router: Router,
              public toastr: ToastsManager) {
    this.toastr.setRootViewContainerRef(vcr);
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  };

  public onSubmit() {
    const formModel = this.loginForm.value;
    const form = this.loginForm;

    if (this.loginForm.status === 'INVALID') {
      if (this.loginForm.get('username').status === 'INVALID') {
        this.toastr.error('Username is missing');
      }
      if (this.loginForm.get('password').status === 'INVALID') {
        this.toastr.error('Password is missing');
      }
    } else {
      const user = new User(form.get('username').value, form.get('password').value);
      this.authService.login(user)
      .then((u: User) => {
          this.router.navigateByUrl('/packages');
      })
      .catch((res: Response) => {
        this.toastr.error(res.json().errors[0].detail, null, {showCloseButton: true});
      });
    }
  };
}
