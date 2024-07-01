import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// @NgModule({
//     imports:[ HttpClientModule ]
// })

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://comount-001-site1.etempurl.com'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Example method for making an authenticated GET request
  getDesignTypes(): Observable<any> {
    alert(1);
    const credentials = btoa('11174810:60-dayfreetrial'); // Encode credentials
    const headers = new HttpHeaders({
      Authorization: `Basic ${credentials}`
    });

    return this.http.get(`${this.apiUrl}/api/Common/GetDesignTypes`, { headers });
  }
}
