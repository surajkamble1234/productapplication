create database productapp;
use productapp;

create table category(cid int auto_increment primary key,name varchar(20) unique);

create table product(pid int primary key auto_increment,pname varchar(200),cid int,foreign key(cid) references category(cid) on delete set null);
