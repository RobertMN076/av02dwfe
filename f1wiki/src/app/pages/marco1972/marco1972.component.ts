import { Component } from '@angular/core';

@Component({
  selector: 'app-marco1972',
  standalone: true,
  imports: [],
  templateUrl: './marco1972.component.html',
  styleUrl: './marco1972.component.css'
})
export class Marco1972Component {
  imagemAtual: string = '/marco1972.jpg';

  trocarImagem(hover: boolean) {
    this.imagemAtual = hover ? '/marco1972-hover.jpg' : '/marco1972.jpg';
  }
}
