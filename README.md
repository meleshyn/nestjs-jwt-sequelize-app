## API Demonstration
https://github.com/user-attachments/assets/f1137836-f92a-432e-a31b-020e275cbade

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/meleshyn/nestjs-jwt-sequelize-app.git
cd nestjs-jwt-sequelize-app
```

### Install Dependencies

```bash
npm install
```

### Starting the MySQL Database using Docker:

```bash
docker run --rm --name mysql-nest-dev \
  -e MYSQL_ROOT_PASSWORD=root \
  -e MYSQL_DATABASE=dev \
  -p 3306:3306 \
  -d mysql:latest
```

- **Note**: The `-rm` flag ensures the container is removed after stopping, deleting all data.

### Running Database Migrations

```bash
npm run migrate
```

### Starting the Application

```bash
npm run start
```

---

## API Documentation

### API Versioning

- **Base URL**: `http://localhost:3000/api/v1`

### Authentication

- **JWT Tokens**: Pass the JWT token in the `Authorization` header as `Bearer <token>`.

### Endpoints

### Register User

- **URL**: `/register`
- **Method**: `POST`
- **Description**: Registers a new user.
- **Request Body**:
    
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "1234567890",
      "password": "securepassword"
    }
    ```
    
- **Response**:
    
    ```json
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "1234567890"
    }
    ```
    

### Login User

- **URL**: `/login`
- **Method**: `POST`
- **Description**: Logs in a user and returns an access token.
- **Request Body**:
    
    ```json
    {
      "email": "john.doe@example.com",
      "password": "securepassword"
    }
    ```
    
- **Response**:
    
    ```json
    {
      "access_token": "<JWT_TOKEN>"
    }
    ```
    

### Get User Data

- **URL**: `/user`
- **Method**: `GET`
- **Description**: Retrieves authenticated user data.
- **Headers**:
    
    ```makefile
    Authorization: Bearer <JWT_TOKEN>
    ```
    
- **Response**:
    
    ```json
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "1234567890"
    }
    ```
