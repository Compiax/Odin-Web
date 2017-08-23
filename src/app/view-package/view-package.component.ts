import { Component } from '@angular/core';
import { ViewPackageService } from './view-package.service';


@Component({
  selector: 'app-view-package-content',
  templateUrl: './view-package.component.html',
  styleUrls: ['./view-package.component.scss']
})
export class ViewPackageComponent {

    constructor(private viewPackageService: ViewPackageService) { }

    getPackageCreator(): Promise<String>{
      return this.viewPackageService.getPackageCreator(1);
    }

    getPackageTitle(): Promise<String>{
      return this.viewPackageService.getPackageTitle(1);
    }
}