import { Component, OnInit } from '@angular/core';
import { VPUsageService } from './vp-usage.service';


@Component({
  selector: 'app-vp-usage',
  templateUrl: './vp-usage.component.html',
  styleUrls: ['./vp-usage.component.scss']
})
export class VPUsageComponent implements OnInit {
  constructor(private VPUsageServiceObj: VPUsageService) { }

  getPackageHowToUse(): Promise<String>{
    return this.VPUsageServiceObj.getPackageHowToUse(1);
  }

  getPackageWhereToUse(): Promise<String>{
    return this.VPUsageServiceObj.getPackageWhereToUse(1);
  }

  ngOnInit() {
  }
}
