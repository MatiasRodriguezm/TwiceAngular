import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NayeonComponent } from './nayeon.component';

describe('NayeonComponent', () => {
  let component: NayeonComponent;
  let fixture: ComponentFixture<NayeonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NayeonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NayeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
