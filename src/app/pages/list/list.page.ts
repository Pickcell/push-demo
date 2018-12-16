import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  messages: Array<any> = [];

  constructor(private navCtrl: NavController, private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getPeopleList()
      .subscribe((people: any) => {
        this.messages = people;
        console.log(this.messages);
      });
  }


  openMessage(index) {
    this.navCtrl.navigateForward(`/view-message/${index}`);
  }

  unread(item, ev) {
    ev.stopPropagation();
    console.log(ev, item);
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
