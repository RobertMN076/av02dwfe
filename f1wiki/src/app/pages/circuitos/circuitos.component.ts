import { Component, OnInit } from '@angular/core';
import { CircuitosService } from '../../services/circuitos.service';
import { TableModule } from 'primeng/table';
import { NgClass, NgFor } from '@angular/common';
import { PipeTransform } from '@angular/core';

@Component({
  selector: 'app-circuitos',
  standalone: true,
  imports: [TableModule],
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
