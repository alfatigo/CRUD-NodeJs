Clone the repo and install the dependencies.

git clone https://github.com/alfatigo/CRUD-NodeJs.git
cd the-example-app.nodejs
npm install
Steps for read-only access
To start the express server, run the following

npm run start //Start the app.
Open http://localhost:3000 and take a look around.

Steps for read and write access (recommended)
Step 1: Install the dependencies:
  -npm i mongoose //MongoDB
  -npm i dotenv //.env
  -npm i nodemon -D

Open variables.env and inject your credentials so it looks like this

MONGODB_URI=<Your connection String>
PORT=3000
  
To start the express server, run the following
npm run start
