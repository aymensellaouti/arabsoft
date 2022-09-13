import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cvs: Cv[] = [
    new Cv(
      1,
      'sellaouti',
      'aymen',
      40,
      'teacher',
      'rotating_card_profile2.png',
      '1234'
    ),
    new Cv(
      2,
      'sellaouti',
      'skander',
      3,
      'tgangin',
      'rotating_card_profile3.png',
      '12345'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}