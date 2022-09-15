import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  sliderObservable: Observable<string>;
  @Input() time = 1000;
  @Input() size = 150;
  start = false;
  @Input() paths = [
    'as.jpg',
    '404.png',
    'cv.png',
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
  ];
  constructor() {
    let i = 0;
    this.sliderObservable = new Observable<string>((observer) => {
      observer.next(this.paths[this.paths.length - 1]);
      setInterval(() => {
        if (i == this.paths.length) {
          i = 0;
        }
        observer.next(this.paths[i++]);
      }, this.time);
    });
  }

  ngOnInit(): void {}
}
