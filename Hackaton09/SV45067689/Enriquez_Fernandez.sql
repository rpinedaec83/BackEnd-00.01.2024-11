use northwind;

-- 1.Seleccionar los clientes que viven en el país de "usa"

Select * from Customers where country = 'USA';

-- 2-Seleccionar los proveedores que viven en la ciudad de "BERLIN"

SELECT*FROM suppliers
WHERE city = 'Berlin';

-- 3 - Seleccionar los empleados con código 3,5 y 8

SELECT*FROM employees
WHERE employeeId IN (3,5,8);

-- 4. Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5

SELECT*FROM products
WHERE unit > 0 AND supplierId IN (1,3,5);


-- 5- Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90

SELECT*FROM products
WHERE price >=20 AND price <=90;


-- 6 Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997

SELECT*FROM Orders
WHERE orderDate BETWEEN '1997-01-01' AND '1997-07-15';


-- 7 Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8

SELECT*FROM orders
WHERE orderdate BETWEEN '1997-01-01' AND '1997-12-31'
AND employeeID IN(1,3,4,8);

-- 8 Mostrar las ordenes hechas en el año 1996

SELECT*FROM orders
WHERE YEAR(orderdate)= '1996';


-- 9. Mostrar las ordenes hechas en el año 1997 ,del mes de febrero

SELECT*FROM orders
WHERE YEAR(orderDate)='1997' 
AND MONTH(orderDate) ='2';


-- 10 Mostrar las ordenes hechas el primero de todos los meses, del año 1996

SELECT*FROM orders
WHERE DAY(orderDate)='1'
AND YEAR(orderDate)='1996';

-- 11 Mostrar todos los clientes que no tienen fax 
-- Tabla no tiene campo "Fax"

SELECT*FROM customers
WHERE PostalCode ='';


-- 12 Mostrar todos los clientes que tienen fax
-- TABLA NO CONTIENE CAMPO FAX


-- 13 Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece.

SELECT p.productName,p.price, p.unit, c.categoryName
FROM products p INNER JOIN categories c
ON  p. categoryID = c.categoryID

-- 14 Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora.

SELECT p.productName,p.price,s.supplierID,s.supplierName
FROM products p INNER JOIN suppliers s
ON p.supplierID = s.supplierID


-- 15 Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto.

SELECT o.orderId, p.productId,p.price, o.quantity, (p.price * o.quantity) AS total_pagado
FROM orderDetails o INNER JOIN  products p
ON p.productId = o.productId


-- 16 Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo.

SELECT od.orderId,o.orderDate,od.productId, p.price,o.employeeId, CONCAT(e.firstname,' ',e.lastName)AS Vendedor
FROM orderDetails od 
INNER JOIN  orders o ON od.orderID = o.orderId
INNER JOIN  products p ON od.productId = p.productId
INNER JOIN employees e ON o.employeeId = e.employeeId

-- 17 Mostrar los 10 productos con menor stock

SELECT*FROM products
ORDER BY unit asc
LIMIT 10;

-- 18 Mostrar los 10 productos con mayor stock

SELECT*FROM products
ORDER BY unit desc
LIMIT 10;

-- 19 Mostrar los 10 productos con menor precio

SELECT*FROM products
ORDER BY price asc
LIMIT 10;

-- 20 Mostrar los 10 productos con mayor precio

SELECT*FROM products
ORDER BY price desc
LIMIT 10;

-- 21 Mostrar los 10 productos más baratos

SELECT*FROM products
ORDER BY price 
LIMIT 10;

-- 22 Mostrar los 10 productos más caros

SELECT*FROM products
ORDER BY price desc
LIMIT 10;

-- 23 Seleccionar todos los campos de la tabla clientes,ordenar por compania
-- no hay campo compañia

SELECT*FROM customers
ORDER BY country

-- 24 Seleccionar todos los campos de clientes,cuya compania empiece con la letra B y pertenezcan a UK ,ordenar por nombre de la compania
-- no existe campo compañia


