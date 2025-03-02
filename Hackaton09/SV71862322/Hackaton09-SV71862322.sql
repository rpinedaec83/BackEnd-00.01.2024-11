-- Hackaton 09 - SV71862322
use northwind
-- 1.  Seleccionar los clientes que viven en el país de "usa"
select * 
from customer
where country="USA"

-- 2.  Seleccionar los proveedores que viven en la ciudad de "BERLIN"
select *  
from Supplier
where city="Berlin"

-- 3. Seleccionar los empleados con código 3, 5 y 8
SELECT * FROM Employees WHERE EmployeeID IN (3, 5, 8);

-- 4. Seleccionar los productos con stock mayor que cero y del proveedor 1,3 y 5
SELECT * FROM Products WHERE Stock > 0 AND SupplierID IN (1, 3, 5);

-- 5. Seleccionar los productos con precio entre 20 y 90
SELECT * FROM Products WHERE Price BETWEEN 20 AND 90;

-- 6. Mostrar las órdenes de compra entre el 01/01/1997 y el 15/07/1997
SELECT * FROM Orders WHERE OrderDate BETWEEN '1997-01-01' AND '1997-07-15';

-- 7. Mostrar órdenes de 1997 de empleados con códigos 1, 3, 4, 8
SELECT * FROM Orders WHERE YEAR(OrderDate) = 1997 AND EmployeeID IN (1, 3, 4, 8);

-- 8. Mostrar órdenes hechas en 1996
SELECT * FROM Orders WHERE YEAR(OrderDate) = 1996;

-- 9. Mostrar órdenes hechas en abril de 1997
SELECT * FROM Orders WHERE YEAR(OrderDate) = 1997 AND MONTH(OrderDate) = 4;

-- 10. Mostrar órdenes hechas el primero de cada mes en 1998
SELECT * FROM Orders WHERE YEAR(OrderDate) = 1998 AND DAY(OrderDate) = 1;

-- 11. Mostrar todos los clientes sin fax
SELECT * FROM Customers WHERE Fax IS NULL OR Fax = '';

-- 12. Mostrar todos los clientes con fax
SELECT * FROM Customers WHERE Fax IS NOT NULL AND Fax != '';

-- 13. Nombre del producto, precio, stock y nombre de su categoría
SELECT p.ProductName, p.Price, p.Stock, c.CategoryName
FROM Products p
JOIN Categories c ON p.CategoryID = c.CategoryID;

-- 14. Producto, precio, código y nombre del proveedor
SELECT p.ProductName, p.Price, p.SupplierID, s.CompanyName
FROM Products p
JOIN Suppliers s ON p.SupplierID = s.SupplierID;

-- 15. Número de orden, código del producto, precio, cantidad y total pagado
SELECT od.OrderID, od.ProductID, od.UnitPrice, od.Quantity, (od.UnitPrice * od.Quantity) AS Total
FROM OrderDetails od;

-- 16. Número de orden, fecha, código del producto, precio, código y nombre del empleado
SELECT o.OrderID, o.OrderDate, od.ProductID, od.UnitPrice, e.EmployeeID, CONCAT(e.FirstName, ' ', e.LastName) AS EmployeeName
FROM Orders o
JOIN OrderDetails od ON o.OrderID = od.OrderID
JOIN Employees e ON o.EmployeeID = e.EmployeeID;

-- 17. Los 10 productos con menor stock
SELECT * FROM Products ORDER BY Stock ASC LIMIT 10;

-- 18. Los 10 productos con mayor stock
SELECT * FROM Products ORDER BY Stock DESC LIMIT 10;

-- 19. Los 10 productos con menor precio
SELECT * FROM Products ORDER BY Price ASC LIMIT 10;

-- 20. Los 10 productos con mayor precio
SELECT * FROM Products ORDER BY Price DESC LIMIT 10;

-- 21. Los 10 productos más baratos
SELECT * FROM Products ORDER BY Price ASC LIMIT 10;

-- 22. Los 10 productos más caros
SELECT * FROM Products ORDER BY Price DESC LIMIT 10;

-- 23. Seleccionar todos los clientes, ordenando por compañía
SELECT * FROM Customers ORDER BY CompanyName;

