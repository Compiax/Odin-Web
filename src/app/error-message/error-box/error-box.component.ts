import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-box',
  templateUrl: './error-box.component.html',
  styleUrls: ['./error-box.component.scss'],
  providers: []
})

export class ErrorBoxComponent implements OnInit {

  errorcode = 404;
  message = "Sorry, we couldn't find that page.";

  constructor( ) {

  }

  ngOnInit() {
  }

}
