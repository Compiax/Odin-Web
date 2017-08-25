import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { Router} from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-register-box',
  templateUrl: './register-box.component.html',
  styleUrls: ['./register-box.component.scss']
})
export class RegisterBoxComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef) { 
    this.toastr.setRootViewContainerRef(vcr);    // Needed for toasts
  }
  ngOnInit() { };

  onSubmit(form: any) {
    if (form.username === '') {
      this.toastr.info('Username is required!');
    }
    if (form.email === '') {
      this.toastr.info('Email is required!');
    }
    if (form.password === '') {
      this.toastr.info('Password is required!');
    }
    // @todo: Hash the password
    this.authService.register(form.username, form.email, form.password)
    .then(this.checkResponse.bind(this))
    .catch(this.handleErrors.bind(this));
     console.log(form);
  };

  checkResponse(res: any) {
    console.log(res.status);
    console.log(this);
    if (res.status === 200) {
      // We're good to go
      this.router.navigateByUrl('/packages');
    }
  }

  handleErrors(res: any) {
    const errors = JSON.parse(res._body).errors;
    console.log(errors);
    if (res.status === 400 && errors[0].title === 'User Already Exists') {
      this.toastr.info('That username has already been taken :(');
    }
  }
}
