const pinoHttp = require("pino-http");
const { nanoid } = require("nanoid");

const level = process.env.LOG_LEVEL || "info"; // use LOG_LEVEL to set the log level of the logger or set it as 'info' as default

const logger = pinoHttp({
  genReqId: (request) => request.headers['x-request-id'] || nanoid(),
  level
});

module.exports = logger;