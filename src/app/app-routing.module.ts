import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AuthentificationComponent } from './authentification/authentification.component';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'auth', component: AuthentificationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
