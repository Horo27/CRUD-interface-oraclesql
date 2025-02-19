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

2. **Set Up an Oracle SQL Database**:
   - Create a new Oracle SQL database (if you don't already have one).
   - Update the `src/server.js` file with your database credentials:
     
   ```code
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

## How to Use

### Setup
- The project was designed for a university project, the presentation pdf regarding the interface's functionality is in `/presentation.pdf` (it's in romanian)
- If you don't have a database, the project's initial database script can be found at  `/sql/script.sql` aswell as it's conceptual diagram `/sql/conceptual.pdf`
### Presentation of the interface
- The search field is where you input your table names, upon pressing the 'Search' Button, your database will be displayed in the table
- The Query Box field can recive queries. How it works? Upon pressing the Submit Button, a transaction is started, the text inside the Query Box is sent as a query, and the transaction is closed. Both DML and DDL operations are possible. If you want your DML opperations not to commit, there is a variable `commit=true (by default)` at `/src/controllers/queryController.js` line `22`, you can set that to `commit=false` and now all your DML operations will not commit.
- **IMPORTANT** you can have any number of queries chained in the Query Box, to separate queries use `;`, and make sure the last querie doest **NOT** have `;` (see `/presentation.pdf` for examples)
- The last table column has two buttons `edit and delete`, they send queries the same way as mentioned before, so if you want your changes to affect the database, make sure you have `commit=true`

  
