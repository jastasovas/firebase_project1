import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { firebaseConfig } from "./modules/firebase.js";
import {
  getDatabase,
  ref,
  set,
  push,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

import { gettingData } from "./modules/getDataModule.js";
const app = initializeApp(firebaseConfig);
const db = getDatabase();
gettingData();
