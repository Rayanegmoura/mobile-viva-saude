import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Aluno1Page } from './aluno1.page';

describe('Aluno1Page', () => {
  let component: Aluno1Page;
  let fixture: ComponentFixture<Aluno1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Aluno1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
