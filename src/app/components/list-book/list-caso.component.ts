import {Component, Input, OnInit} from '@angular/core';
import { Caso } from 'src/app/model/caso';
import { CasoService } from 'src/app/services/caso.service';
import { UserService } from 'src/app/services/user.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/model/user';
import {AuthenticationService} from '../../services/auth.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-caso.component.html',
  styleUrls: ['./list-caso.component.css']
})
export class ListCasoComponent implements OnInit {

    casosSet: Caso[];
    casosFil: Caso[];
    isbnBook: string;
    collectionSize: number;
    searchTerm: string;
    closeModal: string;
    selected: User;
    msgError = '';
    currentCaso = null;
    currentIndex = -1;
    Email = this.authenticationService.getLoggedInUserName();

    constructor(private casoService: CasoService,
                private authorService: UserService,
                private modalService: NgbModal,
                private authenticationService: AuthenticationService) {
                      // this.getAuthors();
                    }

    ngOnInit(): void {
      this.refreshList();
    }

    triggerModal(content: any, val: Caso) {
      this.currentCaso = val;
      this.retrieveBook(this.currentCaso.isbn);
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
        this.closeModal = `Closed with: ${res}`;
      }, (res) => {
        this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
      });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

    search(value: string): void {
      this.casosFil = this.casosSet.filter((val) => val.nombreCaso.toLowerCase().includes(value));
      this.collectionSize = this.casosFil.length;
    }

    retrieveBooks(): void {
      console.log(this.Email);
      this.casoService.getAll(this.Email)
        .subscribe(
          data => {
            this.casosSet = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }

    retrieveBook(val: string): void {
      this.casoService.get(val)
        .subscribe(
          data => {
            this.currentCaso = data;
            console.log(data);
          },
          error => {
            this.msgError =  error.message + ' \n ' + error.error.message;
            console.log(error);
          });
    }

    updateBook(): void {
     this.casoService.update(this.currentCaso.idCaso, this.currentCaso)
        .subscribe(
          data => {
            this.refreshList();
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }

    deleteBook(val1: string): void {
      this.casoService.delete(val1)
         .subscribe(
           data => {
             this.refreshList();
             console.log(data);
           },
           error => {
             console.log(error);
           });
     }

    setActiveBook(book: Caso, index: number): void {
      this.currentCaso = book;
      this.currentIndex = index;
    }

    refreshList(): void {
      this.retrieveBooks();
    }




  }
