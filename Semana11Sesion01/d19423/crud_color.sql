drop procedure if exists crud_color;


DELIMITER $$
CREATE PROCEDURE crud_color (in opcion int, in pdescripcion varchar(100), in pactivo bit,in pid int, in pusuario int)
BEGIN
	IF opcion = 1 then
		begin
			select * from color where is_active = 1;
		end;
    elseif opcion = 2 then
		begin
			insert into color(descripcion, usuario_creacion)
			values(pdescripcion, pusuario);
		end;
	elseif opcion = 3 then
		begin
			update color
            set descripcion = ifnull(pdescripcion, descripcion),
            is_active = ifnull(pactivo, is_active),
            usuario_modificacion = pusuario,
            fecha_modificacion = current_timestamp()
            where id=pid;
			
		end;
	elseif opcion = 4 then
		begin
			update color
            set is_active = 0,
            usuario_modificacion = pusuario,
            fecha_modificacion = current_timestamp()
            where id=pid;
			
		end;
	elseif opcion = 5 then
		begin
			select * from color where id = pid;
		end;
    END IF;
END $$
DELIMITER ;