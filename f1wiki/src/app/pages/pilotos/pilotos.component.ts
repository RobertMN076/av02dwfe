import { Component, NgModule, OnInit } from '@angular/core';
import { PilotoService } from '../../services/pilotos.service';
import { TableModule } from 'primeng/table';
import { FormsComponent } from '../../components/forms/forms.component';
import { FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Validator } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-pilotos',
  standalone: true,
  imports: [TableModule, FormsComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './pilotos.component.html',
  styleUrl: './pilotos.component.css'
})
export class PilotosComponent {
  pilotos: any[] = []; // Inicializamos como um array vazio

  pilotoForm: FormGroup

  constructor(private pilotoService: PilotoService, private router: Router, private cdr: ChangeDetectorRef) {
    this.pilotoForm = new FormGroup({
      givenName: new FormControl ('', ),
      familyName: new FormControl ('', ),
      nacionality: new FormControl ('', ),
      permanentNumber: new FormControl ('', ),
      code: new FormControl ('', ),
    })

    this.pilotoService.getPilotos().subscribe(data => {
      // A API Ergast retorna os dados dentro de um objeto MRData
      this.pilotos = data.MRData.DriverTable.Drivers;
      console.log(this.pilotos)
    });
  }

  onSubmit(): void {
    this.pilotos.push(this.pilotoForm.value); // Adiciona o objeto diretamente
    this.pilotoForm.reset(); // Limpa o formulário após o envio (opcional)
    this.cdr.detectChanges(); // Força a atualização da tabela
  }

  
}

