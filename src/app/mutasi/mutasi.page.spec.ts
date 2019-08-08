import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutasiPage } from './mutasi.page';

describe('MutasiPage', () => {
  let component: MutasiPage;
  let fixture: ComponentFixture<MutasiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutasiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
