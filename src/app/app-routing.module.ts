import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { FrontComponent } from './components/front/front.component';
import { BackComponent } from './components/back/back.component';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './auth/login/login.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { AuthGuard } from './auth/guards/auth.guard';
/* /blabla */
const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: FrontComponent,
    children: [
      {
        path: 'cv',
        children: [
          { path: '', component: CvComponent },
          { path: 'add', component: AddCvComponent, canActivate: [AuthGuard] },
          { path: ':id', component: DetailsCvComponent },
        ],
      },
      { path: 'todo', component: TodoComponent },
    ],
  },
  {
    path: 'back',
    component: BackComponent,
    children: [
      { path: 'word', component: MiniWordComponent },
      { path: 'color/:defaultColor', component: ColorComponent },
    ],
  },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