-- 24. Clientes cuya compañía empiece con B y pertenezcan a UK
SELECT * FROM Customers WHERE CompanyName LIKE 'B%' AND Country = 'UK' ORDER BY CompanyName;

-- 25. Productos de categorías 1, 3 y 5, ordenados por categoría
SELECT * FROM Products WHERE CategoryID IN (1, 3, 5) ORDER BY CategoryID;

-- 26. Productos con precio entre 50 y 200
SELECT * FROM Products WHERE Price BETWEEN 50 AND 200;

-- 27. Cliente, ID de la compañía, fecha, precio unitario y producto de la orden
SELECT c.CompanyName, o.CustomerID, o.OrderDate, od.UnitPrice, p.ProductName
FROM Orders o
JOIN OrderDetails od ON o.OrderID = od.OrderID
JOIN Products p ON od.ProductID = p.ProductID
JOIN Customers c ON o.CustomerID = c.CustomerID;

-- 28. Nombre de la categoría y número de productos en cada una
SELECT c.CategoryName, COUNT(p.ProductID) AS TotalProductos
FROM Categories c
JOIN Products p ON c.CategoryID = p.CategoryID
GROUP BY c.CategoryName;

-- 29. Los 5 productos más vendidos
SELECT p.ProductName, SUM(od.Quantity) AS TotalVendido
FROM OrderDetails od
JOIN Products p ON od.ProductID = p.ProductID
GROUP BY p.ProductName
ORDER BY TotalVendido DESC LIMIT 5;

-- 30. Jefes de los empleados
SELECT e.EmployeeID, CONCAT(e.FirstName, ' ', e.LastName) AS Empleado, 
       m.EmployeeID AS JefeID, CONCAT(m.FirstName, ' ', m.LastName) AS Jefe
FROM Employees e
LEFT JOIN Employees m ON e.ReportsTo = m.EmployeeID;

-- 31. Productos que comienzan con "M" y cuestan entre 28 y 129
SELECT * FROM Products WHERE ProductName LIKE 'M%' AND Price BETWEEN 28 AND 129;

-- 32. Clientes de USA, Francia y UK
SELECT * FROM Customers WHERE Country IN ('USA', 'France', 'UK');

-- 33. Productos descontinuados o con stock cero
SELECT * FROM Products WHERE Discontinued = 1 OR Stock = 0;

-- 34. Órdenes hechas por el empleado King Robert
SELECT * FROM Orders WHERE EmployeeID = (SELECT EmployeeID FROM Employees WHERE FirstName = 'Robert' AND LastName = 'King');

-- 35. Órdenes del cliente "Que delicia"
SELECT * FROM Orders WHERE CustomerID = (SELECT CustomerID FROM Customers WHERE CompanyName = 'Que delicia');

-- 36. Órdenes hechas por empleados King Robert, Davolio Nancy y Fuller Andrew
SELECT * FROM Orders WHERE EmployeeID IN (
    SELECT EmployeeID FROM Employees WHERE CONCAT(FirstName, ' ', LastName) IN ('Robert King', 'Nancy Davolio', 'Andrew Fuller')
);

-- 37. Productos de la orden 10257
SELECT ProductID, ProductName, Price, Stock FROM Products WHERE ProductID IN (
    SELECT ProductID FROM OrderDetails WHERE OrderID = 10257
);

-- 38. Productos de órdenes desde 1997 hasta hoy
SELECT ProductID, ProductName, Price, Stock FROM Products WHERE ProductID IN (
    SELECT ProductID FROM OrderDetails WHERE OrderID IN (
        SELECT OrderID FROM Orders WHERE OrderDate >= '1997-01-01'
    )
);

-- 39. 15 productos más caros
SELECT * FROM Products ORDER BY Price DESC LIMIT 15;

-- 40. 5 productos más baratos
SELECT * FROM Products ORDER BY Price ASC LIMIT 5;

-- 41. Obtener el nombre de todas las categorías y los nombres de sus productos, precio y stock.
SELECT c.CategoryName AS Categoria, 
       p.ProductName AS Producto, 
       p.UnitPrice AS Precio, 
       p.UnitsInStock AS Stock
FROM Categories c
JOIN Products p ON c.CategoryID = p.CategoryID
ORDER BY c.CategoryName, p.ProductName;

