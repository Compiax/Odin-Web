import { SearchComponentPipe } from './../_services/_pipes/search-component.pipe';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ComponentsService } from '../_services/components.service';
import { ComponentModel } from '../_models/component.model';

@Component({
  selector: 'app-browse-package-content',
  templateUrl: './browse-package.component.html',
  styleUrls: ['browse-package.component.scss']
})
export class BrowsePackageComponent {
    components: ComponentModel[];
    searchParam = '';

    constructor(private componentsService: ComponentsService) {
      this.loadComponents();
    }

    loadComponents() {
      return this.componentsService.getComponents()
        .then((components: ComponentModel[]) => {
          this.components = components.filter(c => c.author.username !== 'Math');
        });
    }

    deletePackage(component: ComponentModel) {
      this.componentsService.deleteComponent(component)
      .then(() => {
        this.loadComponents();
      });
    }

    getComponents() {
      if (this.searchParam === '') {
        return this.components;
      } else {
        return this.components.filter(c => {
          if (c.author.username.match(new RegExp(`.*${this.searchParam}.*`, 'i'))) {
              return true;
          } else if (c.name.match(new RegExp(`.*${this.searchParam}.*`, 'i'))) {
              return true;
          } else {
              return false;
          }
        });
      }
    }
}
