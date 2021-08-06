<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

### NestJS AWS

> It's a Nestjs project integrating with AWS SNS

#### Usage

##### **AWS local**

If you don't have aws infrastructure, you can use [localstack](https://github.com/localstack/localstack)

##### **env**
Configure AWS environment variables in env directory

```
AWS_SNS_ENDPOINT
AWS_SNS_TOPIC_EXAMPLE
AWS_REGION
```

##### **Run project**

```bash
$ yarn
$ yarn start:dev
```

If you open http://localhost:3000/health, it's going to send a random message to topic configured.
