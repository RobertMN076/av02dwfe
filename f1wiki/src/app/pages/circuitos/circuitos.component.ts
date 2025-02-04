import { Component, OnInit } from '@angular/core';

import { CircuitosService } from '../../services/circuitos.service';

import { TableModule } from 'primeng/table';

import { NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circuitos',
  standalone: true,
  imports: [TableModule, FormsModule],
  templateUrl: './circuitos.component.html',
  styleUrl: './circuitos.component.css'
})
export class CircuitosComponent implements OnInit {
  circuitos: any[] = []

  constructor(private circuitoService: CircuitosService) { }

  ngOnInit(): void {
    this.circuitoService.getCircuitos().subscribe(data => {
      this.circuitos = data.MRData.CircuitTable.Circuits;
      console.log(this.circuitos)
    })
  }
}
