import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  isHidden = false;
  name = 'aymen';

  constructor(private router: Router) {
  /*   setInterval(() => {
      this.isHidden = !this.isHidden;
    }, 1000); */
  }
  showHide() {
    this.isHidden = !this.isHidden;
  }
  ngOnInit(): void {}
  alerter(message: string) {
    alert(message);
  }
  navigation() {
    this.router.navigate(['color']);
  }
}
