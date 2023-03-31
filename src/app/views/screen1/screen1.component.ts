
import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';



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

  mostrarNovoComponente = true;
  meusDados = [this.modoSelecionado, this.modoSelecionado2, this.modoSelecionado3,this.modoSelecionado4,this.modoSelecionado5,this.modoSelecionado6];

constructor(
  public router:Router
){}

  avancar()
  {
   this.router.navigate(['/app-select-price-screen'])
  }
}
