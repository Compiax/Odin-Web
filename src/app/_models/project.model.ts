export class Project {
    id: string;
    name: string;
    description: string;
    data: string;

    constructor (name: string, description: string, id?: string, data?: string) {
        this.name = name;
        this.description = description;
        this.data = data;
        this.id = id;
    }
}
