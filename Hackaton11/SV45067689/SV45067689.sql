CREATE DATABASE if not EXISTS SV45067689


USE SV45067689

CREATE TABLE materiaPrima(
	id int auto_increment primary key,
    nombre varchar(100) not null,
    descripcion Text,
    cantidad int not null,
    unidad_medida varchar(50) not null
)


CREATE TABLE Insumos(
	id int auto_increment primary key,
    nombre varchar(100) not null,
    descripcion Text,
    cantidad int not null,
    unidad_medida varchar(50) not null
)

CREATE TABLE personal(
	id int auto_increment primary key,
    nombre varchar(100)not null,
    puesto varchar(100)not null,
    salario decimal(10,2) not null
)

CREATE TABLE produccion(
	id int auto_increment primary key,
    fecha date not null,
    cantidad int not null,
    id_materia_prima int,
    id_insumo int,
    id_personal int,
    foreign key (id_materia_prima) references materiaPrima(id),
    foreign key (id_insumo) references Insumos(id)
    -- foreign key (id_personal) references asignacionPersonal(id)
)

CREATE TABLE compraMateriaPrima(
	id int auto_increment primary key,
    fecha date not null,
    id_materia_prima int,
    cantidad int not null,
    costo decimal(10,2) not null,
    foreign key (id_materia_prima) references materiaPrima(id)
)

CREATE TABLE compraInsumos(
	id int auto_increment primary key,
    fecha date not null,
    id_insumo int,
    cantidad int not null,
    costo decimal(10,2) not null,
    foreign key (id_insumo) references Insumos(id)
)


CREATE TABLE asignacionPersonal(
	id int auto_increment primary key,
    id_produccion int,
    id_personal int,
	-- foreign key (id_produccion) references produccion(id),
    foreign key (id_personal) references personal(id)
)

ALTER TABLE produccion
	ADD FOREIGN KEY (id_personal) references asignacionPersonal(id);
    
ALTER TABLE asignacionPersonal
	ADD FOREIGN KEY (id_produccion) references produccion(id);
    

   -- foreign key (id_personal) references asignacionPersonal(id)
select*from produccion



DELIMITER //
CREATE PROCEDURE sp_crearMateriaPrima (in p_nombre varchar(100),in p_descripcion text, in p_cantidad int, in unidad_medida varchar(50))
BEGIN
	INSERT INTO materiaPrima(nombre, descripcion, cantidad,unidad_medida)
    VALUES(p_nombre, p_descripcion, p_cantidad , unidad_medida);
END //
DELIMITER ;

call sp_crearMateriaPrima('Madera de Pino','Madera de alta calidad para armarios',100,'metros');
call sp_crearMateriaPrima('Metal acero inoxidable','acabado de lujo',200,'metros');
call sp_crearMateriaPrima('Tablero de Fibra','Resistente a la humedad',35,'unidades');

select*from materiaprima
-- READ

DELIMITER //
CREATE PROCEDURE obtenerMateriaPrima()
BEGIN
	SELECT id,nombre,descripcion,cantidad,unidad_medida from materiaPrima;
END //
DELIMITER ;

-- READ BY ID
DELIMITER //
CREATE PROCEDURE ObtenerMateriaPrimaByid(in p_id int)
BEGIN
	SELECT id,nombre,descripcion,cantidad,unidad_medida from materiaPrima
    WHERE id = p_id;
END //
DELIMITER ;

call ObtenerMateriaPrimaByid(2);
call ObtenerMateriaPrima();

-- UPDATE
DELIMITER //
CREATE PROCEDURE UpdateMateriaPrimaById(in p_id int, in p_nombre varchar(100), in p_descripcion text, in p_cantidad int, in p_unidad_medida varchar(50))
BEGIN
	UPDATE MateriaPrima 
    SET nombre = p_nombre, descripcion = p_descripcion, cantidad = p_cantidad, unidad_medida = p_unidad_medida WHERE 
    id = p_id;
END //
DELIMITER ;

call UpdateMateriaPrimaById(1,'Tablero de Fibra','acabado de lujo','20','metros');
call UpdateMateriaPrimaById(1,'Tablero de Fibra','acabado de lujo','40','metros');

-- DELETE
DELIMITER //
CREATE PROCEDURE DeleteMateriaPrimaById(in p_id int)
BEGIN
	DELETE FROM MateriaPrima 
    WHERE id = p_id;	
END //
DELIMITER ;
 
call DeleteMateriaPrimaById(2);


DELIMITER //
CREATE PROCEDURE sp_crearInsumo (in p_nombre varchar(100),in p_descripcion text, in p_cantidad int, in unidad_medida varchar(50))
BEGIN
	INSERT INTO insumos(nombre, descripcion, cantidad,unidad_medida)
    VALUES(p_nombre, p_descripcion, p_cantidad , unidad_medida);
