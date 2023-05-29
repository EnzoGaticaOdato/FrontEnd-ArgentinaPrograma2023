import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoylogin',
  templateUrl: './logoylogin.component.html',
  styleUrls: ['./logoylogin.component.css']
})
export class LogoyloginComponent {
  constructor(private router: Router){

  }

  login(){
    this.router.navigate(['/login'])
  }
}
