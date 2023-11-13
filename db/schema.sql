DROP DATABASE IF EXISTS cats_dev;
CREATE DATABASE cats_dev;

\c cats_dev;

CREATE TABLE cats (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER CHECK(age >= 0),
    color TEXT NOT NULL,
    breed VARCHAR(100),
    arrival_date DATE,
    spayed BOOLEAN
);