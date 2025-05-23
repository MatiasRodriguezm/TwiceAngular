import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomoComponent } from './momo.component';

describe('MomoComponent', () => {
  let component: MomoComponent;
  let fixture: ComponentFixture<MomoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MomoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
