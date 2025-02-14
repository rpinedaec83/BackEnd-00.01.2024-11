create table colorAudit(
	id int,
    descripcion varchar(100),
    is_active bit,
    usuario_creacion int,
    fecha_creacion datetime,
    usuario_modificacion int,
    fecha_modificacion datetime,
    accion char(1),
    user varchar(100)
);