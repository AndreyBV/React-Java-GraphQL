// const process = require('process');
// const { GRAPHQL_PATH } = require('./config/graphQl');

// Конфиг для работы расширения Apollo GraphQL
// (автокомплит и хайлайтер для GraphQL файлов с запросами)

module.exports = {
  client: {
    service: {
      name: 'graphql-app',
      localSchemaFile: './src/core/graphql/schema/graphql.schema.json',
      url: 'http://localhost:8080/graphql',
    },
  },
};
