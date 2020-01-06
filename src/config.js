// Use an environment variable called REACT_APP_STAGE. This variable
// will take the values dev and prod. And by default it is set to dev.
// Now we can rewrite our config with this.
const dev = {
  STRIPE_KEY: "pk_test_vzBXUH65bZTiDtH0FZAbqAMw00hbCQ9ByO",
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-13ms9vo7y0hk9"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://s3l7lgj853.execute-api.us-west-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_KwQsYyF1F",
    APP_CLIENT_ID: "4mkgq0l2c3j9jjc106outkk7v8",
    IDENTITY_POOL_ID: "us-west-2:1bdfe413-84b9-40b0-be2c-dec8435b63e7"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_vzBXUH65bZTiDtH0FZAbqAMw00hbCQ9ByO",
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-df3m8xooyfqr"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://taqk2e7k2b.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_OLKIdkN9E",
    APP_CLIENT_ID: "7gvgeqqpg0qtardqjn2l5dq49s",
    IDENTITY_POOL_ID: "us-west-2:02dab95d-fc7b-4e69-94e5-e7a3fcf1cc4c"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
