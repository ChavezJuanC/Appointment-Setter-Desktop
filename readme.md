# Appointment Setter Desktop

**Appointment Setter Desktop** is a project designed to showcase the integration of React with Electron, Express.js, and MongoDB. This application provides a functional desktop interface for managing appointments, leveraging modern web technologies to deliver a seamless user experience.

## Features

- **Desktop Application**: Built with Electron to create a native desktop experience.
- **React Frontend**: A responsive user interface developed using React.
- **Express Backend**: A RESTful API server created with Express.js.
- **MongoDB Integration**: Utilizes MongoDB for data storage, with Mongoose schemas for modeling the data.

## Project Setup

### Prerequisites

- Node.js version 14 or higher
- MongoDB version 4 or higher

### Installation

1. **Clone the Repository**

   Use the command `git clone` followed by the repository URL, then navigate into the cloned directory.

2. **Install Dependencies**

   - For the Backend (Express & Mongoose), go to the `appointment-setter-backend` directory and run `npm install`.
   - For the Frontend (React), go to the `appointment-setter-frontend` directory and run `npm install`.

3. **Configure MongoDB**

   Make sure MongoDB is running locally or configure it to connect to a remote MongoDB instance. Create a `.env` file in the `appointment-setter-backend` directory with the MongoDB URI.

4. **Run the Application**

   - Start the Backend Server by navigating to the `appointment-setter-backend` directory and running `npm start`.
   - Start the Electron App by navigating to the `appointment-setter-frontend` directory and running `npm start`.

## Folder Structure

- `appointment-setter-frontend/`: Contains the React frontend code and Electron configuration.
- `appointment-setter-backend/`: Contains the Express.js backend code and Mongoose schemas.

## How It Works

- **Frontend (React & Electron)**: Provides the user interface for interacting with the appointment system. Electron wraps the React app to deliver a desktop application experience.
- **Backend (Express & Mongoose)**: Handles API requests and manages data interactions. Mongoose schemas define the structure of the data stored in MongoDB.
- **MongoDB**: Stores appointment data and other relevant information. Mongoose is used for schema definition and data validation.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. Ensure that your contributions adhere to the existing code style.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- **React**: For building the user interface.
- **Electron**: For creating the desktop application.
- **Express.js**: For handling the server-side logic.
- **MongoDB & Mongoose**: For data storage and schema management.
