
import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BuySearch } from 'src/app/data/BuySearch';
import { PassengerInfoService } from 'src/app/passenger-info.service';



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
  buysearch!:BuySearch

  mostrarNovoComponente = true;
  meusDados = [this.modoSelecionado, this.modoSelecionado2, this.modoSelecionado3,this.modoSelecionado4,this.modoSelecionado5,this.modoSelecionado6];

constructor(
  public router:Router,
  private passengerinfo:PassengerInfoService
 
){}

  avancar()
  {
    this.buysearch= new BuySearch(this.modoSelecionado2,this.modoSelecionado3,this.modoSelecionado4,this.modoSelecionado5,this.modoSelecionado6)
    this.passengerinfo.setbuySearch(this.buysearch)
   this.router.navigate(['/app-select-price-screen'])
  }
}
