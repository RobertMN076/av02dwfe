import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PilotoService {
  private apiUrl = 'http://ergast.com/api/f1/2024/drivers.json'; // URL da API Ergast

  constructor(private http: HttpClient) { }

  getPilotos(): Observable<any> { // Ajustamos o tipo para any
    return this.http.get(this.apiUrl);
  }
}