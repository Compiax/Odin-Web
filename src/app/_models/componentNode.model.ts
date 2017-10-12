import { ComponentModel } from './component.model';
import { Node } from './node.model';

export class ComponentNode extends Node {
    public mainRect: any;
    public headerRect: any;
    public text: any;
    public inputsText: any;

    public component: ComponentModel;

    public updatePosition(x, y) {
        super.updatePosition(x, y);
        x = x - 100;
        y = y - 40;

        this.mainRect.attr('x', x);
        this.mainRect.attr('y', y);
        this.headerRect.attr('x', x);
        this.headerRect.attr('y', y);
        this.inCircle.attr('cx', x);
        this.inCircle.attr('cy', y + 40);
        this.outCircle.attr('cx', x + 200);
        this.outCircle.attr('cy', y + 40);
        this.inputsText.attr('x', x + 5);
        this.inputsText.attr('y', y + 46);
        this.text.attr('x', x + 100);
        this.text.attr('y', y + 20);
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
          .attr('r', 7)
          .attr('fill', 'grey')
          .datum({node: this, type: 'output'});

        this.inCircle =
        this.group.append('circle')
          .attr('r', 7)
          .attr('fill', 'grey')
          .datum({node: this, type: 'input'});

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
            .style('fill', 'white')

        this.inputsText =
        this.group.append('text')
            .text(this.maxInputs)
            .style('fill', 'black')
            .attr('font-size', 11);

        this.group.datum({node: this});

        this.updatePosition(coords.x, coords.y);
    }
}
