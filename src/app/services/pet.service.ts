import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, finalize } from "rxjs/operators";
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class PetService {
	imgLink: String = ''
  	constructor(
		private http: HttpClient,
		private storage: AngularFireStorage
  	) { }

  	postReport(reportData: any){
		// const file = reportData.image		
		// var n = Date.now();
		// const filePath = `pet/${n}`;
		// const fileRef = this.storage.ref(filePath);

		// const task = this.storage.upload(`pet/${n}`, file);

		// task.snapshotChanges().pipe(finalize(() => {
		// 	fileRef.getDownloadURL().subscribe(url => {
		// 		if(url){
		// 			const data = {
		// 				...reportData,
		// 				image: url
		// 			}
		// 			this.http.get<any>(`${environment.apiUrl}/pet`).subscribe(data => {
		// 				console.log(data)
		// 			})
		// 			console.log(url)
		// 		}
		// 	})
		// }))
		return this.http.post<any>(`${environment.apiUrl}/pet`, reportData)
  	}


	showPet(): Observable<any>{
    	return this.http.get<any>(`${environment.apiUrl}/pet`);
  	}
}
