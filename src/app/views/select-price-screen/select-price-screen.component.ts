import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BuySearch } from 'src/app/data/BuySearch';
import { PassengerInfoService } from 'src/app/passenger-info.service';
@Component({
  selector: 'app-select-price-screen',
  templateUrl: './select-price-screen.component.html',
  styleUrls: ['./select-price-screen.component.css']
})
export class SelectPriceScreenComponent {
 
  private router!:Router

 constructor( private PassengerInfoService: PassengerInfoService, private routers: Router)
 {

  
 }
 information:BuySearch=this.PassengerInfoService.getbuySearch()
  
  ngOnInit()
  {
    alert(this.information.departure)
  }

}
