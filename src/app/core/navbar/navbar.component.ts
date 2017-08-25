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
  private show = true;
 
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {
    this.eval();
  }

  ngOnInit() {
  }

  // Logs out
  logOut() {
    this.authService.logOut()
    .then(() => {
      console.log("In promise");
      this.router.navigateByUrl('/login');
    });
  }

  private updateUsername() {
    let self = this;
    this.authService.isLoggedIn()
    .then((res: any) => {
      console.log(res);
      let data = JSON.parse(res._body);
        self.username = data.username;
    });
  }

  // Checks if the navbar should be displayed
  private eval(){
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    
      console.log("Event");
      this.updateUsername();
      

      let url = evt.url.substr(1, evt.url.length - 1).replace('/', '-');
      console.log(url);
      if (url === 'login' || url === 'register'){
        this.show = false;
      } else {
        this.show = true;
      }
    });
  }



}
