const {Pool , types} = require('pg');
require('dotenv').config();

types.setTypeParser(1082, (val) => val);
 // Connect to PostgreSQL database
const userDB = new  Pool({
 user: process.env.user_Name,     
  host: process.env.user_Host, 
  database: process.env.user_Database, 
  password:  process.env.user_Password, 
  port: Number (process.env.user_Port),  
});

// create table if not  exists...
userDB.query(`
  CREATE TABLE IF NOT EXISTS users (
  USER_ID SERIAL PRIMARY KEY,
  FIrst_Name VARCHAR(50) NOT NULL,
  Last_Name VARCHAR(50) NOT NULL,
  DOB DATE NOT NULL,
  Mobile_Number VARCHAR(10) NOT NULL,
  Address VARCHAR(255) NOT NULL
  )`, (err) =>{
    if(err){
      console.error('Error creating table', err);
    }
    else{
      console.log('Table created successfully');
    }
  });

module.exports = userDB