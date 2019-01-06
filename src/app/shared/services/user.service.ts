// import { environment } from '../../environments/environment';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
// import 'rxjs/add/operator/map';

import {HttpClient, HttpParams} from '@angular/common/http';




@Injectable()
export class UserService {

    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    // private options = new RequestOptions({headers: this.headers});

    private authUrl = ''; // environment.authUrl;

    constructor(protected httpClient: HttpClient) {
    }

    /*public get(id: string): Observable<Hero> {
        return this.httpClient.get<Hero>(this.URL, {
            params: new HttpParams().set("id", id)
        });
    }*/

    login(credentials): Observable<any> {
        const username = credentials.username;
        const password = credentials.password;
        const clientId = ''; // environment.client_id;
        const clientSecret = ''; // environment.client_secret;

        const userData = 'grant_type=password&client_id=' + clientId +
                         '&client_secret=' + clientSecret +
                         '&username=' + username +
                         '&password=' + password;

        const params = new HttpParams()
            .set('Content-Type', 'application/x-www-form-urlencoded');

        // return this.httpClient.post(this.authUrl, userData, this.options);

         return null;
    }

}
