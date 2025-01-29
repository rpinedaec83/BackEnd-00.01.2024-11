-- DDL
-- create database Veterinaria;
-- drop database Veterinaria;
drop table if exists mascota_vacuna;
drop table if exists mascotas;
drop table if exists propietarios;
drop table if exists raza;
drop table if exists especie;
drop table if exists sexo;
drop table if exists ubigeo;
drop table if exists color;
drop table if exists nacionalidad;
drop table if exists vacunas;
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



create table nacionalidad(
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

insert into nacionalidad(descripcion, usuario_creacion)
values('Peruana',1),('Ecuatoriana',1);

select * from nacionalidad;



create table vacunas(
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

insert into vacunas(descripcion, usuario_creacion)
values('TripleFelina',1),('Rabia',1);

select * from vacunas;



create table ubigeo(
	ubigeo char(6) primary key not null,
    departamento varchar(100) not null,
    provincia varchar(100) not null,
    distrito varchar(100) not null,
    is_active bit not null default 1,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
    usuario_modificacion int null,
    fecha_modificacion datetime	null,
    foreign key (usuario_creacion) references usuarios(id),
    foreign key (usuario_modificacion) references usuarios(id)
);

insert into ubigeo(ubigeo,departamento, provincia, distrito, usuario_creacion)
values('160109','Lima','Lima','La Victoria',1),('130115','Lambayeque','Cliclayo','La Victoria',1);

select * from ubigeo;

create table propietarios(
	id int auto_increment primary key not null,
    nombres varchar(200) not null,
    apellidos varchar(200) not null,
    direccion varchar(200) not null,
    ubigeo char(6) not null,
    telefono varchar(10) not null,
    id_nacionalidad int not null,
    is_active bit not null default 1,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
    usuario_modificacion int null,
    fecha_modificacion datetime	null,
    foreign key (usuario_creacion) references usuarios(id),
    foreign key (usuario_modificacion) references usuarios(id),
    foreign key (ubigeo) references ubigeo(ubigeo),
    foreign key (id_nacionalidad) references nacionalidad(id)
);
insert into propietarios(nombres,apellidos,direccion,ubigeo,telefono,id_nacionalidad, usuario_creacion)
values('Roberto','Pineda','Mexico', '160109', '916720940',2,1);
select * from propietarios;

create table mascotas(
	id int auto_increment primary key not null,
    nombre varchar(200) not null,
    fecha_nacimiento date null,
    peso decimal(18,2) not null,
    id_sexo int not null,
    id_especie int not null,
    id_raza int not null,
    id_color int not null,
    id_propietario int not null,
    is_active bit not null default 1,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
    usuario_modificacion int null,
    fecha_modificacion datetime	null,
    foreign key (usuario_creacion) references usuarios(id),
    foreign key (usuario_modificacion) references usuarios(id),
    foreign key (id_sexo) references sexo(id),
    foreign key (id_color) references color(id),
    foreign key (id_raza) references raza(id),
    foreign key (id_especie) references especie(id),
    foreign key (id_propietario) references propietarios(id)
);

insert into mascotas(nombre,peso,id_sexo, id_especie, id_raza, id_color, id_propietario, usuario_creacion)
values('Felipa',3.08, 1,1,1,1,1,1);

select * from mascotas;

create table mascota_vacuna(
	id int auto_increment primary key not null,
    id_mascota int not null,
    id_vacuna int not null,
    fecha_aplicacion datetime default current_timestamp,
    is_active bit not null default 1,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
    usuario_modificacion int null,
    fecha_modificacion datetime	null,
    foreign key (usuario_creacion) references usuarios(id),
    foreign key (usuario_modificacion) references usuarios(id),
    foreign key (id_mascota) references mascotas(id),
    foreign key (id_vacuna) references vacunas(id)
);

insert into mascota_vacuna(id_mascota, id_vacuna, usuario_creacion)
values(1,1,1);

select * from mascota_vacuna;