CREATE TABLE Persons (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

INSERT INTO Persons (first_name, last_name, email) 
VALUES ('John', 'Doe', 'john.doe@example.com'),
('Jane', 'Doe', 'jane.doe@example.com'),
('Jim', 'Beam', 'jim.beam@example.com'),
('Jack', 'Daniels', 'jack.daniels@example.com'),
('Jill', 'Hill', 'jill.hill@example.com');