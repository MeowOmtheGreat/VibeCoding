# Real Madrid Stats App

## Overview
The Real Madrid Stats App is a responsive web application that displays statistics for the top 15 players of Real Madrid. The application features a clean dashboard layout with player cards, a search bar, and sorting options, providing an intuitive user experience.

## Features
- **Player Statistics**: Displays detailed statistics for each player, including name, photo, position, jersey number, matches played, goals, assists, minutes played, and nationality.
- **Search Functionality**: Users can filter players by name using a search bar.
- **Sorting Options**: Players can be sorted based on goals, assists, or matches played.
- **Responsive Design**: The application is designed to work seamlessly on various screen sizes.

## Project Structure
```
real-madrid-stats-app
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Dashboard.js
│   │   ├── PlayerCard.js
│   │   ├── SearchBar.js
│   │   └── SortOptions.js
│   ├── data
│   │   └── players.js
│   ├── App.js
│   ├── index.js
│   └── styles
│       └── App.css
├── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd real-madrid-stats-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the application in development mode, run:
```
npm start
```
This will open the application in your default web browser at `http://localhost:3000`.

### Building for Production
To create a production build of the application, run:
```
npm run build
```
This will generate a `build` folder containing the optimized application.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.