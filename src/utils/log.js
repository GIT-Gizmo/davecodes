import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyA0qZUeNJDRGBmv6gSn30NgZ72JGeL8ipM",
  authDomain: "ingridportfolio-eb22a.firebaseapp.com",
  projectId: "ingridportfolio-eb22a",
  storageBucket: "ingridportfolio-eb22a.appspot.com",
  messagingSenderId: "504876813350",
  appId: "1:504876813350:web:b686c58aeb02c5b58daae7",
  measurementId: "G-ECH7H04LXL"
};


const app = initializeApp(firebaseConfig);

const isGaSupported = isSupported();

const analytics = isGaSupported ? getAnalytics(app) : null;

export const logGa = (eventName, eventParams = {}) => {
  isGaSupported ? logEvent(analytics, eventName, eventParams) : console.log(eventName, eventParams);
};
