import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataModel } from './data/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public data: Observable<DataModel>;
  public columns: string[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.data = this.http.get<DataModel>('./assets/data.json');
    this.columns = ['name', 'color', 'shape', 'height', 'width', 'length', 'weight'];
  }
}
