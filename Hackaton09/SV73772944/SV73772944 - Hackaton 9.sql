-- 1. Seleccionar los clientes que viven en el país de "USA":
SELECT * FROM Customers WHERE Country = 'USA';

-- 2. Seleccionar los proveedores que viven en la ciudad de "BERLIN":
SELECT * FROM Suppliers WHERE City = 'BERLIN';

-- 3. Seleccionar los empleados con código 3, 5 y 8:
SELECT * FROM Employees WHERE EmployeeID IN (3, 5, 8);

-- 4. Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1, 3 y 5:
SELECT * FROM Products WHERE Stock > 0 AND SupplierID IN (1, 3, 5);

-- 5. Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90:
SELECT * FROM Products WHERE Price >= 20 AND Price <= 90;

-- 6. Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997:
SELECT * FROM Orders WHERE OrderDate BETWEEN '1997-01-01' AND '1997-07-15';

-- 7. Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1, 3, 4, 8:
SELECT * FROM Orders WHERE YEAR(OrderDate) = 1997 AND EmployeeID IN (1, 3, 4, 8);

-- 8. Mostrar las órdenes hechas en el año 1996:
SELECT * FROM Orders WHERE YEAR(OrderDate) = 1996;
-- 9. Mostrar las órdenes hechas en el año 1997, del mes de abril:
SELECT * FROM Orders WHERE YEAR(OrderDate) = 1997 AND MONTH(OrderDate) = 4;

-- 10. Mostrar las órdenes hechas el primero de todos los meses, del año 1998:
SELECT * FROM Orders WHERE YEAR(OrderDate) = 1998 AND DAY(OrderDate) = 1;

-- 11. Mostrar todos los clientes que no tienen fax
SELECT * FROM Customers WHERE Fax IS NULL;

-- 12. Mostrar todos los clientes que tienen fax
SELECT * FROM Customers WHERE Fax IS NOT NULL;

-- 13. Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece.
SELECT p.ProductName, p.Price, p.Stock, c.CategoryName
FROM Products p
JOIN Categories c ON p.CategoryID = c.CategoryID;

-- 14. Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora.
SELECT p.ProductName, p.Price, p.SupplierID, s.SupplierName
FROM Products p
JOIN Suppliers s ON p.SupplierID = s.SupplierID;

-- 15. Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto.
SELECT o.OrderID, od.ProductID, p.Price, od.Quantity, (p.Price * od.Quantity) AS TotalPaid
FROM Orders o
JOIN OrderDetails od ON o.OrderID = od.OrderID
JOIN Products p ON od.ProductID = p.ProductID;

-- 16. Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo.
SELECT o.OrderID, o.OrderDate, od.ProductID, p.Price, e.EmployeeID, CONCAT(e.FirstName, ' ', e.LastName) AS EmployeeName
FROM Orders o
JOIN OrderDetails od ON o.OrderID = od.OrderID
JOIN Products p ON od.ProductID = p.ProductID
JOIN Employees e ON o.EmployeeID = e.EmployeeID;

-- 17. Mostrar los 10 productos con menor stock
SELECT * FROM Products ORDER BY Stock ASC LIMIT 10;

-- 18. Mostrar los 10 productos con mayor stock
SELECT * FROM Products ORDER BY Stock DESC LIMIT 10;

-- 19. Mostrar los 10 productos con menor precio
SELECT * FROM Products ORDER BY Price ASC LIMIT 10;

-- 20. Mostrar los 10 productos con mayor precio
SELECT * FROM Products ORDER BY Price DESC LIMIT 10;

-- 21. Mostrar los 10 productos más baratos
SELECT * FROM Products ORDER BY Price ASC LIMIT 10;

-- 22. Mostrar los 10 productos más caros
SELECT * FROM Products ORDER BY Price DESC LIMIT 10;

-- 23. Seleccionar todos los campos de la tabla clientes,ordenar por compania
SELECT * FROM Customers ORDER BY CustomerName;

-- 24. Seleccionar todos los campos de clientes,cuya compania empiece con la letra B y pertenezcan a UK ,ordenar por nombre de la compania
SELECT * FROM Customers WHERE CustomerName LIKE 'B%' AND Country = 'UK' ORDER BY CustomerName;

