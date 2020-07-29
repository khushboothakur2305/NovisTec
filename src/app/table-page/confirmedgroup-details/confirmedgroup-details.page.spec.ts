import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfirmedgroupDetailsPage } from './confirmedgroup-details.page';

describe('ConfirmedgroupDetailsPage', () => {
  let component: ConfirmedgroupDetailsPage;
  let fixture: ComponentFixture<ConfirmedgroupDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedgroupDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmedgroupDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
