import { Component } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-followline',
  templateUrl: './followline.component.html',
  styleUrls: ['./followline.component.css']
})
export class FollowlineComponent {
  navItems = [{
    enabled: false,
    name: "Busca voo",
    href: "/"
  }, {
    enabled: false,
    name: "Escolha voo",
    href: "/flights"
  }, {
    enabled: false,
    name: "Dados passageiro",
    href: "/passenger"
  }, {
    enabled: false,
    name: "Finalizar",
    href: "/checkout"
  }]

  constructor(private controlService: ControlService) {
    this.changeFormPosition(0)
  }

  changeFormPosition(position: number) {
    for (let i = 0; i < this.navItems.length; i++) {
      this.navItems[i].enabled = position >= i + 1
    }
  }

  ngOnInit() {
    this.controlService.getFormPosition().subscribe(newPosition => {
      this.changeFormPosition(newPosition)
    })
  }
}
