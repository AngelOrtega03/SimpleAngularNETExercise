import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDirectorComponent } from './editar-director.component';

describe('EditarDirectorComponent', () => {
  let component: EditarDirectorComponent;
  let fixture: ComponentFixture<EditarDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarDirectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
