import { InputNode } from './inputNode.model';
import { OutputNode } from './outputNode.model';
import { UUID } from 'angular2-uuid';
import { ComponentModel } from './component.model';
import { Node } from './node.model';

export class ConstNode extends InputNode {
    public constNode: any;

    public updatePosition(x, y) {
        super.updatePosition(x, y);

        this.mainCircle.attr('cx', x);
        this.mainCircle.attr('cy', y);
        this.outCircle.attr('cx', x + 32);
        this.outCircle.attr('cy', y);
        this.text.attr('x', x);
        this.text.attr('y', y + 5);

        console.log(this.dimensions);
        if (this.dimensions.length === 1 && this.dimensions[0] == 1) {
            // Is a scalar
            this.text.text(this.values[0]);
        } else {
            this.text.text('CONST');
        }
    }

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
