import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  query: string;
  artists: object;
  currentArtist: object;

  constructor(private http : HttpClient)
  {
    this.query = '';
    this.artists = [];
  }

  ngOnInit(): void {
    this.http.get<object>('../assets/data.json').subscribe(data => 
      {
        this.artists = data;
      });
  }

  showArtist(e, item)
  {
    console.log(e);
    this.query = item.name;
    item.highlight = !item.highlight;
    this.currentArtist = item;
  }


}
