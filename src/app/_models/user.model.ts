export class User {
    id: string;
    username: string;
    password: string;
    email: string;

    constructor (username: string, password: string, email?: string, id?: string) {
        this.id = id || null;
        this.username = username;
        this.password = password;
        this.email = email;
    }
}