import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Test } from './test';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class VPTestService{

    private headers = new Headers({'Content-Type': 'application/json'});
    private postURL = 'localhost:8000';  // URL to web api

    constructor(private http: Http) { }

    getPackageTests(packageID: number): Promise<Test[]> {
        const url = `${this.postURL}/${packageID}`;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Test[])
        .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}