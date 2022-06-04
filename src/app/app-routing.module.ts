import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCasoComponent } from './components/add-book/add-caso.component';
import { ListCasoComponent } from './components/list-book/list-caso.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'logout', component: LoginComponent },
  { path: 'listBook', component: ListCasoComponent },
  { path: 'addBook', component: AddCasoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
