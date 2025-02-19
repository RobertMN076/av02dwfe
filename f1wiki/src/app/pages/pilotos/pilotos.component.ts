import { Component, NgModule, OnInit } from '@angular/core';
import { PilotoService } from '../../services/pilotos.service';
import { TableModule } from 'primeng/table';
import { FormsComponent } from '../../components/forms/forms.component';
import { FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../../services/forms.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-pilotos',
  standalone: true,
  imports: [TableModule, ButtonModule, FormsComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './pilotos.component.html',
  styleUrl: './pilotos.component.css'
})
export class PilotosComponent implements OnInit{
  pilotos: any[] = []; // Inicializamos como um array vazio
  novosPilotos: any[] = [];
  newPilots: any[] = [];


  pilotoForm: FormGroup

  constructor(private pilotoService: PilotoService, private router: Router, private route: ActivatedRoute, private formsService: FormsService) {
    
    this.pilotoForm = new FormGroup({
      givenName: new FormControl ('', ),
      familyName: new FormControl ('', ),
      nationality: new FormControl ('', ),
      permanentNumber: new FormControl ('', ),
      code: new FormControl ('', ),
    });
  };

  ngOnInit(): void {
    this.pilotoService.getPilotos().subscribe(data => {
      // A API Ergast retorna os dados dentro de um objeto MRData
      this.pilotos = data.MRData.DriverTable.Drivers;
      this.novosPilotos = this.pilotos
      console.log(this.novosPilotos)
    });
  };


  onSubmit(): void {
    this.newPilots = this.pilotoForm.value;
    this.novosPilotos = this.pilotos.concat(this.newPilots)
    this.pilotoForm.reset();
    console.log(this.novosPilotos);
  };

  
}

