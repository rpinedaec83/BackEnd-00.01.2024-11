DELIMITER $$
CREATE trigger tgrInsertColor AFTER INSERT on color
FOR EACH ROW
begin
insert into colorAudit(
	id ,
    descripcion ,
    is_active ,
    usuario_creacion ,
    fecha_creacion ,
    usuario_modificacion ,
    fecha_modificacion ,
    accion ,
    user
)
values(
	NEW.id, 
    NEW.descripcion, 
    NEW.is_active, 
    NEW.usuario_creacion,
    NEW.fecha_creacion ,
    NEW.usuario_modificacion ,
    NEW.fecha_modificacion,
    'I',
    current_user());
end

$$
DELIMITER ;