import { Component, NgModule, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pilotos } from '../../models/pilotos';
import { PilotosService } from '../../services/pilotos.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pilotos',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './pilotos.component.html',
  styleUrl: './pilotos.component.css'
})
export class PilotosComponent implements OnInit{
  pilotos: Pilotos[] = []


  constructor(private pilotosService: PilotosService) {}

  ngOnInit(): void {
      this.onGetPilotos();
  }

  onGetPilotos(): void {
    this.pilotosService.getPilotos().subscribe({
      next: (dados) => {
        this.pilotos = dados
      },
      error: (erro) => {
        console.log(erro)
      },
      complete: () => {
        console.log('Chamada Finalizada')
      }
    })
  }
}
