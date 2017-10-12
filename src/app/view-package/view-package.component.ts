import { ComponentModel } from './../_models/component.model';
import { ActivatedRoute } from '@angular/router';
import { ComponentsService } from '../_services/components.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-package-content',
  templateUrl: './view-package.component.html',
  styleUrls: ['./view-package.component.scss']
})
export class ViewPackageComponent implements OnInit {
    public component: ComponentModel;
    private id: String;
    private sub: any;

    constructor(private componentsService: ComponentsService, private route: ActivatedRoute) {
    }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.loadComponents(params['id']);
   });
  }

    loadComponents(id: String) {
      this.componentsService.getComponent(id)
      .then((component: ComponentModel) => {
        this.component = component;
      });
    };
}