import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css'],
})
export class NgstyleComponent implements OnInit {
  @Input() color = 'green';
  font = 'verdana';
  size = '75px';
  constructor() {}

  ngOnInit(): void {}
}
