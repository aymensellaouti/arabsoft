import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from '../../services/logger.service';
import { SayHelloService } from '../../services/say-hello.service';
import { TodoService } from '../../todo/services/todo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedCv: Cv | null = null;
  date = new Date();
  cvs: Cv[] = [
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
  constructor(
    /* Donne moi une instance de LoggerService et met la dans la variable logger */
    private logger: LoggerService,
    private sayHello: SayHelloService,
    private todoService: TodoService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.logger.log('cc je suis le cvComponent');
    this.sayHello.hello();
    this.toastr.info('Bonjour bienvenu dans le cvComponent');
  }
  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
    this.todoService.logTodos();
  }
}