-- 25 Seleccionar todos los campos de productos de las categorias 1,3 y 5 ,ordenar por categoria

SELECT*FROM products
WHERE categoryId IN (1,3,5)
ORDER BY categoryID;

-- 26 Seleccionar los productos cuyos precios unitarios estan entre 50 y 200

SELECT*FROM products
WHERE price BETWEEN 50 AND 200;

-- 27 Visualizar el nombre y el id de la compania del cliente,fecha,precio unitario y producto de la orden

SELECT c.customerName,o.orderDate,o.orderId,p.price,p.productName
FROM customers c INNER JOIN orders o 
ON c.customerID = o.customerId INNER JOIN orderDetails od 
ON od.orderId = o.orderId INNER JOIN products p
ON od.productId = p.productId


-- 28 Visualizar el nombre de la categoria y el numero de productos que hay por cada categoria.

SELECT c.categoryName,count(p.productId) AS cantidad 
FROM categories c INNER JOIN products p
ON c.categoryId = p.categoryID
GROUP BY c. categoryID;

-- 29 Seleccionar los 5 productos mas vendidos

SELECT p.productName,SUM(od.quantity) AS Total_vendidos
FROM orderDetails od INNER JOIN products p
ON od.productId = p.productId
GROUP BY p.productId
ORDER BY SUM(od.quantity) desc
LIMIT 5;

-- 30 Seleccionar los jefes de los empleados
-- Tabla employees no contiena la Informacion de Jefe

-- 31 Obtener todos los productos cuyo nombre comienzan con M y tienen un precio comprendido entre 28 y 129

SELECT*FROM products
WHERE productName like 'M%' AND ( price BETWEEN 28 AND 129);

-- 32 Obtener todos los clientes del Pais de USA,Francia y UK

SELECT*FROM customers
WHERE Country IN ('USA', 'FRANCE','UK')

-- 33 Obtener todos los productos descontinuados o con stock cero.

SELECT*FROM products
WHERE unit = 0

-- 34 Obtener todas las ordenes hechas por el empleado King Robert

SELECT*FROM employees
WHERE CONCAT(LastName,' ',FirstName) = 'King Robert';

SELECT o.orderId,o.orderDate, CONCAT(e.LastName,' ',e.FirstName) AS empleado
FROM orders o INNER JOIN employees e
ON o.employeeID = e.employeeId
WHERE CONCAT(e.LastName,' ',e.FirstName) = 'King Robert';

-- 35 Obtener todas las ordenes por el cliente cuya compania es "Que delicia"

SELECT o.orderId,o.orderDate,s.shippers
FROM orders o INNER JOIN suppliers
ON o.shipperId = s.shipperId
WHERE 

-- 36 Obtener todas las ordenes hechas por el empleado King Robert,Davolio Nancy y Fuller Andrew

SELECT o.orderId,o.orderDate, CONCAT(e.LastName,' ',e.FirstName) AS empleado
FROM orders o INNER JOIN employees e
ON o.employeeID = e.employeeId
WHERE CONCAT(e.LastName,' ',e.FirstName) IN ('King Robert','Davolio Nancy','Fuller Andrew');

-- 37 Obtener todos los productos(codigo,nombre,precio,stock) de la orden 10257

SELECT p.productId, p.productName, p.price,p.unit
FROM products p INNER JOIN OrderDetails od
ON p.productId = od.productId
WHERE od.orderId = 10257

-- 38 Obtener todos los productos(codigo,nombre,precio,stock) de las ordenes hechas desde 1997 hasta la fecha de hoy.

SELECT p.productId, p.productName, p.price,p.unit,o.orderId
FROM products p INNER JOIN OrderDetails od
ON p.productId = od.productId
INNER JOIN orders o
ON o.orderId = od.orderId
WHERE YEAR(o.orderDate) >=1996;

-- 39 Calcular los 15 productos mas caros

SELECT*FROM products
ORDER BY price desc
LIMIT 15;

-- 40 Calcular los 5 productos mas baratos

SELECT*FROM products
ORDER BY price 
LIMIT 5;

