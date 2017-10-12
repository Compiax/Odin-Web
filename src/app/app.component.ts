import { ParticlesModule } from 'angular-particle';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app works!';
  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;

    ngOnInit() {
      this.myStyle = {
        'position': 'relative',
        'width': '100%',
        'height': '100%',
        'z-index': 1,
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0,
      };

  this.myParams = {
    particles: {
      number: {
        value: 200,
      },
      color: {
        value: '#ff0000'
      },
        shape: {
      type: 'circle',
        },
      }
    };
  }
}
