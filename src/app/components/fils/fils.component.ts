import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  /*
    1- créer event : EventEmitter
    2- Emmetre l'event => je vais mettre data
    3- Quand emettre l'event
  */
 /* Je crée un emmeteur d'event */
  @Output() sendDataToDad = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  /* Quand appelle la methode j'emet l event avec le message 3asslema */
  sendData() {
    this.sendDataToDad.emit('3asslama :D');
  }

}