-- 42. Obtener el nombre de todas las categorías y los nombres de sus productos, solo los productos cuyo nombre no comience con la letra 'P'.
SELECT c.CategoryName AS Categoria, 
       p.ProductName AS Producto, 
       p.UnitPrice AS Precio, 
       p.UnitsInStock AS Stock
FROM Categories c
JOIN Products p ON c.CategoryID = p.CategoryID
WHERE p.ProductName NOT LIKE 'P%'
ORDER BY c.CategoryName, p.ProductName;

-- 43. Stock total por categoría
SELECT c.CategoryName, SUM(p.Stock) AS TotalStock FROM Categories c
JOIN Products p ON c.CategoryID = p.CategoryID
GROUP BY c.CategoryName;

-- 44. Obtener el Nombre del Cliente, Nombre del Proveedor, Nombre del Empleado y el Nombre de los Productos que están en la orden 10794
SELECT c.CompanyName AS Cliente, 
       s.CompanyName AS Proveedor, 
       CONCAT(e.FirstName, ' ', e.LastName) AS Empleado, 
       p.ProductName AS Producto
FROM Orders o
JOIN Customers c ON o.CustomerID = c.CustomerID
JOIN Employees e ON o.EmployeeID = e.EmployeeID
JOIN OrderDetails od ON o.OrderID = od.OrderID
JOIN Products p ON od.ProductID = p.ProductID
JOIN Suppliers s ON p.SupplierID = s.SupplierID
WHERE o.OrderID = 10794;

-- 45. Mostrar el número de órdenes de cada cliente por año, luego ordenar por código del cliente y el año.
SELECT o.CustomerID, 
       YEAR(o.OrderDate) AS Año, 
       COUNT(o.OrderID) AS NumeroOrdenes
FROM Orders o
GROUP BY o.CustomerID, YEAR(o.OrderDate)
ORDER BY o.CustomerID, Año;

-- 46. Contar el número de órdenes que se han realizado por años y meses, luego debe ser ordenado por año y por mes.
SELECT YEAR(OrderDate) AS Año, 
       MONTH(OrderDate) AS Mes, 
       COUNT(OrderID) AS NumeroOrdenes
FROM Orders
GROUP BY YEAR(OrderDate), MONTH(OrderDate)
ORDER BY Año, Mes;

-- 47. Seleccionar el nombre de la compañía del cliente, código de la orden de compra, fecha de la orden de compra, código del producto, 
-- cantidad pedida del producto, nombre del producto, el nombre de la compañía proveedora y la ciudad del proveedor.
SELECT c.CompanyName AS Cliente, 
       o.OrderID AS CodigoOrden, 
       o.OrderDate AS FechaOrden, 
       p.ProductID AS CodigoProducto, 
       od.Quantity AS CantidadPedida, 
       p.ProductName AS NombreProducto, 
       s.CompanyName AS Proveedor, 
       s.City AS CiudadProveedor
FROM Orders o
JOIN Customers c ON o.CustomerID = c.CustomerID
JOIN OrderDetails od ON o.OrderID = od.OrderID
JOIN Products p ON od.ProductID = p.ProductID
JOIN Suppliers s ON p.SupplierID = s.SupplierID;

-- 48. Seleccionar el nombre de la compañía del cliente, nombre del contacto, código de la orden de compra, fecha de la orden de compra, 
-- código del producto, cantidad pedida del producto, nombre del producto y el nombre de la compañía proveedora, usando JOIN.
-- Solamente las compañías proveedoras que comienzan con la letra de la A hasta la letra G, además la cantidad pedida del producto debe estar entre 23 y 187.
SELECT c.CompanyName AS Cliente, 
       c.ContactName AS NombreContacto, 
       o.OrderID AS CodigoOrden, 
       o.OrderDate AS FechaOrden, 
       p.ProductID AS CodigoProducto, 
       od.Quantity AS CantidadPedida, 
       p.ProductName AS NombreProducto, 
       s.CompanyName AS Proveedor
FROM Orders o
JOIN Customers c ON o.CustomerID = c.CustomerID
JOIN OrderDetails od ON o.OrderID = od.OrderID
JOIN Products p ON od.ProductID = p.ProductID
JOIN Suppliers s ON p.SupplierID = s.SupplierID
WHERE s.CompanyName REGEXP '^[A-G]' 
AND od.Quantity BETWEEN 23 AND 187;

