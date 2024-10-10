# blog-api

Project 1/20 in [this backend roadmap](https://roadmap.sh/backend/project-ideas) - a personal blog API! 

## Goals:
- I'd like to learn some new technologies.
- For backend: [Fastify](https://fastify.dev/), [Redis](https://redis.io/) for caching
- Deployment: https://render.com/ (if I add a frontend component)
- I do not think this app will require load balancing, but in a future project, I'd like to try working with pm2

## How to use:
- It's been setup with Docker so that firing up the app is easy peasy
- Clone the repo
- Inside the `backend` folder, create a `.env` file
- Insert the following values into your .env file:

`POSTGRES_USER=<some_value>` \
`POSTGRES_PASSWORD=<some_value>` \
`POSTGRES_DB=<some_value>` \
`DATABASE_HOST=<some_value>` \
`DATABASE_PORT=<some_value>` \
`DATABASE_USER=<some_value>` \
`DATABASE_PASSWORD=<some_value>` \
`DATABASE_NAME=<some_value>` 

Substitute <some_value> with whatever values you would like.

- In a terminal, run `docker build -t blog-api .`. This builds the container
- In a separate terminal, run `docker run -p 8080:8080 blog-api`
- Now, if you navigate to `localhost:8080` in your browser, you should see the API response

## Stop container:
- Run `docker ps` to see currently running containers
- Get the docker process ID for blog-api
- Run `docker stop <id>` to stop the container

### Eventually:
- Once I've setup docker-compose.yml, should only need to run `docker-compose up --build`
