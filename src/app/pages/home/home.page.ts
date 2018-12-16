import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private navCtrl: NavController, private authService: AuthService) {
  }

  ngOnInit() {
  }

  openPerson(index) {
    this.navCtrl.navigateForward(`/person/${index}`);
  }

  openProfile(index) {
    this.navCtrl.navigateForward(`/person/${index}`);
  }

  openMessage() {
    this.navCtrl.navigateForward(`/list`);
  }
}
