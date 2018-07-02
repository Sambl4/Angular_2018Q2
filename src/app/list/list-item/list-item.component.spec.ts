import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit, DebugElement } from '@angular/core';
import { formatDate } from '@angular/common';
import { By } from '@angular/platform-browser';

import { ListItemComponent } from './list-item.component';
import { ListItem } from '../../model/list-item.model';

@Component({
  template:`
  <app-list-item
    [listItem]="listItem"
    (deleteItemById)="deleteItemByIdSpy($event)">
  </app-list-item>
  `
})

class TestHostComponent implements OnInit {
  deleteItemByIdSpy: jasmine.Spy;

  public listItem: ListItem = {
    id: 1,
    title: 'test title',
    date: new Date(),
    description: 'test descroption',
    duration: 15
  }

  ngOnInit() {}

  deleteItem(id: number) {
    this.deleteItemByIdSpy = jasmine.createSpy('deleteItemByIdSpy')
  }
}

describe('ListItemComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  let listItem: ListItem;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListItemComponent,
        TestHostComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correct template', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const cardTitle: HTMLElement = nativeElement.querySelector('.card-title');
    const cardHeaderInfo: HTMLElement = nativeElement.querySelector('.card-header-info');
    const cardDescription: HTMLElement = nativeElement.querySelector('.card-description');
    const cardControlSection: HTMLElement = nativeElement.querySelector('.card-control-section');

    expect(cardTitle.textContent).toEqual(component.listItem.title);
    expect(cardHeaderInfo.firstChild.textContent).toEqual(component.listItem.duration.toString());
    expect(cardHeaderInfo.lastChild.textContent).toEqual(formatDate(component.listItem.date.toString(), 'dd.MM.yyyy', 'en-US'));
    expect(cardDescription.textContent).toEqual(component.listItem.description);
    expect(cardControlSection.firstChild.textContent).toEqual('Edit');
    expect(cardControlSection.lastChild.textContent).toEqual('Delete');
  });

  it('should delete item by id', () => {
    const expectedDeletedItem = {
      id: 1,
      title: 'test title'
    };

    const deleteButton = fixture.debugElement.query(By.css('.btn-outline-danger'));
    deleteButton.triggerEventHandler('click', null);
    expect(component.listItem.title).toEqual(expectedDeletedItem.title);
  });
});
