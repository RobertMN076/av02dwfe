import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CircuitosService {
  private apiUrl = 'http://ergast.com/api/f1/2024/circuits.json'; // URL da API Ergast

  constructor(private http: HttpClient) { }

  getCircuitos(): Observable<any> { // Ajustamos o tipo para any
    return this.http.get(this.apiUrl);
  }
}
