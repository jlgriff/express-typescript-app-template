# Introduction

This is a very simple template for quick-starting an Express microservice/application using Typescript.

# Installation

1. Run `npm install` to install the dependencies.

2. Rename the `.env.sample` file to `.env` to make a config file accessible.

3. Run `npm start` to start the application.

# Development Mode

1. Run `npm run dev` to start the application in live-updating development mode.

# Routes

There is only a single index route: `/`.

To hit that route, navigate to `http://localhost:80/` with a browser and verify an `OK` message is returned.

# Docker

1. Run `docker build -t template .` to build the image.

2. Run `docker run --rm --name template template` to run the container.