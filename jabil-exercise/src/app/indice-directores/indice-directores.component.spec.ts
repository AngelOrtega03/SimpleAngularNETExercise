import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceDirectoresComponent } from './indice-directores.component';

describe('IndiceDirectoresComponent', () => {
  let component: IndiceDirectoresComponent;
  let fixture: ComponentFixture<IndiceDirectoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndiceDirectoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceDirectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