-- 41 Obtener el nombre de todas las categorias y los nombres de sus productos,precio y stock.

SELECT c.categoryName,p.productName,p.price,p.unit
FROM categories c INNER JOIN products p
ON c.categoryId = p.categoryId

-- 42 Obtener el nombre de todas las categorias y los nombres de sus productos,solo los productos que su nombre no comience con la letra P

SELECT c.categoryName,p.productName,p.price,p.unit
FROM categories c INNER JOIN products p
ON c.categoryId = p.categoryId
WHERE p.productName like 'P%'

-- 43 Calcular el stock de productos por cada categoria.Mostrar el nombre de la categoria y el stock por categoria.

SELECT c.categoryName,count(p.productId) AS cantidad 
FROM categories c INNER JOIN products p
ON c.categoryId = p.categoryID
GROUP BY c. categoryID;

-- 44 Obtener el Nombre del cliente,Nombre del Proveedor,Nombre del empleado y el nombre de los productos que estan en la orden 10794

SELECT c.customerName,s.supplierName,CONCAT(e.LastName,' ',e.FirstName) AS empleado,p.productName
FROM customers c INNER JOIN orders o
ON c.customerId = o.customerId INNER JOIN employees e
ON o.employeeId = e.employeeId INNER JOIN orderDetails od
ON o.orderId = od.orderId INNER JOIN products p
ON p.productId = od.productId INNER JOIN suppliers s
ON s.supplierId = p.supplierId
WHERE o.orderId = '10443'

-- 45 Mostrar el numero de ordenes de cada uno de los clientes por año,luego ordenar codigo del cliente y el año.

SELECT customerId,YEAR(orderDate),COUNT(*) FROM orders 
GROUP BY customerId,YEAR(orderDate)
ORDER BY customerId,YEAR(OrderDate)

-- 46 Contar el numero de ordenes que se han realizado por años y meses ,luego debe ser ordenado por año y por mes.
SELECT YEAR(OrderDate) ,MONTH(OrderDate),COUNT(*) 
FROM orders 
GROUP BY YEAR(orderDate),MONTH(orderDate) 
ORDER BY YEAR(orderDate),MONTH(orderDate)

-- 47 Seleccionar el nombre de la compañía del cliente,él código de la orden de compra,la fecha de la orden de compra, código del producto, 
-- cantidad pedida del producto,nombre del producto, el nombre de la compañía proveedora y la ciudad del proveedor ,usar Join

SELECT o.orderID,orderdate, p.productID,quantity,productName,s.city 
FROM customers c INNER JOIN orders o
ON c.customerID = o.CustomerID INNER JOIN orderDetails od
ON o.OrderID = od.OrderID INNER JOIN products p
ON od.productID = p.productID INNER JOIN Suppliers s 
ON s.SupplierID = p.SupplierID

-- 48 Seleccionar el nombre de la compañía del cliente, nombre del contacto, el código de la orden de compra, la fecha de la orden de compra, 
-- el código del producto,cantidad pedida del producto, nombre del producto y el nombre de la compañía proveedora, usas JOIN.Solamente las compañías 
-- proveedoras que comienzan con la letra de la A hasta la letra G,además la cantidad pedida del producto debe estar entre 23 y 187.

-- NOTA: no existe campo compañia

SELECT c.contactName,O.orderId, OrderDate,p.productId,Quantity,ProductName 
FROM customers c INNER JOIN orders o 
ON c.customerId=o.customerID INNER JOIN OrderDetails od 
ON od.OrderID=O.OrderID INNER JOIN products p 
ON p.productId=od.productId INNER JOIN Suppliers s 
ON s.SupplierID=P.SupplierID WHERE (Quantity BETWEEN 23 AND 187)







use northwind;

SELECT*FROM shippers;
SELECT*FROM products;
SELECT*FROM customers;
SELECT*FROM orders;
SELECT*FROM OrderDetails;
SELECT*FROM suppliers;
SELECT*FROM categories;
SELECT*FROM employees;
