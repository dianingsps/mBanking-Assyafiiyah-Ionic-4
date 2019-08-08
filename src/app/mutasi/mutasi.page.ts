import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mutasi',
  templateUrl: './mutasi.page.html',
  styleUrls: ['./mutasi.page.scss'],
})
export class MutasiPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  sidemenu(){
    this.router.navigate(["/sidemenu"])
  }
}
