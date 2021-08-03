# Dashboard
## Structure
```
├── public 
│   ├── favicon.ico                 
│   └── index.html 
├── src             
│   ├── __mocks__
|   |   └── axios.js            
│   ├── assets
|   |   ├── image
│   │   └── css
|   |   |   └── index.scss                 
│   ├── components    
│   |   └── Example.vue            
|   |── config
|   |   ├── constants.js
|   |   ├── url.js
│   |   └── endpoint.js
|   |── lang
|   |   |── vi.json
│   |   └── en.json
|   |── layout
|   |   |  └── index.vue
|   |── router
|   |   |  └── index.js
|   |── services
|   |   |  └── user.js
|   |── store
|   |   ├──modules
|   |   |  └── data.js
|   |   |── getters.js
│   |   └── index.js
|   |── utils
|   |   |── filters.js
|   |   |── i18n.js
│   |   └── common.js
|   |── views
│   |   └── index.vue
|   |── App.vue
|   |── middleware.js
|   └── main.js
├── test 
│   └── unit               
|       ├── components
|       |   └── app.spec.js
|       ├── global-store
|       |   └── module.js
|       ├── layout
|       |   └── example.spec.js
|       ├── views
|       |   └── example.spec.js
|       ├── utils
|       |   └── filters.spec.js
|       ├── store
|       |   └── user.spec.js
|       ├── methods.js
|       ├── setup.js
|       └── stubs.js
├── .env.standalone
├── .gitignore
├── babel.config.json
├── jest.config.js
├── vue.config.js
└── package.json
```
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn start
```

### Compiles and minifies for production
```
yarn build
```
### Run your unit tests
```
yarn test
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
