CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`%` 
    SQL SECURITY DEFINER
VIEW `InfoMascota` AS
    SELECT 
        `m`.`id` AS `id`,
        `m`.`nombre` AS `nombre`,
        `m`.`fecha_nacimiento` AS `fecha_nacimiento`,
        `m`.`peso` AS `peso`,
        `s`.`descripcion` AS `Sexo`,
        `e`.`descripcion` AS `Especie`,
        `r`.`descripcion` AS `Raza`,
        `c`.`descripcion` AS `Color`
    FROM
        ((((`mascotas` `m`
        JOIN `color` `c` ON ((`m`.`id_color` = `c`.`id`)))
        JOIN `especie` `e` ON ((`m`.`id_especie` = `e`.`id`)))
        JOIN `raza` `r` ON ((`m`.`id_raza` = `r`.`id`)))
        JOIN `sexo` `s` ON ((`m`.`id_sexo` = `s`.`id`)))