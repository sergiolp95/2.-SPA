import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../../profile-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
about:string;

  constructor(
    private profileService:ProfileServiceService
  ) {
    this.about = '';
   }

  ngOnInit() {
    this.about = this.profileService.getAbout();
  }

}
