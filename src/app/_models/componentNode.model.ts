import { ComponentModel } from './component.model';
import { Node } from './node.model';

export class ComponentNode extends Node {
    public mainRect: any;
    public headerRect: any;
    public text: any;

    public component: ComponentModel;

    public updatePosition(x, y) {
        super.updatePosition(x, y);
        x = x - 100;
        y = y - 40;

        this.mainRect.attr('x', x);
        this.mainRect.attr('y', y);
        this.headerRect.attr('x', x);
        this.headerRect.attr('y', y);
        this.outCircle.attr('cx', x + 200);
        this.outCircle.attr('cy', y + 40);
        this.text.attr('x', x + 100);
        this.text.attr('y', y + 20);

        for (const circle of this.inCircles) {
            circle.attr('cx', x);
            circle.attr('cy', y + circle.datum().offset.y + 40);
        }
    }

    public toJSON() {
        const json = super.toJSON();
        json.type = 'Component';
        json.component = this.component;
        return json;
    }

    constructor(group: any, component: ComponentModel, coords?: {x: number, y: number}, id?: string) {
        super(group, component.inputs, coords, id);

        this.component = component;

        this.outCircle =
        this.group.append('circle')
          .attr('r', 8)
          .attr('fill', 'grey')
          .datum({node: this, type: 'output'});

        for (let x = 0; x < component.inputs; x++) {
            this.inCircles.push(
                this.group.append('circle')
                .attr('r', 7)
                .attr('fill', 'grey')
                .attr('cx', coords.x - 100)
                .attr('cy', coords.y - 50 + (100 / (component.inputs + 1) * (x + 1)))
                .datum({node: this, type: 'input', inputNumber: x, offset: { x: -100, y: - 50 + (100 / (component.inputs + 1) * (x + 1))}})
            );
        }

        this.mainRect =
        this.group.append('rect')
          .attr('width', 200)
          .attr('height', 80)
          .attr('fill', 'white')
          .attr('stroke-width', '1px')
          .attr('stroke', 'grey')
          .datum({node: this});

        this.headerRect =
        this.group.append('rect')
            .attr('width', 200)
            .attr('height', 30)
            .attr('fill', '#D32F2F')
            .datum({node: this});

        this.text =
        this.group.append('text')
            .attr('text-anchor', 'middle')
            .text(component.name)
            .style('fill', 'white');

        this.group.datum({node: this});

        this.updatePosition(coords.x, coords.y);
    }
}
