# The Heritage Market
A platform for students to buy/sell goods and services in your school's community.

## Features
*Project is still in development, and some features/functions might break.*

This project has multiple features:
- Listings displays
- User accounts system
- User account roles (normal user, moderator, and admin)
- Statistics - usage, etc. (planned)
- Messenger (planned)

## Tech stack
- **Frontend**: Javascript, React, Tailwind CSS, Flowbite
- **Backend**: Node.js
- **Database**: PostgreSQL 18
- **Build & Dev**: Vite, npm

## Installing
### Required:
- Download [PostgreSQL 18(.4)](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
- [Node.js](https://nodejs.org/en/download) (v22.17.0 or later)
- npm (v10.9.2 or later) (```curl -qL https://www.npmjs.com/install.sh | sh```)

### To host the files on your device:
```bash
#Clone the github repo
git clone https://github.com/ivg1/theHeritageMarket.git
cd theHeritageMarket

#Install dependencies and start dev servers
cd frontend
npm install
cd ../backend
npm install

#Run servers in separate terminals
#(terminal 1) /backend
node server
#(terminal 2) /frontend
npm run dev

```
Have the PgSQL server on port 5432 (if you want another port, make sure to change the ```PORT``` value in ```backend/.env```).

In case you want another port for the backend server, or you run it on something other than localhost, dont forget to change the url in ```frontend/src/serverComms/server.jsx``` at ```const url = "http://localhost:3000";```


