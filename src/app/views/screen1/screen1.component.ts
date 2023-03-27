
import { Component } from '@angular/core';




@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.css']
})



export class Screen1Component {
  modosVoo = ['Ida e Volta', 'Somente Ida', 'Somente Volta'];
  modoSelecionado: string = '';
  modoSelecionado2: string = '';
  modoSelecionado3: string = '';
  modoSelecionado4: string = '';
  modoSelecionado5: string = '';
  modoSelecionado6: string = '';
}
