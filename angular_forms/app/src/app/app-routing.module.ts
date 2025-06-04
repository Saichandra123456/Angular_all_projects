import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UploadsComponent } from './uploads/uploads.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'uploads', component: UploadsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
