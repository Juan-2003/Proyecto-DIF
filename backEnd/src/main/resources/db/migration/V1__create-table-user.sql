CREATE TABLE user(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name varchar(50) NOT NULL,
    patternal_sur_name varchar(50) NOT NULL,
    matternal_sur_name varchar(50) NOT NULL,
    birthday TEXT NOT NULL,
    gender varchar(10) NOT NULL,
    state varchar(50) NOT NULL,
    city varchar(50) NOT NULL,
    address varchar(100) NOT NULL,
    postal_code varchar(5) NOT NULL,
    phone_number varchar(10) NOT NULL,
    mail varchar(255) NOT NULL,
    password varchar(255) NOT NULL
)