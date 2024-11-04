import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Post {
  id: string;
  date: string;
  title: string;
  image: string;
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  getSortedPostsData(): Observable<Post[]> {
    // Replace with actual API call or static data
    return of([
      { id: '1', date: '2024-01-01', title: 'The best way to prepare crispy & delicious dinners', image: '../../../assets/images/01.jpg', category: 'Recipes' },
      { id: '2', date: '2024-01-01', title: 'The best way to prepare crispy & delicious dinners', image: '../../../assets/images/02.jpg', category: 'Beverages' },
      { id: '3', date: '2024-01-01', title: 'The best way to prepare crispy & delicious dinners', image: '../../../assets/images/03.jpg', category: 'Health' },
      { id: '4', date: '2024-01-01', title: 'The best way to prepare crispy & delicious dinners', image: '../../../assets/images/05.jpg', category: 'Cooking' }
    ]);
  }
}
