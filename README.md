# CRUD-interface-oraclesql

This project provides a simple web-based interface to interact with an Oracle SQL database. It features a basic Create, Read, Update, Delete (CRUD) interface, enabling users to manage and manipulate database records through a user-friendly interface.

## Features

- **Create:** Add new records to the database with an easy-to-use form.
- **Read:** Display the database table in a user-friendly grid.
- **Update:** Edit existing records directly from the table.
- **Delete:** Remove records from the database.

## Technologies Used

- **Frontend:**
  - HTML, CSS, JavaScript (Vanilla)
  - Bootstrap (for UI components)

- **Backend:**
  - Node.js
  - Express.js
  - Oracle SQL Database

- **Database:**
  - Oracle SQL
  
## Installation Instructions

### Prerequisites
1. **Oracle SQL**: Install Oracle SQL and set up a database.

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Horo27/CRUD-interface-oraclesql.git
   ```

2. **Set Up PostgreSQL Database**:
   - Create a new Oracle SQL database.
   - Update the `src/server.js` file with your database credentials.

   ```properties
   const mypw = 'parola'  //here you replace 'parola' with your database connection password

   dbconfig = {
       user          : "utilizator", //here you replace "utilizator" with your database username
       password      : mypw,
       connectString : "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))(CONNECT_DATA =(SID= XE)))"
   };
   ```

3. **Start the server**:

   ```terminal
   node src/server.js
   ```

   

4. **Open the interface**:
   - Open `public/index.html` in a browser

