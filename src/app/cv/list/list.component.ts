import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() cvs: Cv[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
