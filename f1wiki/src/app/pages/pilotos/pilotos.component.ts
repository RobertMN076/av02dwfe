import { Component, NgModule, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pilotos } from '../../models/pilotos';
import { PilotoService } from '../../services/pilotos.service';
import { NgFor } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FormsComponent } from '../../components/forms/forms.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pilotos',
  standalone: true,
  imports: [TableModule, FormsComponent, FormsModule],
  templateUrl: './pilotos.component.html',
  styleUrl: './pilotos.component.css'
})
export class PilotosComponent implements OnInit{
  pilotos: any[] = []; // Inicializamos como um array vazio

  constructor(private pilotoService: PilotoService) { }

  ngOnInit(): void {
    this.pilotoService.getPilotos().subscribe(data => {
      // A API Ergast retorna os dados dentro de um objeto MRData
      this.pilotos = data.MRData.DriverTable.Drivers;
      console.log(this.pilotos)
    });
  }
  
}

