import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicePeliculasComponent } from './indice-peliculas.component';

describe('IndicePeliculasComponent', () => {
  let component: IndicePeliculasComponent;
  let fixture: ComponentFixture<IndicePeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicePeliculasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicePeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
