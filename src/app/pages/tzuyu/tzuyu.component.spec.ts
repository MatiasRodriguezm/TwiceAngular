import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzuyuComponent } from './tzuyu.component';

describe('TzuyuComponent', () => {
  let component: TzuyuComponent;
  let fixture: ComponentFixture<TzuyuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TzuyuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TzuyuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
