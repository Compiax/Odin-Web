export class ComponentModel {
    id: string;
    name: string;
    description: string;
    author: {
        username: string
    };
    inputs: number;
    stats: {
        downloads: number,
        stars: number
    };
    usage: string;

    constructor (data: any) {
        this.id = data.id;
        this.name = data.attributes.name;
        this.description = data.attributes.description;
        this.author = data.attributes.author;
        this.inputs = data.attributes.inputs;
        this.stats = data.attributes.stats;
        this.usage = data.attributes.usage;
    }
}
