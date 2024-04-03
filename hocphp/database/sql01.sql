-- Đây là comment của ngôn ngữ SQL

-- Tạo CSDL mới

-- CREATE DATABASE fullstack_03;

-- Xóa CSDL

-- DROP DATABASE fullstack_03;

-- Chọn CSDL để làm việc

use fullstack_03;

-- Tạo bảng
-- CREATE TABLE users(
--     id int,
--     name varchar(100),
--     email varchar(100),
--     password varchar(100),
--     status boolean,
--     created_at datetime,
--     updated_at datetime
-- );

-- Insert dữ liệu vào bảng
INSERT INTO users(id, name, email, password, status, created_at, updated_at)
VALUES(2, 'User 2', 'user2@gmail.com', '123456', false, NOW(), NOW());