-- 25. Seleccionar todos los campos de productos de las categorias 1,3 y 5 ,ordenar por categoria
SELECT * FROM Products WHERE CategoryID IN (1, 3, 5) ORDER BY CategoryID;

-- 26. Seleccionar los productos cuyos precios unitarios estan entre 50 y 200
SELECT * FROM Products WHERE Price BETWEEN 50 AND 200;

-- 27. Visualizar el nombre y el id de la compania del cliente,fecha,precio unitario y producto de la orden
SELECT c.CustomerName, c.CustomerID, o.OrderDate, p.Price, p.ProductName
FROM Orders o
JOIN OrderDetails od ON o.OrderID = od.OrderID
JOIN Products p ON od.ProductID = p.ProductID
JOIN Customers c ON o.CustomerID = c.CustomerID;

-- 28. Visualizar el nombre de la categoria y el numero de productos que hay por cada categoria.
SELECT c.CategoryName, COUNT(p.ProductID) AS NumberOfProducts
FROM Categories c
JOIN Products p ON c.CategoryID = p.CategoryID
GROUP BY c.CategoryName;

-- 29. Seleccionar los 5 productos mas vendidos
SELECT p.ProductName, SUM(od.Quantity) AS TotalSold
FROM OrderDetails od
JOIN Products p ON od.ProductID = p.ProductID
GROUP BY p.ProductName
ORDER BY TotalSold DESC
LIMIT 5;

-- 30. Seleccionar los jefes de los empleados
SELECT e1.FirstName AS EmployeeFirstName, e1.LastName AS EmployeeLastName, e2.FirstName AS ManagerFirstName, e2.LastName AS ManagerLastName
FROM Employees e1
LEFT JOIN Employees e2 ON e1.ManagerID = e2.EmployeeID;

-- 31. Obtener todos los productos cuyo nombre comienzan con M y tienen un precio comprendido entre 28 y 129
SELECT * FROM Products WHERE ProductName LIKE 'M%' AND Price BETWEEN 28 AND 129;

-- 32. Obtener todos los clientes del Pais de USA,Francia y UK
SELECT * FROM Customers WHERE Country IN ('USA', 'France', 'UK');

-- 33. Obtener todos los productos descontinuados o con stock cero.
SELECT * FROM Products WHERE Discontinued = 1 OR Stock = 0;

-- 34. Obtener todas las ordenes hechas por el empleado King Robert
SELECT * FROM Orders WHERE EmployeeID = (
   SELECT EmployeeID FROM Employees WHERE LastName = 'King' AND FirstName = 'Robert'
);

-- 35. Obtener todas las ordenes por el cliente cuya compania es "Que delicia"
SELECT * FROM Orders WHERE CustomerID = (
   SELECT CustomerID FROM Customers WHERE CustomerName = 'Que Delicia'
);

-- 36. Obtener todas las ordenes hechas por el empleado King Robert,Davolio Nancy y Fuller Andrew
SELECT * FROM Orders WHERE EmployeeID IN (
   SELECT EmployeeID FROM Employees WHERE (LastName = 'King' AND FirstName = 'Robert') 
   OR (LastName = 'Davolio' AND FirstName = 'Nancy')
   OR (LastName = 'Fuller' AND FirstName = 'Andrew')
);

-- 37. Obtener todos los productos(codigo,nombre,precio,stock) de la orden 10257
SELECT p.ProductID, p.ProductName, p.Price, p.Stock 
FROM OrderDetails od 
JOIN Products p ON od.ProductID = p.ProductID 
WHERE od.OrderID = 10257;

-- 38. Obtener todos los productos(codigo,nombre,precio,stock) de las ordenes hechas desde 1997 hasta la fecha de hoy.
SELECT p.ProductID, p.ProductName, p.Price, p.Stock 
FROM OrderDetails od 
JOIN Products p ON od.ProductID = p.ProductID 
JOIN Orders o ON od.OrderID = o.OrderID 
WHERE o.OrderDate >= '1997-01-01';

