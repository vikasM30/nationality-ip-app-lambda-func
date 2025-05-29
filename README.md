
# About Nationality-IP App

This app helps you with two functionalities: 

You can enter your name and get to know what is the probability of your name to belong to different countries in the world.
Endpoint: 
```
/getNationality?name=<YOUR_NAME>
```
You can enter your ip address and get to know IP Details.
Endpoint:
```
/getIPDetails?ip=<IP_ADDRESS>
```

## Usage

### Deployment

Install dependencies with:

```
npm install
```

and then deploy with:

```
serverless deploy
```
OR
```
sls deploy
```


After running deploy, you should see output similar to:

```
Deploying "<SERVICE>" to stage "dev" (us-east-1)

✔ Service deployed to stack aws-node-express-api-dev (96s)

endpoint: ANY - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com
functions:
  api: aws-node-express-api-dev-api (2.3 kB)
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [`httpApi` event docs](https://www.serverless.com/framework/docs/providers/aws/events/http-api/).

### Invocation

After successful deployment, you can call the created application via HTTP:

```
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
```

Which should result in the following response:

```json
{ "message": "Hello Welcome to Lambda Serverless Functions. This function has two endpoints named: /getIPDetails?ip=<IP_ADDRESS> and /getNationality?name=<John>"}
```

### Local development

The easiest way to develop and test your function is to use the `dev` command:

```
serverless dev
```

This will start a local emulator of AWS Lambda and tunnel your requests to and from AWS Lambda, allowing you to interact with your function as if it were running in the cloud.

Now you can invoke the function as before, but this time the function will be executed locally. Now you can develop your function locally, invoke it, and see the results immediately without having to re-deploy.

When you are done developing, don't forget to run `serverless deploy` to deploy the function to the cloud.
