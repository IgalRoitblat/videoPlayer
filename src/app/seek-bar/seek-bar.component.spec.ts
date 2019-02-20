import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekBarComponent } from './seek-bar.component';

describe('SeekBarComponent', () => {
  let component: SeekBarComponent;
  let fixture: ComponentFixture<SeekBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
