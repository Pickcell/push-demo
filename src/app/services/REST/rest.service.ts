import { Injectable } from '@angular/core';
import { Resource } from '../../models/resource';
import { HttpClient } from '@angular/common/http';
import { Serializer } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RESTService<T extends Resource> {

  constructor(private httpClient: HttpClient,
              private url: string,
              private endpoint: string,
              private serializer: Serializer) {
  }

}
