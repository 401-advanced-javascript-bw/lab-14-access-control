# ![CF](http://i.imgur.com/7v5ASc8.png) LAB

## lab-14-ACL

### Author: Bonnie Wang

### Links and Resources

- [submission PR](http://xyz.com)
- [travis](http://xyz.com)

### Modules

#### `middleware.js`

##### authenticate user/token

#### `router.js -> router`

#### `router2.js -> router for user capabilities`

#### `users-model.js -> generate key/token, compare passwords`

#### `google.js -> google OAuth`

### Setup

#### `.env` requirements

- `PORT` - Port Number
- `MONGODB_URI` - URL to the running mongo instance/db

#### Running the app

- `npm i`
- `npm start`
- Endpoint: `/singin/`
  - sings in user.
- Endpoint: `/oauth/`
  - verify user
- Endpoints for capabilities: `/protected-route, /public-stuff, /hidden-stuff, /something-to-read, /create-a-thing, /update, /jp, /bye-bye, /everything`
