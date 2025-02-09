import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoriasService {
  private historias = [
    { titulo: 'Primeira Corrida Oficial da Fórmula 1', ano: '1950', url: 'https://blog.portoseguro.com.br/a-historia-da-formula-1-entenda-como-tudo-comecou?utm_source=chatgpt.com'},
    { titulo: 'Primeiro Título Mundial de um Brasileiro', ano: '1972', url: 'https://oglobo.globo.com/esportes/70-anos-da-formula-1-confira-os-momentos-marcantes-das-sete-decadas-da-categoria-24571266?utm_source=chatgpt.com'},
    { titulo: 'Primeiro Título de Ayrton Senna', ano: '1988', url: 'https://sidspecialstore.com.br/as-corridas-que-marcaram-a-historia-na-formula-1/?srsltid=AfmBOoqkkV7d4DKLweh76THfbInmZ5aRiJFJtrW5WxRTlgcPPKIGEsrl&utm_source=chatgpt.com'},
    { titulo: 'Domínio de Michael Schumacher', ano: '2000', url: 'https://es-us.noticias.yahoo.com/deportes/tabla-campeones-hist%C3%B3ricos-f%C3%B3rmula-1-084409198.html?utm_source=chatgpt.com'},
    { titulo: 'Domínio de Max Verstappen', ano: '2021', url: 'https://as.com/motor/formula_1/asi-esta-el-palmares-de-f1-campeones-ano-a-ano-y-quien-tiene-mas-mundiales-de-formula-1-n/?utm_source=chatgpt.com'},

  ];

  constructor() { }

  getHistorias(): Observable<any[]> {
    return of(this.historias); // Simula um retorno de API
  }
}
