create database SV71862322;
use SV71862322;
CREATE TABLE MateriaPrima (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    proveedor VARCHAR(100),
    cantidad INT NOT NULL,
    precio DECIMAL(10,2) NOT NULL
);

CREATE TABLE Insumos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    categoria VARCHAR(50),
    stock INT NOT NULL,
    precio DECIMAL(10,2) NOT NULL
);

CREATE TABLE Personal (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    cargo VARCHAR(50),
    salario DECIMAL(10,2) NOT NULL
);

CREATE TABLE Produccion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto VARCHAR(100) NOT NULL,
    cantidad INT NOT NULL,
    fecha DATE NOT NULL,
    id_materia_prima INT,
    FOREIGN KEY (id_materia_prima) REFERENCES MateriaPrima(id)
);

-- 3. Procedimientos almacenados CRUD para Personal
DELIMITER //
CREATE PROCEDURE InsertarPersonal(IN nombre VARCHAR(100), IN cargo VARCHAR(50), IN salario DECIMAL(10,2))
BEGIN
    INSERT INTO Personal (nombre, cargo, salario) VALUES (nombre, cargo, salario);
END //

CREATE PROCEDURE ObtenerPersonal()
BEGIN
    SELECT * FROM Personal;
END //

CREATE PROCEDURE ActualizarSalario(IN id_personal INT, IN nuevo_salario DECIMAL(10,2))
BEGIN
    UPDATE Personal SET salario = nuevo_salario WHERE id = id_personal;
END //

CREATE PROCEDURE EliminarPersonal(IN id_personal INT)
BEGIN
    DELETE FROM Personal WHERE id = id_personal;
END //
DELIMITER ;

-- 4. Trigger para actualizar stock de materia prima al registrar producción
DELIMITER //
CREATE TRIGGER ReducirStockMateriaPrima
BEFORE INSERT ON Produccion
FOR EACH ROW
BEGIN
    UPDATE MateriaPrima SET cantidad = cantidad - NEW.cantidad WHERE id = NEW.id_materia_prima;
END //
DELIMITER ;

