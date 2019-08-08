import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: ['./sidemenu.page.scss'],
})
export class SidemenuPage implements OnInit {

  constructor(
    private menu: MenuController
  ) { }

  ngOnInit() {
  }
  openfirst(){
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
}
