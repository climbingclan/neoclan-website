# neoClan Website

This repository contains the source code for the neoClan website, which is deployed at [http://neoclan.climbingclan.com](http://neoclan.climbingclan.com). neoClan is a modern attendance management and check-in system designed for real-time tracking and management of events.

## Overview

The website is built using React, a popular JavaScript library for building user interfaces. The project structure is organized to facilitate easy navigation and maintenance. Key directories and files include:

- `src/App.js`: The main application component that handles routing and layout.
- `src/pages/`: Contains individual page components such as `Contribute.js`, `Download.js`, `Features.js`, and `neoClan.js`.
- `src/index.js`: The entry point of the application where the root component is rendered.
- `public/`: Static files including images, icons, and the main HTML template.

## Detailed Code Overview

### `src/App.js`

This file defines the main application component. It uses React Router for navigation and includes a container for the main content. The `App` component manages the current location state and handles tab changes.

### `src/pages/`

- **Contribute.js**: Provides information on how to contribute to the project.
- **Download.js**: Guides users on how to download and install neoClan.
- **Features.js**: Highlights the main features of neoClan.
- **neoClan.js**: The main landing page with a header, hero image, and introductory text.

### `src/index.js`

This is the entry point of the application where the `App` component is rendered into the DOM.

### `public/`

Contains static assets such as images, icons, and the main HTML template (`index.html`).

## Components

### Header

The `Header` component is located in `src/components/Header.js`. It includes navigation tabs that allow users to switch between different sections of the application. The `Header` component uses the `Tabs` component from Mantine to manage the navigation state.

### Footer

The `Footer` component is located in `src/components/Footer.js`. It typically contains links to important sections of the website, such as the home page, features, download, and contribute pages. The `Footer` component uses the `Group` component from Mantine to organize the links and provide spacing between them.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tdobson/neoClan.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd neoClan
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

## Available Scripts

In the project directory, you can run the following scripts:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload if you make edits.

### `npm test`

Launches the test runner in interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

## Detailed Code Overview

### `src/App.js`

This file defines the main application component. It uses React Router for navigation and includes a container for the main content. The `App` component manages the current location state and handles tab changes.

### `src/pages/`

- **Contribute.js**: Provides information on how to contribute to the project.
- **Download.js**: Guides users on how to download and install neoClan.
- **Features.js**: Highlights the main features of neoClan.
- **neoClan.js**: The main landing page with a header, hero image, and introductory text.

### `src/index.js`

This is the entry point of the application where the `App` component is rendered into the DOM.

### `public/`

Contains static assets such as images, icons, and the main HTML template (`index.html`).

## Deployment

For deployment instructions, refer to the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment).
