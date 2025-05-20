import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappRedirectComponent } from './whatsapp-redirect.component';

describe('WhatsappRedirectComponent', () => {
  let component: WhatsappRedirectComponent;
  let fixture: ComponentFixture<WhatsappRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappRedirectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
