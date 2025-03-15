CREATE TABLE missing_family (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    name VARCHAR(255),
    relationship VARCHAR(255),
    description TEXT,
    photo VARCHAR(255),  
    status ENUM('missing', 'found') DEFAULT 'missing',  
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)  
);
