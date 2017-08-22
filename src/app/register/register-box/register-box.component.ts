import { Component, OnInit } from '@angular/core';

import { RegisterService }         from './register-box.service';

@Component({
  selector: 'app-register-box',
  templateUrl: './register-box.component.html',
  styleUrls: ['./register-box.component.scss']
})
export class RegisterBoxComponent implements OnInit {

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  add(name: string, email: string, password: string): void {
    name = name.trim();
    if (!name) { return; }
    this.registerService.addUser(name, email, password);
  }

}
