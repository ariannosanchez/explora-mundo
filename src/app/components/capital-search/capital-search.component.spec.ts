import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalSearchComponent } from './capital-search.component';

describe('CapitalSearchComponent', () => {
  let component: CapitalSearchComponent;
  let fixture: ComponentFixture<CapitalSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapitalSearchComponent]
    });
    fixture = TestBed.createComponent(CapitalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
