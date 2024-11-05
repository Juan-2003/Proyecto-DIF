CREATE TABLE report(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    type varchar(20) NOT NULL,
    address varchar(255) NOT NULL,
    date TEXT NOT NULL,
    hour TEXT NOT NULL,
    details TEXT NOT NULL,
    evidence BLOB,
    user_id INTEGER NOT NULL,

    foreign key (user_id) references user(id)
)