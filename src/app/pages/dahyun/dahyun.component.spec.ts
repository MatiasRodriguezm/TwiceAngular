import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DahyunComponent } from './dahyun.component';

describe('DahyunComponent', () => {
  let component: DahyunComponent;
  let fixture: ComponentFixture<DahyunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DahyunComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DahyunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
