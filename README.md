# devops-devkit

This project is aimed to help dev work for devops member, and can be used as a dev template.
It consists of frontend and backend framework.


Dev Stacks:

* React
* Node.js
* Nginx
* Docker
* MySQL

## Prerequisites

To use react frontend and nodejs backend API server, node & npm is needed

### Install node and npm

Install nvm:

```
sudo apt-get install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash

command nvm -v

nvm ls

```

Install Node:

```
nvm install node --lts
```

Check Nodejs and Npm:

```
node -v

npm -v
```


## Frontend

React is a JavaScript library for building user interfaces

### Create React app

You’ll need to have Node >= 8.10 and npm >= 5.6 on your machine. To create a project, run:

```
npx create-react-app frontend
cd frontend
npm start
```

## Backend

As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.
Normally Node.js is used as Backend API Server.

## Create Express

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

```
mkdir backend
cd backend

npx express-generator --view=pug
```





