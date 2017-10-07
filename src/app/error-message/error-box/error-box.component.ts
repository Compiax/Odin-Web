import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-box',
  templateUrl: './error-box.component.html',
  styleUrls: ['./error-box.component.scss'],
  providers: []
})

export class ErrorBoxComponent implements OnInit {

  constructor(public errorNumber: number, public message: string) {

  }

  ngOnInit() {
  }

}
