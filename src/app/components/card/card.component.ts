import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  name = '';
  firstname = 'aymen';
  job = 'enseignant';
  path = 'rotating_card_profile3.png';
  constructor() { }

  ngOnInit(): void {
  }

}
