import { Component } from '@angular/core';
import { BrowsePackageService } from './browse-package.service';


@Component({
  selector: 'app-browse-package-content',
  templateUrl: './browse-package.component.html',
  styleUrls: ['./browse-package.component.scss']
})
export class BrowsePackageComponent {

    constructor(private BrowsePackageService: BrowsePackageService) { }

    getPackages(): Promise<String>{
      return this.BrowsePackageService.getPackages(1);
    }
}