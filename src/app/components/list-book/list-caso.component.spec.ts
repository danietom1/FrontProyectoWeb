import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCasoComponent } from './list-caso.component';

describe('ListBookComponent', () => {
  let component: ListCasoComponent;
  let fixture: ComponentFixture<ListCasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCasoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
