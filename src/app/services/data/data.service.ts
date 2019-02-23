import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of as observableOf } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  people: any = [];

  constructor(private http: HttpClient) {
  }

  getPeopleList() {
    if (this.people.length) {
      return observableOf(this.people);
    }
    const url = '/assets/files/messages.json';
    return this.http.get(url)
      .pipe(
        map((people: any) => {
          return people.map(p => {
            p.created_at = new Date(p.created_at);
            return p;
          });
        }),
        tap(people => this.people = people),
      );
  }

  getPerson(index) {
    // if (!this.people[index]) {
    return this.getPeopleList()
      .pipe(
        map(() => this.people.filter(p => p.id.toString() === index)[0])
      );
    // return observableOf(this.people[index]);
  }
}
