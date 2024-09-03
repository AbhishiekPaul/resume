import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  "appId": "io.ionic.starter",
  "appName": "resume",
  "webDir": "www",
  "plugins": {
    "GoogleAuth": {
      "scopes": ["profile", "email"],
      "serverClientId": "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com",
      "forceCodeForRefreshToken": true
    },
    "FacebookLogin": {
      "appId": "YOUR_FACEBOOK_APP_ID",
      "autoLogAppEvents": true,
      "logging": true,
      "version": "v9.0"
    },
    "AppleSignIn": {
      "clientId": "com.example.yourapp",
      "redirectUri": "https://your.redirect.uri/callback",
      "scopes": "name email",
      "state": "some-random-state",
      "usePopup": true
    }
  }
}

export default config;
