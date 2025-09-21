import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Aluno2Page } from './aluno2.page';

describe('Aluno2Page', () => {
  let component: Aluno2Page;
  let fixture: ComponentFixture<Aluno2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Aluno2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
