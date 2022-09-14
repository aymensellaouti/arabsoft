import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvs: Cv[] = [
    new Cv(1, 'sellaouti', 'aymen', 40, 'teacher', '', '1234'),
    new Cv(
      2,
      'sellaouti',
      'skander',
      3,
      'tgangin',
      'rotating_card_profile3.png',
      '12345'
    ),
    new Cv(
      3,
      'sellaouti',
      'skander',
      3,
      'tgangin',
      '                         ',
      '12345'
    ),
  ];
  constructor() { }
  getCvs(): Cv[] {
    return this.cvs;
  }
  findCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id == id) ?? null;
  }
  deleteCv(cv: Cv): void {
    const index = this.cvs.indexOf(cv);
    this.cvs.splice(index, 1);
  }
}
