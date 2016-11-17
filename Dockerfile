FROM node:latest
MAINTAINER Kyle Harrison <kyle90adam@hotmail.com>

# Set in what directory commands will run
WORKDIR /src

# Put all our code inside that directory that lives in the container
ADD . /src

# Install dependencies
RUN \
    npm install -g bower && \
    npm install && \
    bower install --config.interactive=false --allow-root

# Tell Docker we are going to use this port
EXPOSE 8000

# The command to run our app when the container is run
CMD ["npm", "start"]