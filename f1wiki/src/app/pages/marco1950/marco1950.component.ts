import { Component } from '@angular/core';

@Component({
  selector: 'app-marco1950',
  standalone: true,
  imports: [],
  templateUrl: './marco1950.component.html',
  styleUrl: './marco1950.component.css'
})
export class Marco1950Component {
  imagemAtual: string = '/marco1950.jpg';

  trocarImagem(hover: boolean) {
    this.imagemAtual = hover ? '/marco1950-hover.jpg' : '/marco1950.jpg';
  }
}
