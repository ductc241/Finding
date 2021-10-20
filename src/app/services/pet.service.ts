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
	downloadURL: Observable<string>
	uploadPercent: Observable<number | undefined>

  	constructor(
		private http: HttpClient,
		private storage: AngularFireStorage
  	) { }

  	postReport(reportData: any){
		const file =  reportData.image
    	const filePath = `${Date.now()}`
    	const ref = this.storage.ref(filePath)
    	const task = ref.put(file)
		
		task.snapshotChanges().pipe(
			finalize(() => {
				ref.getDownloadURL().subscribe(url => {
					console.log(url)
					this.http.post<any>(`${environment.apiUrl}/pet`, {
						...reportData,
						image: url
					}).subscribe(data => console.log(data));
				})
			})
		 )
		.subscribe()
  	}


	showPet(): Observable<any>{
    	return this.http.get<any>(`${environment.apiUrl}/pet`);
  	}

  	deletePet(id: String): Observable<any>{
    	return this.http.delete<any>(`${environment.apiUrl}/pet/${id}`);
  	}
}
