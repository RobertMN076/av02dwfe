import { Component } from '@angular/core';

@Component({
  selector: 'app-marco2021',
  standalone: true,
  imports: [],
  templateUrl: './marco2021.component.html',
  styleUrl: './marco2021.component.css'
})
export class Marco2021Component {
  imagemAtual: string = '/marco2021.jpg';

  trocarImagem(hover: boolean) {
    this.imagemAtual = hover ? '/marco2021-hover.jpg' : '/marco2021.jpg';
  }
}
