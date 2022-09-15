import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MES_ROUTES } from 'src/app/config/routes.config';
import { CvService } from '../services/cv.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent implements OnInit {
  constructor(
    private cvService: CvService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {}

  addCv(formulaire: NgForm) {
    this.cvService.addCv(formulaire.value).subscribe({
      next: (response) => {
        this.toaster
          .success(`Le cv de ${formulaire.value.firstname} ${formulaire.value.name}
          a été ajouté avec succès `);
        this.router.navigate([MES_ROUTES.cv]);
      },
      error: (e) => {
        console.log('add error : ', e);
        this.toaster.error(`Problème d'ajout. Veuillez contacter l'admin `);
      },
    });
  }
}
