import { Component } from '@angular/core';
import { ViewPackageService } from './view-package.service';

@Component({
  selector: 'app-view-package-content',
  templateUrl: './view-package.component.html',
  styleUrls: ['./view-package.component.scss']
})
export class ViewPackageComponent {
  fullName: string = `Bob Bobbington`;
}