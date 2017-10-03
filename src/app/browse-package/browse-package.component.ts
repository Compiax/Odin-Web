import { ChangeDetectorRef } from '@angular/core';
import { ComponentsService } from '../_services/components.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-browse-package-content',
  templateUrl: './browse-package.component.html'
})
export class BrowsePackageComponent {
    private components: {}[];

    constructor(private componentsService: ComponentsService) { 
      this.loadComponents();
    }

    loadComponents(): Promise<{}[]> {
      let self = this;
      return this.componentsService.getComponents()
      .then(function(res: any) {
        return new Promise<{}[]>((resolve, reject) => {
          let data: {}[];
          if (JSON.parse(res._body).data === undefined) {
            // There are no projects
            return [];
          };
          data = JSON.parse(res._body).data.map((item) => {
            return {
              id: item.id,
              description: item.attributes.description,
              name: item.attributes.name,
              stats: item.attributes.stats,
              usage: item.attributes.usage,
              author: item.attributes.author.username
            };
          });
          self.components = data;
        });
      });
    }
}
