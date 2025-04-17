import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDirectorComponent } from './agregar-director.component';

describe('AgregarDirectorComponent', () => {
  let component: AgregarDirectorComponent;
  let fixture: ComponentFixture<AgregarDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarDirectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
