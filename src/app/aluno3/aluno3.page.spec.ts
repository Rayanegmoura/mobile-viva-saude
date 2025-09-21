import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Aluno3Page } from './aluno3.page';

describe('Aluno3Page', () => {
  let component: Aluno3Page;
  let fixture: ComponentFixture<Aluno3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Aluno3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
