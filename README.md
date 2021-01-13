# Eventure

Eventure is a full-stack event discovery app for hosting and finding virtual events. Built with TypeScript using React, Redux, Bootstrap, Express, Node.js, and PostgreSQL and deployed on Docker containers on AWS EC2 via ECS.

See it live: [https://eventure.kevintamcs.com](https://eventure.kevintamcs.com)

![A screenshot of Eventure](eventure-screenshot.png)

## Getting Started

The Eventure monorepo consists of the frontend and backend in their respective directories.

### Prerequisites

Eventure requires Node.js to run. You will also need to have an SQL database installed to use most of the features on the backend. Eventure is designed to work with PostgreSQL, but should be compatible with other SQL dialects. Please see [the Sequelize documentation](https://sequelize.org/master/manual/dialect-specific-things.html) for more information about using other SQL dialects. 

- [Node.js (14.15.4 LTS recommended)](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

### Running the Frontend
1. Navigate into the `frontend` directory.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm start` to start the development server.
4. The frontend is now running on [http://localhost:3000](http://localhost:3000).

By default, Eventure uses the production backend API hosted on [https://api.eventure.kevintamcs.com](https://api.eventure.kevintamcs.com). To change this, swap the value of `API_ROOT` under `src/index.tsx` to your desired backend location.

### Running the Backend
1. Navigate into the `backend` directory.
2. Run `npm install` to install the necessary dependencies.
3. Set the following environment variables:
   
    #### Express
    - **HTTP_PORT –** The port to use for HTTP connections to the backend.
    - **HTTPS_PORT –** The port to use for HTTP connections to the backend.
    
    #### Database
    - **DB_DIALECT –** The dialect for Sequelize to use. Refer to [the Sequelize documentation](https://sequelize.org/master/manual/dialect-specific-things.html) for valid dialects.
    - **DB_HOST –** The host of the database to connect to.
    - **DB_PORT –** The port of the database to connect to.
    - **DB_DATABASE –** The database to use. 
    - **DB_USER –** The database user to use.
    - **DB_PASSWORD –** The password for the database user.
    
    #### SSL Credentials (Optional)
   To enable SSL and HTTPS, create a new directory named `sslcert` in the `/backend` directory and place your signed key and certificate in the directory. [See this Stack Overflow answer](https://stackoverflow.com/a/52007971) for more information on generating these credentials. Specify their file names in the following environment variables:
    - **SSL_PRIVATE_KEY_NAME –** The file name of the private key to use.
    - **SSL_CERT_NAME –** The file name of the SSL certificate to use.

4. Run `npm run develop` to start the development server.
5. The backend is now running on `http://localhost:<HTTP_PORT>` and `https://localhost:<HTTPS_PORT>` (if HTTPS was enabled), where `<HTTP_PORT>` and `<HTTPS_PORT>` are the values set in the environment variables above.

## License

Eventure is licensed under the [MIT](LICENSE) License.