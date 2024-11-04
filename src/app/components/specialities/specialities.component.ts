import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrl: './specialities.component.css'
})
export class SpecialitiesComponent  implements OnInit{
  data = [
    {
      image: "../../../assets/images/01.jpg",
      title: "Pad thai with vegetables",
      subtitle:
        "A Popular Thai Noodle, Small Rice Noodle Stir-Fried with Egg, Bean Sprouts, Scallions and Ground Peanut.",
      text: "Noodles",
      price: 24,
    },
    {
      image: "../../../assets/images/02.jpg",
      title: "Red curry with chicken",
      subtitle:
        "A Popular Thai Noodle, Small Rice Noodle Stir-Fried with Egg, Bean Sprouts, Scallions and Ground Peanut.",
      text: "Curries",
      price: 30,
    },
    {
      image: "../../../assets/images/03.jpg",
      title: "Nam sod",
      subtitle:
        "A Popular Thai Noodle, Small Rice Noodle Stir-Fried with Egg, Bean Sprouts, Scallions and Ground Peanut.",
      text: "Fried Rice",
      price: 28,
    },
    {
      image: "../../../assets/images/04.jpg",
      title: "Pad kee mao with vegetables",
      subtitle:
        "A Popular Thai Noodle, Small Rice Noodle Stir-Fried with Egg, Bean Sprouts, Scallions and Ground Peanut.",
      text: "Specialities",
      price: 23,
    },
  ];

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    // this.postsService.getSortedPostsData().subscribe(data => {
    //   this.allPostsData = data;
    // });
  }
}
