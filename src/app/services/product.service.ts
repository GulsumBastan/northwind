import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44326/api/Products/getall';

  constructor(private httpClient: HttpClient) { }
  getProducts():Observable<listResponseModel<Product>> {
    return this.httpClient.get<listResponseModel<Product>>(this.apiUrl);


  }
}
