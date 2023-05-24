import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Hotel {
  id: number;
  image: string;
  price: number;
  place: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.dataUrl).pipe(
      map((data: any) => data.hotels)
    );
  }
}
