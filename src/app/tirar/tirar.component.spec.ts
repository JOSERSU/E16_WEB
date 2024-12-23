import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TirarComponent } from './tirar.component';

describe('TirarComponent', () => {
  let component: TirarComponent;
  let fixture: ComponentFixture<TirarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TirarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TirarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
