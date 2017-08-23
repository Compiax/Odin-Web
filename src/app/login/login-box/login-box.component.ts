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
export class LoginBoxComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);    // Needed for toasts
  }

  ngOnInit() {
  }

  onSubmit(form: any) {
    this.authService.login(form.username, form.password)
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
    if (errors[0].title === 'Bad Request') {
      this.toastr.info(errors[0].detail, 'Oops!');
    } else {
      this.toastr.info('Something wen\'t wrong :(', 'Oops!');
    }
  }
}
