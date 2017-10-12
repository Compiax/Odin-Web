import { UUID } from 'angular2-uuid';
import { ComponentModel } from './component.model';
import { Node } from './node.model';

export class OutputNode extends Node {
    public inCircle: any;
    public mainCircle: any;
    public text: any;
    public component: {
        name: 'Output',
        author: 'Base'
    };

    public updatePosition(x, y) {
        super.updatePosition(x, y);

        this.mainCircle.attr('cx', x);
        this.mainCircle.attr('cy', y);
        this.inCircle.attr('cx', x - 32);
        this.inCircle.attr('cy', y);
        this.text.attr('x', x);
        this.text.attr('y', y + 5);
    }

    public toJSON() {
        const json = super.toJSON();
        json.type = 'Output';
        return json;
    }

    constructor(group: any, coords?: {x: number, y: number}, id?: string) {
        id = (id || `output-${UUID.UUID()}`);
        super(group, 1, coords, id);

        this.group.datum({node: this});

        this.inCircle =
        this.group.append('circle')
            .attr('r', 7)
            .attr('cx', coords.x - 32)
            .attr('cy', coords.y)
            .attr('fill', 'grey')
            .datum({node: this, type: 'input'});

        this.mainCircle =
        this.group.append('circle')
            .attr('cx', coords.x)
            .attr('cy', coords.y)
            .attr('r', 30)
            .attr('fill', '#EEEEEE')
            .attr('stroke-width', '5px')
            .attr('stroke', '#D32F2F')
            .datum({node: this});

        this.text =
        this.group.append('text')
          .attr('text-anchor', 'middle')
          .text('OUT')
          .style('fill', '#D32F2F')
          .attr('x', coords.x)
          .attr('y', coords.y + 5);

        this.updatePosition(coords.x, coords.y);
    }
}
