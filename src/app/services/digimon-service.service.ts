import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DigimonServiceService {
  private apiUrl = "https://digimon-api.com/api/digimons";

  constructor(private http: HttpClient) { }
  getAllDigimons(): Observable<any[]> {
    return this.http.get<any[]>(
      this.apiUrl
    );
  }

  searchDigimons(term: string): Observable<any[]> {
    // Add logic for searching digimons based on the term
    return this.http.get<any[]>(`${this.apiUrl}/search/${term}`);
  }
}
