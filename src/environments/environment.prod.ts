import { fireBase } from "firebase.conf";
import { SnotifyPosition } from "ng-snotify";

export const environment = {
  production: true,
  snotifyConfig: {
    showProgressBar: true,
    position: SnotifyPosition.rightTop,
  },
  firebase: {
    apiKey: fireBase.API_KEY,
    authDomain: fireBase.AUTH_DOMAIN,
    databaseURL: fireBase.DATABASE_URL,
    projectId: fireBase.PROJECT_ID,
    storageBucket: fireBase.STORAGE_BUCKET,
    messagingSenderId: fireBase.MESSAGING_SENDER_ID,
    app_id: fireBase.APP_ID,
    MEASUREMENT_ID: fireBase.MEASUREMENT_ID,
  },
};
