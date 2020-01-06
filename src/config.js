export default {
    s3: {
      REGION: "us-west-2",
      BUCKET: "ligerx-notes-app-uploads"
    },
    apiGateway: {
      REGION: "us-west-2",
      URL: "https://wk711kn1xd.execute-api.us-west-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_xVqu88iUL",
      APP_CLIENT_ID: "2u5qlaomv82g6c1q44oleholi7",
      IDENTITY_POOL_ID: "us-west-2:88486173-ee98-41e1-a235-847f72473c9f"
    },
    MAX_ATTACHMENT_SIZE: 5000000,
};
