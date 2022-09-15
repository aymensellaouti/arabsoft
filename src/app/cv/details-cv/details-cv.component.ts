import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { MES_ROUTES } from '../../config/routes.config';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent implements OnInit {
  cv: Cv | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cvService.findCvById(params['id']).subscribe({
        next: (cv: Cv) => {
          this.cv = cv;
        },
        error: (e) => {
          console.log(e);
          this.router.navigate([MES_ROUTES.cv]);
        },
      });
    });
  }
  delete(): void {
    if (this.cv) {
      this.cvService.deleteCv(this.cv.id).subscribe({
        next: (response) => {
          this.router.navigate([MES_ROUTES.cv]);
          this.toaster.success(`Le cv de ${this.cv?.firstname} ${this.cv?.name}
          a été supprimé avec succès `);
        },
        error: (e) => {
          console.log('delete error : ', e);
          this.toaster
            .error(`Problème de suppression du cv de ${this.cv?.firstname} ${this.cv?.name}.
          Veuillez contacter l'admin `);
        },
      });
    }
  }
}
