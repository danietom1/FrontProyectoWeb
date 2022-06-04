import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCasoComponent } from './components/add-book/add-caso.component';
import { ListCasoComponent } from './components/list-book/list-caso.component';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListFilterPipe } from './services/listerfilter.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { LoginComponent } from './components/login/login.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCasoComponent,
    ListCasoComponent,
    ListFilterPipe,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgSelectModule
  ],
  providers: [    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
