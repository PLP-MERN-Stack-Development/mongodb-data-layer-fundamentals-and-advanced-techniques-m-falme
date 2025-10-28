#  MongoDB Data Layer Fundamentals & Advanced Techniques – Week 1  
**Repository:** [mongodb-data-layer-fundamentals-and-advanced-techniques-M-Falme](https://github.com/PLP-MERN-Stack-Development/mongodb-data-layer-fundamentals-and-advanced-techniques-m-falme/tree/main)  

##  Author  
**M. Falme**

---

## 📂 Project Overview  
This project covers Week 1 of the PLP module “Data Layer Fundamentals & Advanced Techniques”.  
Using MongoDB (with the Node.js driver) you will:  
- Install MongoDB or use a free Atlas cluster  
- Create a database called `plp_bookstore`  
- Create a collection called `books`  
- Insert sample book documents via `insert_books.js`  
- Write queries and aggregation pipelines via `queries.js`  
- Implement indexing for performance  
- Capture screenshot of your data in MongoDB Compass or Atlas as proof of setup  

---

## 📂 Files in This Repository  
| File                          | Description                                                        |
|-------------------------------|--------------------------------------------------------------------|
| `insert_books.js`             | Node.js script to insert sample book documents into MongoDB       |
| `queries.js`                  | MongoDB Shell script that runs CRUD operations, advanced queries, aggregation pipelines, and indexes |
| `package.json`                | Node project metadata and dependencies                             |
| `.gitignore`                  | Files/folders to ignore (e.g., `node_modules`, `.env`, screenshot) |
| `screenshot.png` (or similar) | Screenshot of MongoDB Compass / Atlas showing `plp_bookstore.books` |
| `README.md`                   | This documentation file                                            |

---

## ⚙️ Setup Instructions  
### 1. Install dependencies  
```bash
npm install
2. Ensure MongoDB is running
If using local MongoDB: default URI is mongodb://localhost:27017

If using Atlas: set environment variable

bash
Copy code
export MONGODB_URI="your_atlas_connection_string"
3. Insert sample data
bash
Copy code
node insert_books.js
This will create the database, collection and insert book documents.

4. Run queries and analysis
In MongoDB shell (or mongosh):

bash
Copy code
mongosh --file queries.js
5. View data in MongoDB Compass / Atlas
Open Compass or connect to your Atlas cluster

Navigate to:

makefile
Copy code
Database: plp_bookstore
Collection: books
Take a screenshot showing your inserted documents and save it as screenshot.png

.. What to Expect..
insert_books.js will log output like:

pgsql
Copy code
Connected to MongoDB server
12 books were successfully inserted into the database
Connection closed
queries.js will show results for the CRUD filters, aggregation pipelines and indexing explain plans.