END //
DELIMITER ;

call sp_crearInsumo('Clavos 1 Pulgada','Para uso en muebles pequeños',3,'Kilogramos');
call sp_crearInsumo('Pegamento Glue 300 ml','Extra fuerte',20,'Unidades');
call sp_crearInsumo('Tarugos 3 pulgadas','color beige',100,'Unidades'); 


DELIMITER //
CREATE PROCEDURE sp_crearPersonal (in p_nombre varchar(100),in p_puesto varchar(100), in p_salario decimal)
BEGIN
	INSERT INTO personal(nombre, puesto, salario)
    VALUES(p_nombre, p_puesto, p_salario);
END //
DELIMITER ;

SELECT*FROM personal;

call sp_crearPersonal('Jorge saldaña','Carpintero',1800);
call sp_crearPersonal('Saul Galvez','Experto en acabados',1850);
call sp_crearPersonal('Luis Perez','Operario',1500);


DELIMITER //
CREATE PROCEDURE sp_InsertProducción (in p_fecha datetime,in p_cantidad int, in p_idmprima int,in p_idinsumo int,in p_idpersonal int )
BEGIN
	INSERT INTO produccion(fecha, cantidad, id_materia_prima,id_insumo,id_personal)
    VALUES(p_fecha, p_cantidad,p_idmprima,p_idinsumo,p_idpersonal );
END //
DELIMITER ;

call sp_InsertProducción('2025-01-20',1,1,2,3);
call sp_InsertProducción('2025-01-20',1,2,1,2);

- UPDATE
DELIMITER //
CREATE PROCEDURE UpdateInsumos(in p_id int, in p_nombre varchar(100), in p_descripcion text, in p_cantidad int, in p_unidad_medida varchar(50))
BEGIN
	UPDATE insumos 
    SET nombre = p_nombre, descripcion = p_descripcion, cantidad = p_cantidad, unidad_medida = p_unidad_medida WHERE 
    id = p_id;
END //
DELIMITER ;

call UpdateInsumos(2,'Pegamento Glue 300 ml','Extra fuerte','30','Unidades');



-------------------------------------- TRIGGERS ----------------
create table materiaPrima_Audit(
	id int,
    nombre varchar(100),
    descripcion Text,
    cantidad int,
    unidad_medida varchar(50),
    accion char(1),
    fecha datetime
);

SELECT*FROM materiaPrima_Audit

DROP TRIGGER tgrmateriaPrima_Audit

DELIMITER //
CREATE trigger tgrmateriaPrima_Audit AFTER UPDATE on materiaPrima
FOR EACH ROW
begin
insert into materiaPrima_Audit(
	id,
    nombre,
    descripcion,
    cantidad,
    unidad_medida,
    accion,
    fecha
)
values(
	OLD.id,
	OLD.nombre,
	OLD.descripcion,
	OLD.cantidad,
	OLD.unidad_medida,
    'U',
    current_timestamp);
end //
DELIMITER ;

 
--- ACTUALZIAR INVENTARIO DE MATERIA PRIMA
 
DELIMITER //
CREATE TRIGGER ActualizarInventarioMateriaPrima after insert on CompraMateriaPrima
for each row
BEGIN
	update MateriaPrima
    set cantidad = cantidad + new.cantidad
    where id = new.id_materia_prima;
END //
DELIMITER ;
 
insert into CompraMateriaPrima(fecha, id_materia_prima, cantidad, costo)
values (curdate(), 1,5,50)


create table Insumos_Audit(
	id int,
    nombre varchar(100),
    descripcion Text,
    cantidad int,
    unidad_medida varchar(50),
    accion char(1),
    fecha datetime
);

SELECT*FROM materiaPrima_Audit
DROP TRIGGER tgrInsumos_Audit


DELIMITER //
CREATE trigger tgrInsumos_Audit AFTER UPDATE on Insumos
FOR EACH ROW
begin
insert into Insumos_Audit(
	id,
    nombre,
    descripcion,
    cantidad,
    unidad_medida,
    accion,
    fecha
)
values(
	OLD.id,
	OLD.nombre,
	OLD.descripcion,
	OLD.cantidad,
	OLD.unidad_medida,
    'U',
    current_timestamp);
end //
DELIMITER ;

call UpdateInsumos(3,'Tarugos 3 pulgadas','color beige','150','Unidades');


---RESTAR INVENTARIO DE MATERIA PRIMA DESPUES DE INSERTAR EN PRODUCCION
 
DELIMITER //
CREATE TRIGGER RestarnventarioMateriaPrima after insert on produccion
for each row
BEGIN
	update MateriaPrima
    set cantidad = cantidad - new.cantidad
    where id = new.id;
END //
DELIMITER ;



select*from insumos
select*from materiaPrima





