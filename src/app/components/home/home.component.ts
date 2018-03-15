import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../../profile-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
profile:string;

  constructor() {

   }

  ngOnInit() {

  }

}
