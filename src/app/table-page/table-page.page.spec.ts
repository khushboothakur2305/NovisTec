import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TablePagePage } from './table-page.page';

describe('TablePagePage', () => {
  let component: TablePagePage;
  let fixture: ComponentFixture<TablePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TablePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
