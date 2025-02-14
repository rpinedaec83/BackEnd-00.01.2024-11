DELIMITER //
CREATE FUNCTION  saludar(nombre VARCHAR(50), apellido VARCHAR(50), email VARCHAR(100)) RETURNS VARCHAR(150) DETERMINISTIC
  BEGIN
    DECLARE nombre_completo VARCHAR(100);
    SET nombre_completo = CONCAT(nombre, ' ', apellido);
    IF email IS NOT NULL THEN
      RETURN CONCAT('Bienvenido ', nombre_completo);
    ELSE
      RETURN 'Aun no tenes Email';
    END IF;
  END//
  