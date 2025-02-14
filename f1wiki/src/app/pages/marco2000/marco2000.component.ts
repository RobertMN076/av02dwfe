import { Component } from '@angular/core';

@Component({
  selector: 'app-marco2000',
  standalone: true,
  imports: [],
  templateUrl: './marco2000.component.html',
  styleUrl: './marco2000.component.css'
})
export class Marco2000Component {
  imagemAtual: string = '/marco2000.jpg';

  trocarImagem(hover: boolean) {
    this.imagemAtual = hover ? '/marco2000-hover.jpg' : '/marco2000.jpg';
  }
}
