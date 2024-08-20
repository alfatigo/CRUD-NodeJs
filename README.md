# CRUD Node.js Application

## Cloning the Repository and Installing Dependencies

1. **Clone the Repository:**

   git clone https://github.com/alfatigo/CRUD-NodeJs.git

2. **Navigate to the Project Directory:**

   cd CRUD-NodeJs

3. **Install Dependencies:**

   npm install

## Starting the Express Server

### For Read-Only Access

To start the Express server, run:

   npm run start

Open your browser and navigate to http://localhost:3000 to view the application.

### For Read and Write Access (Recommended)

1. **Install Additional Dependencies:**

   npm install mongoose dotenv nodemon --save-dev

2. **Configure Environment Variables:**

   - Open `variables.env` and add your credentials:

     MONGODB_URI=<Your connection String>
     PORT=3000

3. **Start the Express Server:**

   npm run start

You can now start the server with read and write access. Make sure to configure your MongoDB connection string and other environment variables as needed.
