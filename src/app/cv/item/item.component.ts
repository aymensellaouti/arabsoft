import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() cv: Cv | null = null;
  @Input() size = 50;
/*   @Output() selectCv = new EventEmitter<Cv>(); */
  constructor(
    private cvService: CvService
  ) {}

  ngOnInit(): void {}

  selectItem() {
    if (this.cv)
      this.cvService.selectCv(this.cv);
  }
}
