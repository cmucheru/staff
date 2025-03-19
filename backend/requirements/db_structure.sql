CREATE DATABASE staff_management;

USE staff_management;

CREATE TABLE staff (
    id INT AUTO_INCREMENT PRIMARY KEY,
    index_number VARCHAR(20) NOT NULL,
    full_names VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    current_location VARCHAR(100),
    highest_level_of_education VARCHAR(50),
    duty_station VARCHAR(100),
    availability_for_remote_work BOOLEAN,
    software_expertise VARCHAR(100),
    software_expertise_level VARCHAR(50),
    language VARCHAR(50),
    level_of_responsibility VARCHAR(50)
);

CREATE TABLE education_levels (
    id INT AUTO_INCREMENT PRIMARY KEY,
    level VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE duty_stations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    station_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE software_expertise (
    id INT AUTO_INCREMENT PRIMARY KEY,
    expertise VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE languages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    language_name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE responsibility_levels (
    id INT AUTO_INCREMENT PRIMARY KEY,
    responsibility VARCHAR(50) NOT NULL UNIQUE
);

