CREATE TABLE tasks(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR (200) NOT NULL,
    description VARCHAR(200) NOT NULL,
    done BOOLEAN NOT NULL DEFAULT 0,
    createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)