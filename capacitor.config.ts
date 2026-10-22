import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  // NEW id → separate app (old com.melaku.yenebirr stays installed)
  appId: 'com.melaku.yenebirr.v4',
  appName: 'Yene Birr 4',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1200,
      backgroundColor: '#1F6E43',
      showSpinner: false,
    },
  },
};

export default config;
