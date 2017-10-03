import { AuthService } from '../auth.service';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/toPromise';
import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class IsAuthenticatedGuard implements CanActivate {
  private headers = new Headers({'Content-Type': 'application/X-www-form-urlencoded'});
  public as: AuthService;
  public r: Router;
  constructor(private http: Http, authService: AuthService, router: Router) {
    this.as = authService;
    this.r = router;
  }

  canActivate() {
    const self = this;
    return new Promise<boolean>((resolve, reject) => {
      self.as.isLoggedIn().then(() => {
        resolve(true);
      })
      .catch((res: Response) => {
        if (res.status === 401) {
          self.r.navigate(['/login']);
          resolve(false);
        };
      });
    });
  }



  isLoggedIn() {
    const url = environment.api_url + '/auth/loggedIn';

    return this.http.post(url, '', {headers: this.headers})
    .toPromise();
  }

}
