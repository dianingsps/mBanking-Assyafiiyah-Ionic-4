import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CekSaldoPage } from './cek-saldo.page';

describe('CekSaldoPage', () => {
  let component: CekSaldoPage;
  let fixture: ComponentFixture<CekSaldoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CekSaldoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CekSaldoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
