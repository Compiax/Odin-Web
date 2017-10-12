import { ChangeDetectorRef, Component } from '@angular/core';
import { ComponentsService } from '../_services/components.service';
import { ComponentModel } from '../_models/component.model';


@Component({
  selector: 'app-browse-package-content',
  templateUrl: './browse-package.component.html'
})
export class BrowsePackageComponent {
    components: ComponentModel[];

    constructor(private componentsService: ComponentsService) { 
      this.loadComponents();
    }

    loadComponents() {
      return this.componentsService.getComponents()
        .then((components: ComponentModel[]) => {
          this.components = components;
        });
    }
}
