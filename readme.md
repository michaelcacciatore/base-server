# Base Node Server

The purpose of this is to provide seamless configuartion of a Node.js server. It is compatible with frameworks such as Express and Koa.

## Basic Usage

```js
const createServer = require('base-server');

const server = createServer();
```

### With frameworks

This is also compatible with popular frameworks such as Express and Koa.

#### Express

```js
const createServer = require('base-server');
const express = require('express');

const app = express();

const server = createServer(app);
```

#### Koa

```js
const createServer = require('base-server');
const Koa = require('koa');

const app = new Koa();

const server = createServer(app.callback());
```

## Configuration

### createServer(requestListener [, options][, logger][, protocol])

| Argument        | Type     | Description                                                                                                                                                                                                                                                                                                                                                                   |
| --------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| requestListener | Function | The request listener that will be used for every request that the server accepts. **Required.**                                                                                                                                                                                                                                                                               |
| options         | Object   | The options object to be provided to the server. If using `http` as the protocol, the options can be found [here.](https://nodejs.org/docs/latest-v12.x/api/http.html#http_http_createserver_options_requestlistener) If using `https`, the options can be found [here](https://nodejs.org/docs/latest-v12.x/api/https.html#https_https_createserver_options_requestlistener) |
| logger          | Object   | An instance of a logger. Defaults to the console object. Must have at least a `log` method available.                                                                                                                                                                                                                                                                         |
| protocol        | String   | Defines which protocol to be used. Options can be `http`, `http2`, or `https`. If `https`, you must define SSL information either in the options object or through environment variables.                                                                                                                                                                                     |

## Environemnt Variables

This receives a lot of it's configuration through the use of environment variables (or command line overrides).

| Export name | Environment variable name | Command Line Override(s) | Description                                                                                                                                                 |
| ----------- | ------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PORT        | `process.env.PORT`        | `--port` or `-p`         | Defines the port to start the server on                                                                                                                     |
| ENV         | `process.env.ENV`         | `--env`                  | Defines the contextual environment that server is being run in. Usually reserved for different internal environments such as development, qa, staging, etc. |
| NODE_ENV    | `process.env.ENV`         | `--nodeEnv`              | Defines the Node environment the server is being run in. Usually either `development` or `production` and is used for many 3rd party libraries              |
