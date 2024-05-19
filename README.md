## Description

For this project NestJs framework and ORM Sequelize were used.

Swagger - API documentation. Can be accessed at `api/documentation`

Currency rates - API of National Bank of Ukraine

## Notes

.env is used for running app locally (with containerized database)
.env.dev is used for building and running both app and db in containers

#### Bootstrap project using Docker Compose

- To build (rebuild) `docker-compose --env-file=.env.dev up -d --build`
- To start without building `docker-compose --env-file=.env.dev up -d`
- To stop `docker-compose --env-file=.env.dev down`

#### Bootstrap project locally with containerized or local database

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
