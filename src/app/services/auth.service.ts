import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  	constructor(
  		private http: HttpClient
  	) { }

  	login(loginData: any): Observable<any>{
    	return this.http.post<any>(`${environment.apiUrl}/account/signin`, loginData);
  	}

  	register(registerData: any): Observable<any>{
    	return this.http.post<any>(`${environment.apiUrl}/account/signup`, registerData);
  	}
}
