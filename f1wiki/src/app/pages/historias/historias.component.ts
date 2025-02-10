import { Component } from '@angular/core';

import { TableModule } from 'primeng/table';

import { HistoriasService } from '../../services/historias.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-historias',
  standalone: true,
  imports: [TableModule, RouterLink],
  templateUrl: './historias.component.html',
  styleUrl: './historias.component.css'
})
export class HistoriasComponent {
  historias: any[] = [];

  constructor(private historiaService: HistoriasService) {}

  ngOnInit(): void {
    this.historiaService.getHistorias().subscribe(data => {
      this.historias = data;
    });
  }

}
