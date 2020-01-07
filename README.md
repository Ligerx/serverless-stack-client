# Serverless Notes App API

__[Scratch](https://ligerx-serverless-notes-app.netlify.com/) is a note taking app built with full-stack serverless technology.__

This repo is for the React app front-end. The serverless API repo is located [here](https://github.com/Ligerx/serverless-stack-api).

#### Tech Stack

![Serverless Diagram](./serverless-diagram.png)

_Diagram taken from the [AWS site](https://aws.amazon.com/getting-started/projects/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/)_

##### AWS Services
- __Lambda & API Gateway__ for the serverless API
- __DynamoDB__ for the database
- __Cognito__ for user authentication and securing the APIs
- __S3__ for file uploads

##### Other Tech
- __React.js__ for the single page app
- __Stripe__ for processing credit card payments
- __Seed__ for automating Serverless deployments
- __Netlify__ for automating React deployments

---

#### Usage

This project is created using [Create React App](https://github.com/facebookincubator/create-react-app).

To use this repo locally, start by cloning it and installing the NPM packages.

``` bash
$ git clone https://github.com/Ligerx/serverless-stack-client.git
$ npm install
```

Run it locally.

``` bash
$ npm run start
```

---

This project was built following the [Serverless Stack guide](https://serverless-stack.com/).
