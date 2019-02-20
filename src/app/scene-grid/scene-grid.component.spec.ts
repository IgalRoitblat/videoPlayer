import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneGridComponent } from './scene-grid.component';

describe('SceneGridComponent', () => {
  let component: SceneGridComponent;
  let fixture: ComponentFixture<SceneGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceneGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
