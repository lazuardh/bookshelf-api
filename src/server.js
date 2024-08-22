const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: "localhost",
  });

  server.route(routes, {
    cors: {
      origin: ['*'],
    }
  });

  await server.start();
  console.log(`Server run in ${server.info.uri}`);
};

init();