-- 39. Calcular los 15 productos mas caros
SELECT * FROM Products ORDER BY Price DESC LIMIT 15;

-- 40. Calcular los 5 productos mas baratos
SELECT * FROM Products ORDER BY Price ASC LIMIT 5;

-- 41. Obtener el nombre de todas las categorias y los nombres de sus productos,precio y stock.
SELECT c.CategoryName, p.ProductName, p.Price, p.Stock
FROM Categories c
JOIN Products p ON c.CategoryID = p.CategoryID;

-- 42. Obtener el nombre de todas las categorias y los nombres de sus productos,solo los productos que su nombre no comience con la letra P
SELECT c.CategoryName, p.ProductName, p.Price, p.Stock
FROM Categories c
JOIN Products p ON c.CategoryID = p.CategoryID
WHERE p.ProductName NOT LIKE 'P%';

-- 43. Calcular el stock de productos por cada categoria.Mostrar el nombre de la categoria y el stock por categoria.
SELECT c.CategoryName, SUM(p.Stock) AS TotalStock
FROM Categories c
JOIN Products p ON c.CategoryID = p.CategoryID
GROUP BY c.CategoryName;

-- 44. Obtener el Nombre del cliente,Nombre del Proveedor,Nombre del empleado y el nombre de los productos que estan en la orden 10794
SELECT c.CustomerName, s.SupplierName, e.FirstName, e.LastName, p.ProductName
FROM Orders o
JOIN OrderDetails od ON o.OrderID = od.OrderID
JOIN Products p ON od.ProductID = p.ProductID
JOIN Customers c ON o.CustomerID = c.CustomerID
JOIN Employees e ON o.EmployeeID = e.EmployeeID
JOIN Suppliers s ON p.SupplierID = s.SupplierID
WHERE o.OrderID = 10794;

-- 45. Mostrar el numero de ordenes de cada uno de los clientes por año,luego ordenar codigo del cliente y el año.
SELECT CustomerID, YEAR(OrderDate) AS Year, COUNT(OrderID) AS OrderCount
FROM Orders
GROUP BY CustomerID, Year
ORDER BY CustomerID, Year;

-- 46. Contar el numero de ordenes que se han realizado por años y meses ,luego debe ser ordenado por año y por mes.
SELECT YEAR(OrderDate) AS Year, MONTH(OrderDate) AS Month, COUNT(OrderID) AS OrderCount
FROM Orders
GROUP BY Year, Month
ORDER BY Year, Month;

-- 47. Seleccionar el nombre de la compañía del cliente,él código de la orden de compra,la fecha de la orden de compra, código del producto, cantidad pedida del producto,nombre del producto, el nombre de la compañía proveedora y la ciudad del proveedor ,usar Join
SELECT c.CustomerName, o.OrderID, o.OrderDate, p.ProductID, od.Quantity, p.ProductName, s.SupplierName, s.City
FROM Orders o
JOIN OrderDetails od ON o.OrderID = od.OrderID
JOIN Products p ON od.ProductID = p.ProductID
JOIN Customers c ON o.CustomerID = c.CustomerID
JOIN Suppliers s ON p.SupplierID = s.SupplierID;

-- 48. Seleccionar el nombre de la compañía del cliente, nombre del contacto, el código de la orden de compra, la fecha de la orden de compra, el código del producto,cantidad pedida del producto, nombre del producto y el nombre de la compañía proveedora, usas JOIN.Solamente las compañías proveedoras que comienzan con la letra de la A hasta la letra G,además la cantidad pedida del producto debe estar entre 23 y 187.
SELECT c.CustomerName, c.ContactName, o.OrderID, o.OrderDate, p.ProductID, od.Quantity, p.ProductName, s.SupplierName
FROM Orders o
JOIN OrderDetails od ON o.OrderID = od.OrderID
JOIN Products p ON od.ProductID = p.ProductID
JOIN Customers c ON o.CustomerID = c.CustomerID
JOIN Suppliers s ON p.SupplierID = s.SupplierID
WHERE s.SupplierName BETWEEN 'A' AND 'G%' AND od.Quantity BETWEEN 23 AND 187;
