CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);