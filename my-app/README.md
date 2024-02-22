# Phonebook in Container

The Phonebook application is a full-stack project structured to facilitate both development and production environments using Docker containers. This setup ensures that the application can be run consistently across different machines without requiring manual environment configuration.

## Application Overview
The Phonebook application allows users to store, retrieve, update, and delete contact information. It features a React frontend and a Node.js backend, with data persistence provided by MongoDB.

- Frontend: A user-friendly interface for interacting with the phonebook.
- Backend: RESTful APIs for handling CRUD operations on the contacts.
- Database: Contacts are stored in a MongoDB database, facilitating easy management and scalability.

## Repository Structure

The repository is organized as follows, supporting both containerized development and production environments:
```
phonebook-in-container
├── frontend
│   ├── src/
│   ...
│   ├── dev.Dockerfile       # Development Dockerfile for the frontend
│   └── Dockerfile           # Production Dockerfile for the frontend
├── backend
│   ├── index.js
│   ...
│   ├── dev.Dockerfile       # Development Dockerfile for the backend
│   └── Dockerfile           # Production Dockerfile for the backend
├── docker-compose.dev.yml   # Docker Compose for setting up the development environment
└── docker-compose.yml       # Docker Compose for setting up the production environment

```
# Running the Application
## Development Environment
To set up and run the development environment:
### 1. Build the backend image
```
cd backend
docker build -t phonebook-backend-dev -f dev.Dockerfile .  
```
### 2. Build the frontend image
```
cd frontend
docker build -t phonebook-frontend-dev -f dev.Dockerfile .  
```

### 3. Run with Docker Compose, at the root run:
```
docker compose -f docker-compose.dev.yml up -d
```
### 4. Accessing the Application:
 - Frontend: visit `http://localhost:8080` for frontend development.
 - Backend: API endpoints can be accessed at `http://localhost:8080/api/info` and `http://localhost:8080/api`.
 - Database: Access the list of persons at `http://localhost:8080/api/persons`.
### 5. Stop the docker when done
```
docker compose -f docker-compose.dev.yml down -v
```
Remember to remove the volumes with `-v` for consistency.

## Production Environment
 For deploying the application in a production environment:
### 1. Build the backend image
```
cd backend
docker build -t phonebook-backend-prod .  
```
### 2. Build the frontend image
```
cd frontend
docker build -t phonebook-frontend-prod .  
```
### 3. Run with Docker Compose, at the root run:
```
docker compose -f docker-compose.yml up -d
```
### 4. The frontend, backend and database can be accessed similar to [Accessing the Application](#4-accessing-the-application)
### 5. Stop the docker when done
```
docker compose -f docker-compose.yml down -v
```
Remember to remove the volumes with `-v` for consistency.

# Containerization Benefits
Using Docker for development and production:

- Ensures consistency across different environments.
- Simplifies setup and deployment processes.
- Enhances scalability and maintainability of the application.