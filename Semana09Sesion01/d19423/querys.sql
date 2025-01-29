-- DDL
-- create database Veterinaria;
-- drop database Veterinaria;
drop table if exists raza;
drop table if exists especie;
drop table if exists sexo;
drop  table if exists usuarios;
-- use Veterinaria;
create table usuarios(
	id int auto_increment primary key not null,
    username varchar(100) not null unique,
    password varchar(100) not null,
    email varchar(100) unique not null,
    is_active bit not null default 0,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
    usuario_modificacion int null,
    fecha_modificacion datetime	null,
    foreign key (usuario_creacion) references usuarios(id),
    foreign key (usuario_modificacion) references usuarios(id)
);

-- DML

insert into usuarios(username, password, email, is_active, usuario_creacion, fecha_creacion, usuario_modificacion, fecha_modificacion)
values('rpineda','123456','rpineda@x-codec.net', 0, 1, now(), null, null);

insert into usuarios(username, password, email, usuario_creacion)
values('dlopez','123456','dlopez@x-codec.net',  1);

select * from usuarios;


create table sexo(
	id int auto_increment primary key not null,
    descripcion varchar(100) not null,
    is_active bit not null default 1,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
    usuario_modificacion int null,
    fecha_modificacion datetime	null,
    foreign key (usuario_creacion) references usuarios(id),
    foreign key (usuario_modificacion) references usuarios(id)
);

insert into sexo(descripcion, usuario_creacion)
values('Macho',1),('Hembra',1);

select * from sexo;

create table especie(
	id int auto_increment primary key not null,
    descripcion varchar(100) not null,
    is_active bit not null default 1,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
    usuario_modificacion int null,
    fecha_modificacion datetime	null,
    foreign key (usuario_creacion) references usuarios(id),
    foreign key (usuario_modificacion) references usuarios(id)
);

insert into especie(descripcion, usuario_creacion)
values('Gato',1),('Perro',1),('Ave',1);

select * from especie;



create table raza(
	id int auto_increment primary key not null,
    descripcion varchar(100) not null,
    is_active bit not null default 1,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
    usuario_modificacion int null,
    fecha_modificacion datetime	null,
    foreign key (usuario_creacion) references usuarios(id),
    foreign key (usuario_modificacion) references usuarios(id)
);

insert into raza(descripcion, usuario_creacion)
values('Mestizo',1),('Golden Retriver',1);

select * from raza;



create table color(
	id int auto_increment primary key not null,
    descripcion varchar(100) not null,
    is_active bit not null default 1,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
    usuario_modificacion int null,
    fecha_modificacion datetime	null,
    foreign key (usuario_creacion) references usuarios(id),
    foreign key (usuario_modificacion) references usuarios(id)
);

insert into color(descripcion, usuario_creacion)
values('Blanco',1),('Negro',1);

select * from color;