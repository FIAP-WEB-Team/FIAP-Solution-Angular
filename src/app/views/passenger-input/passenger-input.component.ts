import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DUMMY_PASSANGER, PassengerData } from '../../data/PassengerData';
import { PassengerService } from '../../services/passenger.service';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-passenger-input',
  templateUrl: './passenger-input.component.html',
  styleUrls: ['./passenger-input.component.css']
})
export class PassengerInputComponent {
  startDate = new Date(2010, 1, 1)
  checkoutForm = this.formBuilder.group({
    useLoggedUserData: 'true',
    firstName: '',
    lastName: '',
    birthDate: new Date(''),
    nationality: '',
    gender: ''
  })

  constructor(private formBuilder: FormBuilder, private passengerService: PassengerService,
    private router: Router, private controlService: ControlService) {
    this.checkUseLoggedUserData(this.checkoutForm.value.useLoggedUserData === "true")
    this.checkoutForm.get("useLoggedUserData")!.valueChanges.subscribe(useLoggedUserData => {
      if (useLoggedUserData !== this.checkoutForm.value.useLoggedUserData)
        this.checkUseLoggedUserData(useLoggedUserData === "true")
    })
  }

  ngOnInit() {
    this.controlService.updateFormPosition(3)
  }

  validateForm() {
    let temp = this.checkoutForm.value
    return !isNaN(temp.birthDate?.getTime()!) && temp.firstName !== '' && temp.lastName !== '' && temp.gender !== ''
  }

  fromPassengerToForm(passenger: PassengerData) {
    this.checkoutForm.patchValue(
      {
        firstName: passenger.firstName,
        lastName: passenger.lastName,
        gender: passenger.gender,
        nationality: passenger.nationality,
        birthDate: new Date(passenger.birthDate),
      }
    )
  }

  checkUseLoggedUserData(isLoggedUser: boolean) {
    if (isLoggedUser) {
      this.fromPassengerToForm(DUMMY_PASSANGER)
    } else {
      this.fromPassengerToForm(new PassengerData("", "", "", "", ""))
    }
  }

  onSubmit() {
    if (!this.validateForm())
      window.alert(`Há campos inválidos`)
    else {
      let birthDate = formatDate(this.checkoutForm.value.birthDate!, 'dd/MM/yyyy', 'en-US')
      let passenger = new PassengerData(this.checkoutForm.value.firstName!, this.checkoutForm.value.lastName!, birthDate,
        this.checkoutForm.value.nationality!, this.checkoutForm.value.gender!)
      this.passengerService.setPassenger(passenger)

      this.router.navigate(['/checkout'])
    }
  }
}
