CREATE TABLE IF NOT EXISTS users (
                                         id INT AUTO_INCREMENT PRIMARY KEY,
                                         first_name VARCHAR(50),
                                         last_name VARCHAR(50),
                                         login VARCHAR(50),
                                         password VARCHAR(50)
);