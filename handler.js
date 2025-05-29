const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello Welcome to Lambda Serverless Functions. This function has two endpoints named: /getIPDetails?ip=<IP_ADDRESS> and /getNationality?name=<NAME>",
  });
});

app.get('/getIPDetails', async (req, res) => {
  try {
    const {ip} = req.query;
    const response = await fetch(`https://ipinfo.io/${ip}/geo`);
    const val = await response.json();
    res.status(200).json({IP_Data: val});
  } catch (err) {
    console.error('Route error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/getNationality', async (req, res) => {
  try {
    const {name} = req.query;
    const response = await fetch(`https://api.nationalize.io/?name=${name}`);
    const val = await response.json();
    res.status(200).json({nationality_data: val});
  } catch (err) {
    console.error('Route error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Endpoint Not Found",
  });
});

app.use((err, req, res, next) => {
  console.error("Error:", err); // This will show up in CloudWatch
  res.status(500).json({ error: "Internal Server Error" });
});

module.exports.handler = serverless(app);
