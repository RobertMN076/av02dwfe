import { Component, NgModule, OnInit } from '@angular/core';
import { PilotoService } from '../../services/pilotos.service';
import { TableModule } from 'primeng/table';
import { FormsComponent } from '../../components/forms/forms.component';
import { FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../../services/forms.service';
import { Pilotos } from '../../models/pilotos';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-pilotos',
  standalone: true,
  imports: [TableModule, ButtonModule, FormsComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './pilotos.component.html',
  styleUrl: './pilotos.component.css'
})
export class PilotosComponent implements OnInit{
  apiPilotos: any[] = []; // Inicializamos como um array vazio para a api
  todosPilotos: any[] = []; // Depois um array vazio para a lista de todos os pilotos


  pilotoForm: FormGroup

  constructor(private pilotoService: PilotoService, private router: Router, private route: ActivatedRoute, private adicionarPilotoService: FormsService) {
    
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
      this.apiPilotos = data.MRData.DriverTable.Drivers;
      this.todosPilotos = this.apiPilotos.concat(this.adicionarPilotoService.getNewPilots());
      console.log(this.todosPilotos);
    });
  };


  onSubmit(): void {
    const newPilots: Pilotos = ({
      givenName: this.pilotoForm.value.givenName,
      familyName: this.pilotoForm.value.familyName,
      nationality: this.pilotoForm.value.nationality,
      permanentNumber: this.pilotoForm.value.permanentNumber,
      code: this.pilotoForm.value.code,
    });
    this.adicionarPilotoService.addNewPilots(newPilots);
    this.todosPilotos = this.apiPilotos.concat(this.adicionarPilotoService.getNewPilots());
    this.pilotoForm.reset();
  };

  
}

