import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(message: any) {
    console.log('From Logger');
    console.log(message);
  }
}
