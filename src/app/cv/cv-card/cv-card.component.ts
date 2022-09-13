import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css']
})
export class CvCardComponent implements OnInit {
  @Input() cv: Cv | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
