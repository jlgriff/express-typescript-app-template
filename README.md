# Introduction

This is a very simple template for quick-starting an Express microservice/application using Typescript.

# Installation

1. Run `npm install` to install the dependencies.
2. Run `npm run copy-env:local` to create a `.env` from `.env-local` if `.env` doesn't already exist.
3. Run `npm start` to start the application.

# Development Mode

1. Run `npm run dev` to start the application in live-updating development mode.

# Routes

| Route | Method | Roles | Response |
|-------|-------|-------|-------|
| `/` | GET | * | Returns `OK` if the application is running successfully |


# Docker

1. Run `docker build -t template-image .` to build the image.

2. Run `docker run --rm --name template template-image` to run the container.
