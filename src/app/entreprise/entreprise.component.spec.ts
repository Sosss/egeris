import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseComponent } from './entreprise.component';

describe('EntrepriseComponent', () => {
  let component: EntrepriseComponent;
  let fixture: ComponentFixture<EntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
