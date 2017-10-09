import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-box',
  templateUrl: './error-box.component.html',
  styleUrls: ['./error-box.component.scss'],
  providers: []
})

export class ErrorBoxComponent implements OnInit {

  @Input() errorcode: string;
  @Input() message: string;

  constructor() {

  }

  ngOnInit() {
  }

}
