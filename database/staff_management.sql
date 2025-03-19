CREATE DATABASE staff_management;
USE staff_management;

CREATE TABLE staff (
    id INT AUTO_INCREMENT PRIMARY KEY,
    index_number VARCHAR(20) NOT NULL,
    full_names VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    current_location VARCHAR(100),
    highest_level_of_education VARCHAR(50),
    duty_station VARCHAR(100),
    availability_for_remote_work BOOLEAN,
    software_expertise VARCHAR(100),
    software_expertise_level VARCHAR(50),
    language VARCHAR(50),
    level_of_responsibility VARCHAR(50)
);

INSERT INTO staff (index_number, full_names, email, current_location, highest_level_of_education, duty_station, availability_for_remote_work, software_expertise, software_expertise_level, language, level_of_responsibility)
VALUES ('ST001', 'John Doe', 'john@example.com', 'New York', 'Masters', 'Head Office', 1, 'React, PHP', 'Expert', 'English', 'Manager');
