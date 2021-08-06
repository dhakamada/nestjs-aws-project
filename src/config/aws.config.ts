export default () => ({
  aws: {
    region: process.env.AWS_REGION || 'us-east-1',
    sns: {
      endpoint: process.env.AWS_SNS_ENDPOINT,
      topicExample: process.env.AWS_SNS_TOPIC_EXAMPLE,
    },
    port: process.env.AWS_PORT,
  },
});
