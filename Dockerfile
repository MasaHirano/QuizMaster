FROM node:10.2.1-alpine AS node
FROM ruby:2.5.1-alpine

ENV LANG C.UTF-8

# ----- Install dependency librarlies and rubygems for the project -----

ENV ROOT_PATH /app

RUN mkdir $ROOT_PATH
WORKDIR $ROOT_PATH
ADD Gemfile $ROOT_PATH/Gemfile
ADD Gemfile.lock $ROOT_PATH/Gemfile.lock

RUN apk update && \
    apk upgrade && \
    apk add --update --no-cache --virtual=.build-dependencies \
      build-base \
      libgcc \
      curl-dev \
      linux-headers \
      libxml2-dev \
      libxslt-dev \
      postgresql-dev \
      ruby-dev \
      yaml-dev \
      zlib-dev && \
    apk add --update --no-cache \
      bash \
      git \
      openssh \
      postgresql \
      ruby-json \
      tzdata \
      libstdc++ \
      yaml && \
    bundle install -j4 && \
    apk del .build-dependencies

ADD . $ROOT_PATH

# ----- Install node and yarn -----

# @see https://github.com/nodejs/docker-node/blob/bd74777e9e5c89685146d4963b6bb78970dd2133/10/alpine/Dockerfile#L48
ENV YARN_VERSION 1.7.0

RUN mkdir /opt
COPY --from=node /opt/yarn-v$YARN_VERSION/ /opt/yarn-v$YARN_VERSION/
COPY --from=node /usr/local/bin/node /usr/local/bin/
RUN ln -s /opt/yarn-v$YARN_VERSION/bin/yarn /usr/local/bin/yarn && \
    ln -s /opt/yarn-v$YARN_VERSION/bin/yarnpkg /usr/local/bin/yarnpkg && \
    yarn --cwd client install










# ------------------------------------------------------

# FROM node:10.2.1-alpine

# RUN apk update && \
#     apk upgrade && \
#     apk add --update --no-cache \
#       bash
