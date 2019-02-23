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
  showSearch = false;

  constructor(private navCtrl: NavController, private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getPeopleList()
      .subscribe((people: any) => {
        this.messages = people;
      });
  }


  openMessage(index) {
    this.navCtrl.navigateForward(`/view-message/${index}`);
  }

  unread(item, ev) {
    ev.stopPropagation();
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
