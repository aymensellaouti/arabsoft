import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {
  isEteinte = false;
  constructor() { }

  ngOnInit(): void {
  }
  interupteur() {
    this.isEteinte = !this.isEteinte;
  }

}
