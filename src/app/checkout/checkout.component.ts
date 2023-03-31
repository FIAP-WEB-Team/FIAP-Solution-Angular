import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { PassengerInfoService } from '../passenger-info.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  loadingCheckout = true
  checkoutSuccess = false

  passengerInfo = this.passengerInfoService.passengerInfo

  constructor(private passengerInfoService: PassengerInfoService, private router: Router) { }

  ngOnInit() {
    // if (this.passengerInfo === undefined)
      // this.router.navigate(['/'])
    // else
    //   console.log(`Saving passenger info to firebase: ${this.passengerInfo.passengerID}`)
  }
}
