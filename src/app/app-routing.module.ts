import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DsaSheetComponent } from './pages/dsa-sheet/dsa-sheet.component';
import { ProblemDetailComponent } from './pages/problem-detail/problem-detail.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dsa-sheet',
    component: DsaSheetComponent
  },
  {
    path: 'topic-details',
    component: ProblemDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
