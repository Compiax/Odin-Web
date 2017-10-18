import { UUID } from 'angular2-uuid';
import { Node } from './node.model';
import * as d3 from 'd3-selection';

export class Edge {
    id: string;
    source: Node;
    target: Node;
    line: any;
    inputNumber: number;

    public remove() {
        this.line.remove();
        this.source.removeOutputEdge(this);
        this.target.removeInputEdge(this);
    }

    public updateSourceEnd() {
        this.line.attr('x1', this.source.outCircle.attr('cx'));
        this.line.attr('y1', this.source.outCircle.attr('cy'));
    }

    public updateTargetEnd() {
        this.line.attr('x2', this.target.inCircles[this.inputNumber].attr('cx'));
        this.line.attr('y2', this.target.inCircles[this.inputNumber].attr('cy'));
    }

    constructor(line: any, sourceCircle: any, targetCircle: any, id?: string) {
        this.id = (id || `edge-${UUID.UUID()}`);
        this.line = line;
      
        if (d3.select(sourceCircle).datum().type === 'input' && d3.select(targetCircle).datum().type === 'output') {
            this.target = d3.select(sourceCircle).datum().node;
            this.source = d3.select(targetCircle).datum().node;
            this.inputNumber = d3.select(sourceCircle).datum().inputNumber;
        } else {
            this.target = d3.select(targetCircle).datum().node;
            this.source = d3.select(sourceCircle).datum().node;
            this.inputNumber = d3.select(targetCircle).datum().inputNumber;
        }
        if (this.target.numInputs() >= this.target.maxInputs) {
            throw(new Error('Too many inputs'));
        } else {
            this.target.addInputEdge(this);
            this.source.addOutputEdge(this);
        }

        this.line
          .attr('class', 'realEdge')
          .style('stroke', 'grey')
          .style('stroke-width', '2px')
          .attr('id', this.id)
          .datum({edge: this});
        this.updateSourceEnd();
        this.updateTargetEnd();
    }
}
