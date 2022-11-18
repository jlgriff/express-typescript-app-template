# Contents

1. [Introduction](#introduction)
2. [Start](#start)
   1. [Running locally](#running-locally)
   2. [Running in the cloud](#running-in-the-cloud)
   3. [Running in development mode](#running-in-development-mode)
3. [Tests](#tests)
4. [Routes](#routes)
5. [Docker](#docker)

# Introduction

This is a simple template for quick-starting an Express microservice/application using Typescript. The goal here is to have a clean starting template with no warnings, no vulnerable dependencies, etc.

To keep it easily extensible, the only functionality that this project starts with is an index API and an accompanying test. This endpoint is documented below.

# Start

### Running locally

To get this application running locally:

1. Run `npm install` to install the dependencies.
2. Run `npm run copy-env:local` to create a `.env` from `.env-local` if `.env` doesn't already exist.
3. Start up a PostgreSQL database on port 5432.
4. Run `npm start` to start the application.

### Running in the cloud

To get this application running in production:

1. Run `npm install` to install the dependencies.
2. Ensure an appropriate `.env` file is bundled and is correctly configured for the cloud.
3. Run `npm start` to start the application.

### Running in development mode

1. Run `npm run dev` to start the application in live-updating development mode.

# Tests

Run `npm test` to run tests.

# Routes

| Route | Method | Response                                                |
| ----- | ------ | ------------------------------------------------------- |
| `/`   | GET    | Returns `OK` if the application is running successfully |

# Docker

1. Run `docker build -t template-image .` to build the image.

2. Run `docker run --rm --name template template-image` to run the container.
