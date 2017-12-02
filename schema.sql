-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS inventory;
-- Creates the "todolist" database --
CREATE DATABASE inventory;

CREATE TABLE users(
	id int NOT NULL AUTO_INCREMENT,
	username VARCHAR(50),
	email VARCHAR(100),
	password BINARY(60),
	PRIMARY KEY (id)
);