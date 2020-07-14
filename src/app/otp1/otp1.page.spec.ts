import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OTP1Page } from './otp1.page';

describe('OTP1Page', () => {
  let component: OTP1Page;
  let fixture: ComponentFixture<OTP1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OTP1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OTP1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
