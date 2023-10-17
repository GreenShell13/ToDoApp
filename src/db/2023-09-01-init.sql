create schema admin;

create table admin.user (
	id serial primary key not null,
	login varchar(255) null,
	password varchar(255) null
);

insert into admin.user (login, password) values ('admin', '12345');