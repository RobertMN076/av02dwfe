import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipesService {
  private apiUrl = 'http://ergast.com/api/f1/2024/constructors.json'; // URL da API Ergast

  constructor(private http: HttpClient) { }

  getEquipes(): Observable<any> { // Ajustamos o tipo para any
    return this.http.get(this.apiUrl);
  }
}
