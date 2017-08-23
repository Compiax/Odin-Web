import { Component, OnInit } from '@angular/core';

import { VPTestService } from './vp-test.service';
import { Test } from './test';

@Component({
  selector: 'app-vp-test',
  templateUrl: './vp-test.component.html',
  styleUrls: ['./vp-test.component.scss']
})
export class VPTestComponent implements OnInit {
  constructor(private VPTestServiceObj: VPTestService) { }

  getPackageTests(): Promise<Test[]>{
    return this.VPTestServiceObj.getPackageTests(1);
  }

  ngOnInit() {
  }
}
