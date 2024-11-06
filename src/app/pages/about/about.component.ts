import { Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.5s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AboutComponent implements OnDestroy  {
  allPostsData: any[] = [];
  videoUrl: SafeResourceUrl | undefined;
  private modalRef: NgbModalRef | undefined;
  @ViewChild('videoModal', { static: true }) videoModal!: TemplateRef<any>;

  constructor(private postsService: PostsService,private sanitizer: DomSanitizer, private modalService: NgbModal) {}
  fadeIn: boolean = true;
  customers = [
    {
      name: 'Victor Valdez',
      image: '../../../assets/avatars/02.jpg',
      testimonial: 'There is much to be known, life is short, and life is not life without knowledge. Adquiring a set of skills is the key to navigating a turbulent work world. The ability to later combine these skills is the best path to mastery.',
      rating: 4
    },
    {
      name: 'John Doe',
      image: '../../../assets/avatars/03.jpg',
      testimonial: 'Learning is a treasure that will follow its owner everywhere. Adquiring a set of skills is the key to navigating a turbulent work world. The ability to later combine these skills is the best path to mastery.',
      rating: 5
    },
    {
      name: 'Jane Smith',
      image: '../../../assets/avatars/03.jpg',
      testimonial: 'Education is the most powerful weapon which you can use to change the world. Adquiring a set of skills is the key to navigating a turbulent work world. The ability to later combine these skills is the best path to mastery.',
      rating: 5
    },
    {
      name: 'Alice Johnson',
      image: '../../../assets/avatars/04.jpg',
      testimonial: 'The only limit to our realization of tomorrow will be our doubts of today. Adquiring a set of skills is the key to navigating a turbulent work world. The ability to later combine these skills is the best path to mastery.',
      rating: 4
    },
    {
      name: 'Bob Brown',
      image: '../../../assets/avatars/05.jpg',
      testimonial: 'Success is not the key to happiness. Happiness is the key to success. Adquiring a set of skills is the key to navigating a turbulent work world. The ability to later combine these skills is the best path to mastery.',
      rating: 5
    },
    {
      name: 'Charlie Green',
      image: '../../../assets/avatars/06.jpg',
      testimonial: 'The future belongs to those who believe in the beauty of their dreams. Adquiring a set of skills is the key to navigating a turbulent work world. The ability to later combine these skills is the best path to mastery.',
      rating: 5
    }
  ];
  team = [
      { id: '1', date: '2024-01-01', title: 'Sittiragsenapa', image: '../../../assets/avatars/02.jpg', category: 'CEO' },
      { id: '2', date: '2024-01-01', title: 'Cesar Uriostegui', image: '../../../assets/avatars/03.jpg', category: 'Chef' },
      { id: '3', date: '2024-01-01', title: 'Angel Uriostegui', image: '../../../assets/avatars/04.jpg', category: 'Chef Assistant' },
      { id: '4', date: '2024-01-01', title: 'Phillip Martin', image: '../../../assets/avatars/05.jpg', category: 'Manager' }
  ]
  ngOnInit() {
  }
  openModal(): void {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1'
    );
    this.modalRef = this.modalService.open(this.videoModal, { centered: true });
  }
  closeModal(): void {
    if (this.modalRef) {
      this.modalRef.close();
      this.videoUrl = undefined;
    }
  }

  ngOnDestroy(): void {
    this.closeModal();
  }
}
