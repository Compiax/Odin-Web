import { Component, OnInit } from '@angular/core';
import { VPAboutService } from './vp-about.service';

@Component({
  selector: 'app-vp-about',
  templateUrl: './vp-about.component.html',
  styleUrls: ['./vp-about.component.scss']
})
export class VPAboutComponent implements OnInit {
  constructor(private VPAboutServiceObj: VPAboutService) { }

  getPackageDescription(): Promise<String>{
    return this.VPAboutServiceObj.getPackageDescription(1);
  }

  getPackageDownloadCount(): Promise<String>{
    return this.VPAboutServiceObj.getPackageDownloadCount(1);
  }
  
  getPackageStarsCount(): Promise<String>{
    return this.VPAboutServiceObj.getPackageStarsCount(1);
  }

  ngOnInit() {
  }
}