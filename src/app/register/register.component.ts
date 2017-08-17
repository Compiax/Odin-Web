import { Component, Input, AfterViewInit} from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './register.component.html'
})

export class RegisterComponent implements AfterViewInit {
  title = 'Register';

  ngAfterViewInit(){
    setTimeout(function(){
      $('.mdb-select').material_select();
    }, 0);
  }
}

