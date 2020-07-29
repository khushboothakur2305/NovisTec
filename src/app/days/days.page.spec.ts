import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DaysPage } from './days.page';

describe('DaysPage', () => {
  let component: DaysPage;
  let fixture: ComponentFixture<DaysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DaysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
