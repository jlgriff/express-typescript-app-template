# Introduction

This is a simple template for quick-starting an Express microservice/application using Typescript. The goal here is to have an extremely clean template from which to start projects, meaning no warnings, no vulnerabilities, no old versions, etc.

To keep it easily extensible, the only functionality that this project starts with is an index API and an accompanying test. This endpoint is documented below.

This project also aims for as functional of a style as possible, so all of the written code is implemented via exported functions rather than classes.

# Installation

1. Run `npm install` to install the dependencies.
2. Run `npm run copy-env:local` to create a `.env` from `.env-local` if `.env` doesn't already exist.
3. Run `npm start` to start the application.

# Development Mode

1. Run `npm run dev` to start the application in live-updating development mode.

# Routes

| Route | Method | Response |
|-------|-------|-------|
| `/` | GET | Returns `OK` if the application is running successfully |

# Testing

Run `npm run test` to run tests.

# Docker

1. Run `docker build -t template-image .` to build the image.

2. Run `docker run --rm --name template template-image` to run the container.
