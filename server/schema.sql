CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  username varchar(100),
  text varchar(200),
  createdAt date,
  room varchar(50)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

