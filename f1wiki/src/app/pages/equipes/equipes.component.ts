import { Component, OnInit } from '@angular/core';

import { TableModule } from 'primeng/table';

import { EquipesService } from '../../services/equipes.service';

import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-equipes',
  standalone: true,
  imports: [TableModule, FormsModule],
  templateUrl: './equipes.component.html',
  styleUrl: './equipes.component.css'
})
export class EquipesComponent implements OnInit{
  equipes: any[] = []

  constructor(private equipeService: EquipesService){ }

  ngOnInit(): void {
      this.equipeService.getEquipes().subscribe(data => {
        this.equipes = data.MRData.ConstructorTable.Constructors;
        console.log(this.equipes)
      })
  }
}
