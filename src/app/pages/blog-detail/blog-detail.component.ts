import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {
  item: any;

  items = [
    {
      id: 1,
      date: 'January 18, 2021',
      title: 'The best way to prepare crispy & delicious dinners',
      description: `As a child, Napoleon Bonaparte found himself drawn to games of strategy and to books that presented examples of leadership in action. Entering a military academy, he was not focused on a military career and fitting into the system. Instead, he had an obsessive need to learn as much as he could about all aspects of the military arts. He read voraciously.

      The extent of his knowledge impressed his superiors. At a very early age he was given an unusual amount of responsibility. He learned quickly how to keep his cool, derive the right lessons from his experiences, and recover from mistakes. By the time he was given greater responsibilities on the battlefield, he had gone through an apprenticeship that was double or triple the intensity of his peers.

      Being so young, ambitious, and disdainful of authority, when he was given leadership positions he proceeded to effect the greatest revolution in military history, changing the size and shape of armies, singlehandedly introducing maneuver into battle, and so on. At the endpoint of his development, he came to possess a remarkable feel for battle and the overall shape of a campaign. In his case, this became known as his infamous coup d’oeil, his ability to assess a situation with a glance of his eye.

      This made his lieutenants and rivals imagine that he possessed mystical powers. Daily Law: Find the deepest pleasure in absorbing knowledge and information. Feel like you never have enough.

      It is often a curse to learn under someone so brilliant and accomplished—your own confidence becomes crushed as you struggle to follow all of their great ideas. Many apprentices become lost in the shadow of their illustrious mentors and never amount to anything.

      Because of his ambition, the pianist Glenn Gould found his way to the only real solution to this dilemma. He would listen to all of his mentor Alberto Guerrero’s ideas about music and try them out. In the course of playing, he would subtly alter these ideas to suit his inclinations.

      This would make him feel that he had his own voice. As the years went by, he made this differentiation between himself and his instructor more pronounced. Because he was so impressionable, over the course of the apprenticeship he had unconsciously internalized all of the important ideas of his mentor, but through his own active engagement he had managed to adapt them to his individuality.

      In this way, he could learn and yet incubate a creative spirit that would help set him apart from everyone else once he left Guerrero. Daily Law: Beware the illustrious mentor’s shadow. Try out their ideas but always transfigure them and differentiate yourself. Your goal is to surpass them.`,
      image: '../../../assets/images/05.jpg'
    },
    {
      id: 2,
      date: 'February 10, 2021',
      title: 'Tips for creating healthy and tasty meals',
      description: 'Discover ways to make meals that are both nutritious and flavorful. This guide covers meal planning, healthy ingredients, and methods to ensure that every dish is both healthy and delicious.',
      image: '../../../assets/images/06.jpg'
    },
    {
      id: 3,
      date: 'March 15, 2021',
      title: 'How to make smoothies that taste great',
      description: 'Learn how to make smoothies that are not only healthy but also taste amazing. From ingredient selection to blending techniques, we cover everything to help you craft the perfect smoothie.',
      image: '../../../assets/images/07.jpg'
    },
    {
      id: 4,
      date: 'April 5, 2021',
      title: 'The secrets to perfect baked goods',
      description: 'Uncover the secrets to baking goods that come out perfect every time. Get tips on ingredient measurements, baking times, and methods that will make your baked items stand out.',
      image: '../../../assets/images/08.jpg'
    },
    {
      id: 5,
      date: 'May 20, 2021',
      title: 'Ideas for quick and easy breakfasts',
      description: 'Need breakfast ideas that are both quick and delicious? Check out these simple breakfast recipes that are perfect for busy mornings, ensuring you start your day with energy and satisfaction.',
      image: '../../../assets/images/09.jpg'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.item = this.items.find(item => item.id === Number(id));
  }
}
