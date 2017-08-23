import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BrowsePackageService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private postURL = 'localhost:8000';  // URL to web api

    constructor(private http: Http) { }

    getPackages(packageID: number): Promise<String> {
        const url = `${this.postURL}/${packageID}`;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as String)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}