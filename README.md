# Random U

> This project has two sections Home and Contact, the first one gives you a list of users, the second is a basic form.

> I use the [Random Users API](https://randomuser.me/) to take the users data.

> To make clean code I use eslint with prettier for the js and jsx. For the styles I use stylelint.

## Dependencies

- React
- React-dom
- React-router-dom
- React-redux
- Redux
- Redux-saga
- Prop-types

## Start running (docker)
``` bash
# build image
docker image build . -t randomu

# run container in port 80
docker container run -d -p 80:3000 randomu

# run container with volume for development
docker container run -d -p 80:3000 -v $(pwd)/src:/home/node/randomu/src randomu
```


## Start running (local)

``` bash
# install dependencies
npm i

# serve with hot reload at localhost:9000
npm start
```

## Build Setup

``` bash
# install dependencies
npm i

# build for production
npm run build
```

## Run tests
``` bash
# install dependencies
npm i

# execute all tests once
npm test

# watch all tests and show coverage
npm run test:watch

# open navigator with coverage
npm run coverage:open:mac
npm run coverage:open:linux
```

### Notes
Dev enviroment:

- VsCode
- Node 10.6.0
- Npm 6.1.0
