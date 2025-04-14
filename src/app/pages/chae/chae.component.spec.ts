import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaeComponent } from './chae.component';

describe('ChaeComponent', () => {
  let component: ChaeComponent;
  let fixture: ComponentFixture<ChaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
