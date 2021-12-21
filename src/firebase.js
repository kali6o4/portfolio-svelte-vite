import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { errorState, loadingState, portfolioQuery } from './state/store';

const configDev = {
  // @ts-ignore
  apiKey: import.meta.env.VITE_apiKey,
  // @ts-ignore
  appId: import.meta.env.VITE_appId,
  // @ts-ignore
  databaseURL: import.meta.env.VITE_databaseURL,
  // @ts-ignore
  projectId: import.meta.env.VITE_projectId,
}

if (!firebase.apps.length) {
  firebase.initializeApp(configDev);
}
else {
  firebase.app();
}

export const db = firebase.firestore()

export function firebaseinit() {}

export async function fetchData(num){
  let status;
  const unsubscribe = errorState.subscribe((x) => status = x)

  loadingState.set(true);

  if (!status) {
    errorState.set(false);
  }
  
  await db.collection('portfolio')
  .orderBy('timestamp', 'desc')
  .limit(num)
  .get()
  .then((snapshot) => {
    let arr = [];
    snapshot.docs.map((doc) => {
      arr.push({id: doc.id, ...doc.data()});
    });
    portfolioQuery.set(arr);
  })
  .catch(() => errorState.set(true))
  .finally(() => {
    loadingState.set(false);
    unsubscribe();
  });
}

/* export async function checkAmount(){
  await db.collection('amara')
    .doc('prodId')
    .get()
    .then((doc) => {
      setResp(doc.data());
    })
    .catch((error) => {
      console.log(error)
    });
}
*/