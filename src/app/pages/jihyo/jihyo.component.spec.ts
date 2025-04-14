import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JihyoComponent } from './jihyo.component';

describe('JihyoComponent', () => {
  let component: JihyoComponent;
  let fixture: ComponentFixture<JihyoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JihyoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JihyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
