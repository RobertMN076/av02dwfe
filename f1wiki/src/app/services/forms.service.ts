import { Injectable } from '@angular/core';
import { PilotosComponent } from '../pages/pilotos/pilotos.component';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  private piloto: any[] = []

  getNewPilots(): any[] {
    console.log(this.piloto)
    return this.piloto
  };

  addNewPilots(pilots: any): void {
    this.piloto.push(pilots)
  }
}
