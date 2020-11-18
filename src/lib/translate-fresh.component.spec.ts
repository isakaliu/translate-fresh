import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFreshComponent } from './translate-fresh.component';

describe('TranslateFreshComponent', () => {
  let component: TranslateFreshComponent;
  let fixture: ComponentFixture<TranslateFreshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslateFreshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateFreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
