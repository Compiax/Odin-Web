import { ActivatedRoute } from '@angular/router';
import { ComponentsService } from '../_services/components.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-package-content',
  templateUrl: './view-package.component.html',
  styleUrls: ['./view-package.component.scss']
})
export class ViewPackageComponent implements OnInit {
    public package: any;
    private id: String;
    private sub: any;

    constructor(private componentsService: ComponentsService, private route: ActivatedRoute) { 
      this.package = {};
    }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.loadComponents(params['id']);
   });
  }

    loadComponents(id: String) {
      let self = this;
      this.componentsService.getComponent(id)
      .then((res: any) => {
        let data = JSON.parse(res._body).data[0];
        self.package.name = data.attributes.name;
        self.package.author = data.attributes.author.username;
        self.package.usage = data.attributes.usage;
        self.package.stats = data.attributes.stats;
        self.package.created = data.attributes.created;
        self.package.description = data.attributes.description;
      });
    };
}