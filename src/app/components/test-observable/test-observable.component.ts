import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent implements OnInit {
  observable$: Observable<number>;
  constructor(private toastr: ToastrService) {
    this.observable$ = new Observable((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
  }
  ngOnInit(): void {
    this.observable$.subscribe((val) => {
      console.log(val);
    });
  }

  toast() {
    this.observable$
      .pipe(
        map((data) => data * 3),
        filter((data) => data % 2 == 0)
      )
      .subscribe({
        next: (maVal) => {
          this.toastr.info('' + maVal);
        },
        error: (e) => {
          console.log('An Error happen :( ');
        },
        complete: () => {
          this.toastr.warning('BOOOOOM :D');
        },
      });
  }
}
