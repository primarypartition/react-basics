# Create React App

> https://github.com/facebook/create-react-app

> npm install create-react-app -g

> create-react-app my-app --scripts-version 1.1.5 

> cd my-app

> npm start


# Style Libs

> npm install --save radium 

> npm install --save styled-components
 
> npm run eject

> config:
```
modules: true,
localIdentName: '[name]__[local]__[hash:base64:5]'
```

> npm install --save prop-types

> npm install --save axios

> npm install --save react-router-dom


# Redux Dev Tools

> https://github.com/reduxjs/redux-devtools


# Firebase Auth

> https://firebase.google.com/docs/reference/rest/auth

> Rules

```
{
  "rules": {
    "ingredients": {
      ".read": true,
      ".write": true
    },
    "orders": {
      ".read": "auth.uid != null",
      ".write": "auth.uid != null",
      ".indexOn": "userId"
    }    
  }
}
```


# Test

> npm install --save react-test-renderer enzyme-adapter-react-16 enzyme

> npm test

> https://jestjs.io/

> https://enzymejs.github.io/enzyme/


# Deployment

> npm run build

> npm install -g firebase-tools

