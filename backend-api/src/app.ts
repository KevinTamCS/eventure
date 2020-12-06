import express, { Express } from 'express';
import cors from 'cors';
import routes from './routes';
import { connectToDatabase } from './util';

const APP_PORT = process.env.PORT;

// Initialize Express and middleware
const app: Express = express();
app.use(express.json());
app.use(cors());

// Initialize routes
app.use(routes);

// Connect to the database, and start the app
export const startApp = async (): Promise<void> => {
  try {
    await connectToDatabase();

    app.listen(APP_PORT, () => {
      console.log(
        `✅ Eventure has successfully started! Listening for requests on http://localhost:${APP_PORT}.`
      );
    });
  } catch (error) {
    console.error('⚠️ An error occurred while starting the Eventure backend.');
    console.error(error);
  }
};

export default startApp;
