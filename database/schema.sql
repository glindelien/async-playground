DROP DATABASE IF EXISTS async_todo;

CREATE DATABASE async_todo;

USE async_todo;

CREATE TABLE todos (
  id INT NOT NULL AUTO_INCREMENT,
  task TEXT(65535) NOT NULL,
  completed BOOL NOT NULL,
  PRIMARY KEY (id)
);
