 # Task Manager

This Task manager will help you to keep you on track and to follow your daily routine. You can add your daily tasks and take notes for different things, also you can remove them once
you're done with your goal.

## Features

- **User**: User can create, get , get all , update, and delete.

## Built With:

- JavaScript
- Node
- Express
- dotenv
- mongoose
- nodemon
- cookie-parser
- helmet
- express-rate-limit

## Installation

- clone the repository

```sh
git clone git@github.com:olawuwo-abideen/task-manager.git
```

- navigate to the folder

```sh
cd task-manager.git
```

## Run the app in development mode

Open a terminal window session, or the equivalent on your machine, and enter the following command to install all the
Node modules needed to run the app:

```sh
npm install
```

After doing an `npm install` enter the following `npm start` command:

```sh

npm start

```

Set up the environment variables:

Create the .env file and setup the MongoDB URL.

The server will start running on the specified port (default: 3000) and establish a connection to the MongoDB database.

This will start the app and set it up to listen for incoming connections on port 3000. Open up your browser of choice
and go to the url

```sh

http://localhost:3000

```

to start using the app.

## API Endpoints

The following API endpoints are available:

- BaseUrl https://localhost:3000/

- `GET /api/v1/tasks` - Get all task
- `GET /api/v1/tasks/:id` - Get a task
- `POST /api/v1/tasks` - Create a task
- `PATCH /api/v1/tasks` - Update a task
- `DELETE /api/v1/tasks` - Delete a task

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/olawuwo-abideen/task-manager/issues).

## Authors

👤 **Olawuwo Abideen**

- GitHub: [@Olawuwo Abideen](https://github.com/olawuwo-abideen)
- Twitter: [@Olawuwo Abideen](https://twitter.com/olawuwo_abideen)
- LinkedIn: [@Olawuwo Abideen](https://www.linkedin.com/in/olawuwo-abideen/)
