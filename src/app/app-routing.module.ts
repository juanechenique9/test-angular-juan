import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FileComponent } from './pages/file/file.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
  },
  {
    path: 'file', component: FileComponent,
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
