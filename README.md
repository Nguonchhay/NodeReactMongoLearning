Welcome to Node + ReactJs + MongoDB
---

This is a sample repository for learning NodeJs, ReactJs and MongoDb

Environment
---

* Node >= 10.15.x

* NPM >= 6.x or Yarn >= 1.16.x

* MongoDB >= 3.6.x

Local set up

* Clone project from Github
```
git clone git@github.com:Nguonchhay/NodeReactMongoLearning.git node-reactjs-mongdo-learning
```

* Install dependencies for server `NodeJs`
```
cd server
yarn install
```

* Install depencies for client `ReactJs`
```
cd client
yarn install
```

* Configure server configuration
```
cd server
cp -a config/env.js.examle config/env.js
```
__Note__: update values in the file

* Start server application
```
cd server
yarn start
```

* Start client application
```
cd client
yarn start
```
