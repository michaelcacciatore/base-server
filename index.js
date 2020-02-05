const http = require('http');
const http2 = require('http2');
const https = require('https');
const { PORT, ENV } = require('./constants');

const protocols = {
  http,
  http2,
  https,
};

const DEFAULT_PROTOCOL = ENV === 'local' ? 'http' : 'https';

const createServer = (requestListener, options, logger = console, protocol = DEFAULT_PROTOCOL) => {
  const serverArgs = [options, requestListener];

  const serverProtocol = protocols[protocol];

  if (!serverProtocol) {
    throw new Error(
      `Unkown protocol '${protocol}' provided to createServer.  Please use either 'http', 'http2', or 'https'`,
    );
  }

  const server = serverProtocol.createServer(...serverArgs);

  server.listen(PORT);

  if (logger.log && typeof logger.log === 'function') {
    logger.log(`Server is now running on port ${PORT}`);
  }

  return server;
};

module.exports = createServer;
