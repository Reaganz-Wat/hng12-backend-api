# HNG12 Backend API

A simple REST API built with NestJS that returns basic information including email, current datetime, and GitHub repository URL.

## Overview

This API was developed as part of the HNG12 Internship Stage 0 task. It provides a single endpoint that returns specified user information in JSON format.

## Features

- Returns registered email address
- Provides current datetime in ISO 8601 format
- Returns GitHub repository URL
- Handles CORS
- Fast response time (< 500ms)

## Technologies Used

- NestJS (Node.js framework)
- TypeScript
- Node.js
- Jest (for testing)

## Live Demo

API Endpoint: `[Your deployed API URL here]`

## API Documentation

### Endpoint

```
GET /
```

### Response Format

```json
{
  "email": "reaganwatmon6@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/Reaganz-Wat/hng12-backend-api.git"
}
```

### Status Codes

- 200: Successful request
- 404: Not found
- 500: Server error

## Local Development Setup

1. Clone the repository:
```bash
git clone https://github.com/Reaganz-Wat/hng12-backend-api.git
```

2. Install dependencies:
```bash
cd hng12-backend-api
yarn install
```

3. Create a `.env` file in the root directory and add your configuration:
```env
PORT=3000
```

4. Run the development server:
```bash
yarn run start:dev
```

The API will be available at `http://localhost:3000`

## Testing

Run the test suite using:

```bash
yarn run test
```

## Project Structure

```
src/
├── main.ts                 # Application entry point
├── app.module.ts           # Root module
├── app.controller.ts       # Main controller
├── app.service.ts          # Business logic
└── app.controller.spec.ts  # Controller tests
```

## Deployment

This API is deployed on [Your Deployment Platform]. The deployment process involves:

1. Push changes to GitHub
2. Automatic deployment via [Your CI/CD Process]
3. Environment variables configuration on the deployment platform

## Related Resources

- [HNG Internship - Node.js Developers](https://hng.tech/hire/nodejs-developers)
- [NestJS Official Documentation](https://docs.nestjs.com/)

## Author

[Reagan Watmon]