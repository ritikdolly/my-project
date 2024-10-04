import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstfileComponent } from './firstfile.component';

describe('FirstfileComponent', () => {
  let component: FirstfileComponent;
  let fixture: ComponentFixture<FirstfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
