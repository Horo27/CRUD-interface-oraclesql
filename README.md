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
  
## 🛠️ Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/database-interface.git
cd database-interface
```

2. Install dependencies
```bash
npm install
```

3. Configure your database connection in `src/config/api.config.js`
```javascript
const API_CONFIG = {
    baseUrl: 'http://localhost:3000',
    endpoints: {
        select: '/api/select',
        update: '/api/update'
    }
};
```

## 📁 Project Structure

```plaintext
interfata/
├── src/
│   ├── controllers/    # Request handlers and business logic
│   ├── utils/          # Helper functions and utilities
│   ├── models/         # Data models and state management
