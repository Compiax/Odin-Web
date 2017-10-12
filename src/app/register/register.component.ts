import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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
        value: '#d32f2f'
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: 5,
      },
      line_linked: {
        enable: false,
        'color': '#e0e0e0',
        'opacity': 0.4,
        'width': 2
      },
      }
    };
  }
}