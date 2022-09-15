import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Cv } from '../model/cv';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { API } from '../../config/api.config';

@Injectable({
  providedIn: 'root',
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
  private selectCvSubject = new Subject<Cv>();
  selectCvObservable$ = this.selectCvSubject.asObservable();
  constructor(private http: HttpClient) {}
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(API.cv);
  }
  getFakeCvs(): Cv[] {
    return this.cvs;
  }
  findCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(API.cv + id);
  }

  findFakeCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id == id) ?? null;
  }
  deleteFakeCv(cv: Cv): void {
    const index = this.cvs.indexOf(cv);
    this.cvs.splice(index, 1);
  }
  deleteCv(id: number): Observable<any> {
    const params = new HttpParams().set(
      'access_token',
      localStorage.getItem('token') ?? ''
    );
    /* Dans js si le nom de la variable  = cle parametre on le met seul sans cle valeur */
    return this.http.delete<Cv>(API.cv + id, { params });
  }
  selectCv(cv: Cv) {
    this.selectCvSubject.next(cv);
  }
  addCv(cv: Cv): Observable<Cv> {
    const headers = new HttpHeaders().set(
      'authorization',
      localStorage.getItem('token') ?? ''
    );
    return this.http.post<Cv>(API.cv, cv, { headers });
  }
}
