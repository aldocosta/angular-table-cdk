import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridoComponent } from './grido.component';

describe('GridoComponent', () => {
  let component: GridoComponent;
  let fixture: ComponentFixture<GridoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
