DELIMITER $$
CREATE trigger tgrDeleteColor AFTER delete on color
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
	OLD.id, 
    OLD.descripcion, 
    OLD.is_active, 
    OLD.usuario_creacion,
    OLD.fecha_creacion ,
    OLD.usuario_modificacion ,
    OLD.fecha_modificacion,
    'D',
    current_user());
end

$$
DELIMITER ;