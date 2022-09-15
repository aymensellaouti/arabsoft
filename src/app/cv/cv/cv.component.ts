import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from '../../services/logger.service';
import { SayHelloService } from '../../services/say-hello.service';
import { TodoService } from '../../todo/services/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  /*   selectedCv: Cv | null = null; */
  date = new Date();
  nbClick = 0;
  cvs: Cv[] = [];
  constructor(
    /* Donne moi une instance de LoggerService et met la dans la variable logger */
    private logger: LoggerService,
    private sayHello: SayHelloService,
    private toastr: ToastrService,
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    this.logger.log('cc je suis le cvComponent');
    this.sayHello.hello();
    this.toastr.info('Bonjour bienvenu dans le cvComponent');
    this.cvs = this.cvService.getCvs();
    this.cvService.selectCvObservable$
      .pipe(distinctUntilChanged())
      .subscribe(() => {
        this.nbClick++;
      });
  }
  /*   getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
  } */
}
