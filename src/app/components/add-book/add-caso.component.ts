import {Component, Input, OnInit} from '@angular/core';
import { User } from 'src/app/model/user';
import { Caso } from 'src/app/model/caso';
import { UserService } from 'src/app/services/user.service';
import { CasoService } from 'src/app/services/caso.service';
import {AuthenticationService} from '../../services/auth.service';
import {CorreoService} from '../../services/correo.service';
import {error} from 'protractor';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-caso.component.html',
  styleUrls: ['./add-caso.component.css']
})
export class AddCasoComponent implements OnInit {

  authorSet: User[];
  caso1 = new Caso();
  user1 = new User();
  submitted = false;
  msgError = '';
  Email = this.authenticationService.getLoggedInUserName();

  constructor(private casoService: CasoService,
              private userService: UserService,
              private authenticationService: AuthenticationService,
              private correoService: CorreoService) {
    // this.getAuthors();
  }

  ngOnInit(): void {
    this.getUser(this.Email);
  }

  existsPK(val: string): void {
    this.casoService.get(val)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  saveCaso(): void {

    const usersito = {
      name: this.user1.name,
      id: this.user1.id,
      email: this.user1.email,
      password: this.user1.password,
      roles: this.user1.roles
    };
    console.log(usersito);

    const data = {
      user: usersito,
      nombreCaso: this.caso1.nombreCaso,
      caso: this.caso1.caso
    };
    // const data2 =
    console.log(data);

    this.casoService.create(data)
      .subscribe(
        data => {
          this.submitted = true;
          console.log(data);
          const correo = {
            correoPara: this.Email,
            correoSubject: 'Su caso se ha creado satisfactoriamente',
            correoContenido: 'Estimado\nSe confirma la creacion de su caso.\n'
          };
          console.log(correo);
          this.correoService.get(correo).subscribe(
            correo => {
              this.submitted = true;
            },
            error => {
              this.submitted = true;
              console.log(error);
            }
          );
        },
        error => {
          this.msgError  = error.message + ' \n ' + error.error.message;
          console.log(error);
        });
  }

  newBook() {
    this.submitted = false;
    this.caso1.idCaso = null;
    this.caso1.user = null;
    this.caso1.nombreCaso = null;
    this.caso1.caso = null;
    this.user1.name = null;
    this.user1.id = null;
    this.user1.email = null;
    this.user1.password = null;
    this.user1.roles = null;
  }



  getUser(Email: String){
    this.userService.getUser(Email)
      .subscribe(
        data => {
          this.user1 = data;
          console.log(data);
        },
        error => {
          // this.msgError  = error.message + ' \n ' + error.error.message;
          console.log(error);
        });
  }

}
