import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanaComponent } from './sana.component';

describe('SanaComponent', () => {
  let component: SanaComponent;
  let fixture: ComponentFixture<SanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
