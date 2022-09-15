import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { LoginResponseDto } from '../dto/login-response.dto';
import { Router } from '@angular/router';
import { MES_ROUTES } from '../../config/routes.config';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  login(loginForm: NgForm) {
    this.authService.login(loginForm.value).subscribe({
      next: (response: LoginResponseDto) => {
        /* Khabi fel localstorage */
        localStorage.setItem('token', response.id);
        /* 9ollou mar7ba */
        this.toastr.success('Bienvenu dans votre espace');
        /* Wasslou lel espace mta3ou */
        this.router.navigate([MES_ROUTES.cv]);
      },
      error: (e) => {
        this.toastr.error('Veuillez vérifier vos crédentials');
        console.log('Login error', e);
      },
    });
  }
}
