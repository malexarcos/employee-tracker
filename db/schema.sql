drop database if exists employeeTracker;
create database employeeTracker;
use employeeTracker;

create table department(
    id INT PRIMARY KEY,
    name VARCHAR(30)
);

create table role(
    id INT PRIMARY KEY,
    tittle VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    foreign key (department_id) references department(id)
);

create table employee(
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    foreign key (role_id) references role(id),
    foreign key (manager_id) references employee(id)
);
