# syntax=docker/dockerfile:1

FROM node:18-alpine AS base

WORKDIR /app

COPY [ "package.json", "yarn.lock*", "./" ]

FROM base AS dev
ENV NODE_ENV=dev
RUN yarn install 
COPY . .
CMD [ "yarn", "start:dev" ]

FROM dev AS test
ENV NODE_ENV=test
CMD [ "yarn", "test" ]

FROM test AS test-cov
CMD [ "yarn", "test:cov" ]

FROM test AS test-watch
ENV GIT_WORK_TREE=/app GIT_DIR=/app/.git
RUN apk add git
CMD [ "yarn", "test:watch" ]

FROM base AS prod
ENV NODE_ENV=production
RUN yarn install --production
COPY . .
RUN yarn global add @nestjs/cli
RUN yarn build
CMD [ "yarn", "start:prod" ]