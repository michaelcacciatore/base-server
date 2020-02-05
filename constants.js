const getArg = require('./utils/getArg');

/**
 * The port the application server will bind to
 */
const PORT = process.env.PORT || getArg('port') || getArg('p') || 3000;

/**
 * The environment the program is running in
 */
const ENV = process.env.ENV || getArg('env') || 'local';

/**
 * The Node.js environment the program is running in
 */
const NODE_ENV = process.env.NODE_ENV || getArg('nodeEnv') || 'development';

module.exports = {
  ENV,
  NODE_ENV,
  PORT,
};
