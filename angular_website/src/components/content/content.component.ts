import { Component, Input, OnInit } from '@angular/core';
import { ContentService, Hotel } from 'src/services/content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() loggedInUser: string = '';

  hotels: Hotel[] = [];

  constructor(private dataService: ContentService) {}

  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels(): void {
    this.dataService.getHotels().subscribe(
      (hotels: Hotel[]) => {
        this.hotels = hotels;
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
}
