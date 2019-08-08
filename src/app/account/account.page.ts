import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
signup(){
  this.router.navigate(["/signup"])
}
home(){
  this.router.navigate(["/home"])
}
mutasi(){
  this.router.navigate(["/mutasi"])
}
account(){
  this.router.navigate(["/account"])
}
}
