import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allPostsData: any[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getSortedPostsData().subscribe(data => {
      this.allPostsData = data;
    });
  }
}
