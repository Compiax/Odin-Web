import { ComponentModel } from './../../_models/component.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchComponent'})
export class SearchComponentPipe implements PipeTransform {
  transform(components: ComponentModel[], param: string): ComponentModel[] {
    if (param === '') {
        return components;
    }
    return components.filter(c => {
        if (c.author.username.match(new RegExp(`*${param}*`, 'i'))) {
            return true;
        } else if (c.name.match(new RegExp(`*${param}*`, 'i'))) {
            return true;
        } else {
            return false;
        }
    });
  }
}
