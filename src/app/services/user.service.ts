import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class UserService {

  	constructor(private http: HttpClient) { }

  	getUser(): Observable<any>{
    	return this.http.get<any>(`${environment.apiUrl}/account/signin`);
  	}
	
	getUserByEmail(username: String): Observable<any>{
		return this.http.get<any>(`${environment.apiUrl}/user?username=${username}`);
	}
}
