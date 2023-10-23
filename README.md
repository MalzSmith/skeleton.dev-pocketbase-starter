# Skeleton.dev starter project with Pocketbase and password based authentication

## Installation

### Pocketbase setup

- Download the latest version of Pocketbase from [https://pocketbase.io/docs/](https://pocketbase.io/docs/)

- Start Pocketbase

```sh
./pocketbase serve
```

- Navigate to the Admin UI and create a new user
- Add a new user to the users collection (this collection will be used by the app for authentication)

### Project setup

Once you have cloned the repository and verified it, install the dependencies with

```sh
npm install
```

Create a copy of `.env.example` and modify it so that `POCKETBASE_URL` points at your pocketbase instance,

## Running the application

- Start the database (if not running already)

```sh
./pocketbase serve
```

- Start the application

```sh
npm run dev
```
