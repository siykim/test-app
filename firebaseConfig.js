import * as firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
  apiKey: "AIzaSyAjs-4-5vjgZN1UL84MwMIMwH4fcbqQOKY",
  authDomain: "test-app-81395.firebaseapp.com",
  databaseURL: "https://test-app-81395.firebaseio.com",
  projectId: "test-app-81395",
  storageBucket: "test-app-81395.appspot.com",
  messagingSenderId: "173732165680",
  appId: "1:173732165680:web:e8e0daa4be1da4b1e155f5",
  measurementId: "G-9WX62GFMB6"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database();