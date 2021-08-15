import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemVariantsInfoComponent } from './item-variants-info.component';

describe('ItemVariantsInfoComponent', () => {
  let component: ItemVariantsInfoComponent;
  let fixture: ComponentFixture<ItemVariantsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemVariantsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemVariantsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
