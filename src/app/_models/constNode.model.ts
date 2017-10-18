import { InputNode } from './inputNode.model';
import { OutputNode } from './outputNode.model';
import { UUID } from 'angular2-uuid';
import { ComponentModel } from './component.model';
import { Node } from './node.model';

export class ConstNode extends InputNode {
    public constNode: any;

    public toJSON() {
        const json = super.toJSON();
        json.type = 'Constant';
        if (typeof this.values === 'string') {
            this.values = this.values.split(',').map(i => parseFloat(i));
        }
        if (typeof this.dimensions === 'string') {
            this.dimensions = this.dimensions.split(',').map(i => parseFloat(i));
        }
        json.variable = {
            values: this.values,
            dimensions: this.dimensions
        };
        return json;
    }

    constructor(group: any, coords?: {x: number, y: number}, id?: string) {
        id = (id || `const-${UUID.UUID()}`);
        super(group, coords, id);
        this.text.text('CONST');
     }
}
