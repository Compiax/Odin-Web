import { User } from './../../_models/user.model';
import { AuthService } from '../../_services/auth.service';
import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private username: String;
  private show = false;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {
    this.eval();
  }

  ngOnInit() {
  }

  logOut() {
    this.authService.logOut()
    .then(() => {
      this.router.navigateByUrl('/login');
    });
  }

  private updateUsername() {
    let self = this;
    this.authService.isLoggedIn()
    .then((u: User) => {
      self.username = u.username;
    })
    .catch(err => {
    });
  }

  // Checks if the navbar should be displayed
  private eval(){
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }

      this.updateUsername();

      const url = evt.url.substr(1, evt.url.length - 1).replace('/', '-');
      if (evt.url === '/' || url === 'login' || url === 'register'){
        this.show = false;
      } else {
        this.show = true;
      }
    });
  }



}
