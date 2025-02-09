import { Component } from '@angular/core';

import { TableModule } from 'primeng/table';

import { HistoriasService } from '../../services/historias.service';

@Component({
  selector: 'app-historias',
  standalone: true,
  imports: [TableModule],
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
