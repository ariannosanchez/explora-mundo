import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentSearchComponent } from './continent-search.component';

describe('ContinentSearchComponent', () => {
  let component: ContinentSearchComponent;
  let fixture: ComponentFixture<ContinentSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContinentSearchComponent]
    });
    fixture = TestBed.createComponent(ContinentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
