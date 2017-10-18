import { Edge } from './edge.model';
import { UUID } from 'angular2-uuid';
export class Node {
    public group: any;

    // public inCircle = null;
    public outCircle = null;

    public inCircles = [];

    public inputs: {
        edge: Edge
    }[];
    public output: Edge;

    public coords: {
        x: number,
        y: number
    };

    public id: string;
    public maxInputs: number;
    public currentInputs = 0;

    public updatePosition(x, y) {
        this.coords.x = x;
        this.coords.y = y;

        if (this.output) {
            this.output.updateSourceEnd();
        }

        this.inputs.forEach((input) => {
            input.edge.updateTargetEnd();
        });
    }

    public remove() {
        this.group.remove();
        this.inputs.forEach(i => i.edge.remove());
        console.log(this.output);
        if (this.output != null) {
            console.log('Deleting output');
            this.output.remove();
        }
    }

    public toJSON(): any {
        return {
            id: this.id,
            parents: this.inputs.map((i) => {
                return i.edge.source.id;
            }),
            child: this.output ? this.output.target.id : null,
            coords: {
                x: this.coords.x,
                y: this.coords.y
            }
        };
    }

    public numInputs() {
        return this.inputs.length;
    }

    public addInputEdge(edge: Edge) {
        this.inputs.push({edge: edge});
    }

    public addOutputEdge(edge: Edge) {
        this.output = edge;
    }

    public removeInputEdge(edge: Edge) {
        this.inputs = this.inputs.filter((i) => {
            return (i.edge.id !== edge.id);
        });
    }

    public removeOutputEdge(edge: Edge) {
        this.output = null;
    }

    constructor(group: any, maxInputs: number, coords: {x: number, y: number}, id?: string) {
        this.group = group;
        this.maxInputs = maxInputs;
        this.coords = { x: coords.x, y: coords.y };
        this.inputs = [];

        if (id != null) {
            this.id = id;
        } else {
            this.id = `node-${UUID.UUID()}`;
        }
    }
}
