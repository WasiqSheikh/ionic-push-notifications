import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionic-push-notification-app',
  webDir: 'www',
  ios: {
    handleApplicationNotifications: false
  }
};

export default config;
