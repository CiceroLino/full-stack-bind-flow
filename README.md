# Project Full Stack

## Description

This is a simple [Nest](https://github.com/nestjs/nest) REST application from scratch.

## Technologies Used

- [Docker](https://www.docker.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)
- [MySql]()
- [VueJS]()
- [Kafka]()

## Requirements

- [NVM](https://github.com/nvm-sh/nvm) (optional)
- Installed Docker
- Installed Node.js and yarn
- Installed RabbitMQ

## Installation

1. Select the node version of the project: `nvm use`
2. Install the dependencies: `yarn`
3. If you choose to use docker to run the whole project, just use the script: `yarn services:up`
4. If not, just configure the env file as follows the env.development template and run `yarn start:dev`

## Usage

1. The backend server will be available at: `http://localhost:3000` for development

## API Resources

You can use an http client to send requests to this application, such as _Insomnia_, _Postman_

## Endpoints

1. POST /api/products
2. GET /api/products/{userId}
3. GET /api/products/{userId}/avatar
4. DELETE /api/user/{userId}/avatar

## Testing

1. Run the automated tests: `npm run test`
