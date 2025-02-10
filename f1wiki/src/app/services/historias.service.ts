import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoriasService {
  private historias = [
    { titulo: 'Primeira Corrida Oficial da Fórmula 1', ano: '1950', url: '/marco1950'},
    { titulo: 'Primeiro Título Mundial de um Brasileiro', ano: '1972', url: '/marco1972'},
    { titulo: 'Primeiro Título de Ayrton Senna', ano: '1988', url: '/marco1988'},
    { titulo: 'Domínio de Michael Schumacher', ano: '2000', url: '/marco2000'},
    { titulo: 'Domínio de Max Verstappen', ano: '2021', url: '/marco2021'},

  ];

  constructor() { }

  getHistorias(): Observable<any[]> {
    return of(this.historias); // Simula um retorno de API
  }
}
