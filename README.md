# Build and Integrate a Climate Scenario Data API

## Overview
This project involves creating a RESTful API using Python and Node.js to serve climate projection data from a static JSON file. This API will later be expanded during the live interview session to integrate with a React application.

## Part 1: Take Home Interview Task - Build a Climate Scenario Data API

### Requirements
- **Python**: Use Python for backend data processing tasks to clean, aggregate, and prepare climate data.
- **Node.js and Express**: Utilize Node.js and Express to create and serve the API.
- The API should handle requests to retrieve data and support filtering by `year` and `scenario`.
- Your `year` values can be 2020, 2025, 2030, 2035, 2040, 2045, 2050, 2060, 2070, 2080, 2090, 2100.
- Your `scenario` values can be of RCP (2.6, 4.5, 6.0, 8.5) or SSP (1, 2, 3, 4, 5) type.

### Development Environment
- This project uses GitHub Codespaces which provides a pre-configured development environment.
- Ensure Python and Node.js environments are correctly configured in your Codespace.

### Python Backend Tasks
Please ensure that your backend data processing code in `app.py` provides at least one functionality from each section below:

1. **Data Preprocessing and Cleaning**:
   - Normalize temperature units where necessary.
   - Fill missing precipitation values using interpolation or average values.
   - Standardize date formats across the dataset.

2. **Data Aggregation and Summarization**:
   - Calculate and store annual averages or totals for temperature and precipitation for each scenario.
   - Results should be stored in a manner that is easily accessible by the Node.js API.

3. **Advanced Data Queries**:
   - Develop Python functions to handle complex data queries which are then exposed to the Node.js API for easier access.

### Getting Started
1. Start your Codespace from the main repository page.
2. Install necessary dependencies:
   ```bash
   npm install
   ```
3. Start the server to ensure everything is set up correctly:
`npm start`

### API Endpoints

- `GET /data`: Retrieves all climate data.
- `GET /data?year=2050`: Retrieves data for a specific year.
- `GET /data?scenario=RCP2.6`: Retrieves data for a specific scenario path.

### Data Format
Store your climate data in data.json with the following structure:

```
[
  {
    "year": 2050,
    "scenario": "RCP2.6",
    "temperature": 2.5,
    "precipitation": 15
  },
  {
    "year": 2080,
    "scenario": "SSP3",
    "temperature": 4.0,
    "precipitation": 20
  }
]
```

### Submission
Commit your work to your Codespace. Ensure your final submission is pushed before the interview date. Ensure your API is functional and meets the specified requirements.

### Evaluation Criteria
- Functionality: Does the API meet the specified requirements?
- Code Quality: Is the code well-organised and documented?
- Error Handling: Does the API gracefully handle different error scenarios?

## Part 2: Live Interview Task - Integrate API with React Application

### Task Overview
During the live interview, you will be provided with a mini React application that displays climate data. Your task is to modify your API (developed in Part 1) to ensure it can serve data effectively to this React application.

### React Application Features
The provided React application includes components to display climate data:
- A list view to show all entries.
- Filters to refine data by year and scenario.

### Environment Setup and Code Management
- **Fork the Repository**: If not already done in Part 1, fork the main repository to create a separate copy under your GitHub account.
- **Clone Your Fork**: Clone the fork to your local machine or continue working within your existing GitHub Codespace.
- **Create a New Branch**: Before starting Part 2, create a new branch from the `react-integration` branch to isolate your changes for this specific task.
- **Switch to the New Branch**: Ensure you are working in the new branch you created for Part 2.

### Development and Integration Instructions
- **Run the React Application**: Start the React application to understand its current functionality and structure.
- **API Modifications**: Adjust your API to handle additional requests from the React application, ensuring dynamic data retrieval based on user inputs.
- **Integration Testing**: Test the integration thoroughly to ensure that the React app functions correctly with your API changes, particularly focusing on the filter functionalities.

### Submission Process
- **Commit Regularly**: As you make changes, commit them to your branch to ensure you have versions of your code saved.
- **Push to GitHub**: At the end of the live coding session, push all your commits to your branch on GitHub.
- **Notify Interviewers**: Once you've pushed your final changes, notify the interviewers that your submission is complete.

### Evaluation Criteria
- **Functionality**: Does the integrated system meet the specified functional requirements?
- **Code Quality**: Is the integration code well-structured, efficient, and clean?
- **Problem Solving**: How effectively were integration challenges handled?
- **Communication**: Were the changes and logic clearly communicated during the live session?

This structured approach ensures a comprehensive evaluation of your full-stack capabilities, combining coding, practical application, and problem-solving in a live setting.
