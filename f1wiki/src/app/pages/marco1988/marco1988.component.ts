import { Component } from '@angular/core';

@Component({
  selector: 'app-marco1988',
  standalone: true,
  imports: [],
  templateUrl: './marco1988.component.html',
  styleUrl: './marco1988.component.css'
})
export class Marco1988Component {
  imagemAtual: string = '/marco1988.jpg';

  trocarImagem(hover: boolean) {
    this.imagemAtual = hover ? '/marco1988-hover.jpg' : '/marco1988.jpg';
  }
}
