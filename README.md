# FireStarter
![GitHub repo size](https://img.shields.io/github/repo-size/retry2z/FireStarter)
![GitHub stars](https://img.shields.io/github/stars/retry2z/FireStarter?style=social)
![GitHub forks](https://img.shields.io/github/forks/retry2z/FireStarter?style=social)

## Description
Firestarter is an Angular PWA powered by Firebase. The application is about where logged users can create their own boards with tasks, only owned boards are showed and can be modified/ removed. User can drag n drop to set the order of the tasks and boards. Guests can preview server side rendered html and data. This application is inspired from Trello.  

![](https://firebasestorage.googleapis.com/v0/b/firestarter-dev-ebdf6.appspot.com/o/workplay-demo.gif?alt=media&token=2c3bbf9a-96b1-4ae3-a507-4d1c8ab2a20f)

## Features
- Angular 10 + Firebase
- Responsive UI
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

![](https://firebasestorage.googleapis.com/v0/b/firestarter-dev-ebdf6.appspot.com/o/config-demo.png?alt=media&token=3603ae9a-71ca-471a-a8f2-c3d7a65d36a7)

3.  Add the config to your Angular environment

#### src/environments/
Update the `environment.prod.ts` and `environment.ts` files. 

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: '...........',
    authDomain: '...........',
    databaseURL: '...........',
    projectId: '...........',
    storageBucket: '...........',
    messagingSenderId: '...........',
    appId: '...........',
  }
};
```

5.  Run `ng serve`
