import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearListarProductoPage } from './crear-listar-producto.page';

describe('CrearListarProductoPage', () => {
  let component: CrearListarProductoPage;
  let fixture: ComponentFixture<CrearListarProductoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearListarProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
