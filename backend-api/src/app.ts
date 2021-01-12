import fs from 'fs';
import http from 'http';
import https from 'https';
import express, { Express } from 'express';
import cors from 'cors';
import routes from './routes';
import { connectToDatabase } from './util';

const APP_PORT_HTTP = process.env.HTTP_PORT;
const APP_PORT_HTTPS = process.env.HTTPS_PORT;

// Enable SSL only if credentials were found
let httpsEnabled = false;
let credentials = {};

const sslPrivateKeyPath = `sslcert/${process.env.SSL_PRIVATE_KEY_NAME}`;
const sslCertPath = `sslcert/${process.env.SSL_CERT_NAME}`;
if (fs.existsSync(sslPrivateKeyPath) && fs.existsSync(sslCertPath)) {
  // Read credentials
  const sslPrivateKey = fs.readFileSync(sslPrivateKeyPath);
  const sslCert = fs.readFileSync(sslCertPath);
  credentials = {
    key: sslPrivateKey,
    cert: sslCert,
  };

  // Enable HTTPS
  httpsEnabled = true;
} else {
  console.warn('No SSL credentials found, starting without HTTPS support...');
}

// Initialize Express and middleware
const app: Express = express();
app.use(
  express.json({
    limit: '50mb',
  })
);
app.use(cors());

// Initialize routes
app.use(routes);

// Connect to the database, and start the app
export const startApp = async (): Promise<void> => {
  try {
    await connectToDatabase();

    const httpServer = http.createServer(app);
    httpServer.listen(APP_PORT_HTTP);

    if (httpsEnabled) {
      const httpsServer = https.createServer(credentials, app);
      httpsServer.listen(APP_PORT_HTTPS);
    }

    console.log(`✅ Eventure has successfully started!`);
    console.log(`Listening on port ${APP_PORT_HTTP} for HTTP.`);
    if (httpsEnabled) {
      console.log(`Listening on port ${APP_PORT_HTTPS} for HTTPS.`);
    }
  } catch (error) {
    console.error(
      '⚠️ An error occurred while starting the Eventure backend API.'
    );
    console.error(error);
  }
};

export default startApp;
