import { Component, inject } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { OnesignalService } from './services/oneSignal/one-signal.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  private oneSignalService = inject(OnesignalService);
  private platform = inject(Platform);
  constructor() {
    this.platform.ready().then(() => {
      if (Capacitor.getPlatform() != 'web') {
        this.oneSignalService.OneSignalInit();
      }
    })
  }
}
