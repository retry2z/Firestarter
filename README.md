# FireStarter
![GitHub repo size](https://img.shields.io/github/repo-size/retry2z/FireStarter)
![GitHub stars](https://img.shields.io/github/stars/retry2z/FireStarter?style=social)
![GitHub forks](https://img.shields.io/github/forks/retry2z/FireStarter?style=social)

## Description
Firestarter is an Angular PWA powered by Firebase.

![](https://firebasestorage.googleapis.com/v0/b/angular-voxer.appspot.com/o/demo-gif.gif?alt=media&token=dadcdb72-eb58-4903-b6b8-c741c27a08c4)

## Features
- Angular 10 + Firebase
- Installable PWA
- OAuth and Email/Password Signup with Firebase
- Drag & drop Kanban demo with Firestore
- Angular Universal SSR with Nest.js deployed to Google Cloud Run
- Optional SSR Prerendering Script

## Usage
1.  Run

- `git clone https://github.com/retry2z/Firestarter.git firestarter`
- `cd firestarter`
- `npm install`

2.  Create a project at https://firebase.google.com/ and grab your web config:

![](https://firebasestorage.googleapis.com/v0/b/firestarter-96e46.appspot.com/o/project-config.PNG?alt=media&token=5eabb205-7ba2-4fc3-905f-e9547055e754)

3.  Add the config to your Angular environment

#### src/environments/
Update the `environment.prod.ts` and `environment.ts` files. 

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: 'APIKEY',
    authDomain: 'DEV-APP.firebaseapp.com',
    databaseURL: 'https://DEV-APP.firebaseio.com',
    projectId: 'DEV-APP',
    storageBucket: 'DEV-APP.appspot.com',
    messagingSenderId: '...',
    appId: '...',
  }
};
```

5.  Run `ng serve`
