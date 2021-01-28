# Sequelize Passport Example

Use this as a starter for Project 2. Includes configuration for Travis CI, and ESLint. Provides a example login, signup and user pages which should be replaced with implementation for your app. Be sure to read the instructions below for deployment on Heroku and running the app locally.

## Deployment

This app is configured for using GitHub with Travis CI for version control and CI. The project is ready for deployment on Heroku. A JawsDB instance must be provisioned for the Heroku app.

Add a `SERVER_SECRET` to the Heroku config for the app. (See [Configuration and Config Vars](https://devcenter.heroku.com/articles/config-vars) to learn how.)

## Running Locally

- Update username, password, and database fields in `/config/config.json` for local MySQL server connection.
- Create a `.env` file in the root folder of the project. The file must include the following:
  ```
  SERVER_SECRET = <your_secret_for_session_signing>
  ```
- Run `npm run watch` to start development server using nodemon.
