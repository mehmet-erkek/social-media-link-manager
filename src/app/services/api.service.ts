import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api/socialmedia';

  constructor(private http: HttpClient) {}

  getLinks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/links`);
  }

  addLink(link: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/links`, link);
  }

  updateLink(id: string, link: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/links/${id}`, link);
  }

  deleteLink(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/links/${id}`);
  }
}
