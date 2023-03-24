import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City, productModel } from './productModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wowa-frontend';
  timoStinkt = true;

  productList: productModel[] = [];
  selectionList = ["1", "2", "3"]
  selectedList = []

  constructor(private http: HttpClient){};

  cities: City[] = [];

  selectedCities: City[] = [];

  ngOnInit() {

    const headers = { 'Access-Control-Allow-Origin': '*'}
    this.http.get<productModel[]>('http://127.0.0.1:3000/products/all', { headers }).subscribe(data => {
      this.productList = data;
      console.log('PRODUCTLIST:', this.productList);
    })

    this.cities = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];
  }
}



