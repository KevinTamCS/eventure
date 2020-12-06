import sequelize from './sequelize';

export const connectToDatabase = async (): Promise<void> => {
  // Connect to database
  console.log(`Connecting to database at ${process.env.DB_HOST}...`);
  await sequelize
    .authenticate()
    .then(async () => {
      console.log(
        `Successfully connected to the database at ${
          process.env.DB_HOST + ':' + process.env.DB_PORT
        }. Syncing...`
      );

      // Sync database
      await sequelize.sync().then(() => {
        console.log('Database sync successful.');
        console.log('Database connection complete.');
      });
    })
    .catch((error) => {
      console.error(`Failed to connect to database: ${error}`);
    });
};
