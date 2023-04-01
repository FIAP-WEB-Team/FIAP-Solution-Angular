import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { PassengerService } from '../../services/passenger.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  loadingCheckout = true
  checkoutSuccess = false

  passengerInfo = this.passengerService.passenger

  constructor(private passengerService: PassengerService, private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    if (this.loginService.token !== '')
      this.router.navigate(['/'])
    else {
      this.loginService.loginUser("abana", "rabana")
      // console.log(`Saving passenger info to firebase: ${this.passengerInfo.passengerID}`)
    }
  }
}
