import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pilotos } from '../models/pilotos';


@Injectable({
  providedIn: 'root'
})
export class PilotosService {

  constructor(private http: HttpClient) { }


  getPilotos(): Observable<Pilotos[]> {
    return this.http.get<Pilotos[]>('http://ergast.com/api/f1/2024/drivers.json').pipe(map((retorno: any) => retorno.data));
  }
}
