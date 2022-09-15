import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponseDto } from '../dto/login-response.dto';
import { LogincredentialsDto } from '../dto/login-credentials.dto';
import { HttpClient } from '@angular/common/http';
import { API } from '../../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  login(credentials: LogincredentialsDto): Observable<LoginResponseDto>{
    return this.http.post<LoginResponseDto>(API.login, credentials);
  }
}
