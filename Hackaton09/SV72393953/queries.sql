-- 1. Seleccionar los clientes que viven en el país de "usa"
Select * from Customers where country = 'USA';

-- 2. Seleccionar los proveedores que viven en la ciudad de "BERLIN"
Select * from Suppliers where city = 'Berlin';

-- 3. Seleccionar los empleados con código 3,5 y 8
Select * from employees where EmployeeID in (3,5,8);

-- 4. Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5
Select * from products where SupplierID in (1,3,5) and Unit >0;

-- 5. Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90
Select * from products where Price between 20 and 90;

-- 6. Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997
Select * from orders where OrderDate between '1997-01-01' AND '1997-07-15';

-- 7. Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8
Select * from orders where OrderDate between '1997-01-01' AND '1997-12-31' and EmployeeID in (1,3,4,8);

-- 8. Mostrar las ordenes hechas en el año 1996
Select * from orders where OrderDate between '1996-01-01' AND '1996-12-31';

-- 9. Mostrar las ordenes hechas en el año 1997 ,del mes de abril
Select * from orders where year(OrderDate)=1997 and month(OrderDate)=4;

-- 10. Mostrar las ordenes hechas el primero de todos los meses, del año 1998
Select * from orders where Year(OrderDate) = 1998 and day(OrderDate)=1;

-- 11. Mostrar todos los clientes que no tienen fax
Select * from customers where PostalCode ="";

-- 12. Mostrar todos los clientes que tienen fax
Select * from customers where PostalCode != "";

-- 13. Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece.
Select 
P.ProductName, P.Price,OD.Quantity,C.CategoryName
from orderdetails OD
inner join Products P
on OD.ProductId = P.ProductId
inner join Categories C
on C.CategoryId = P.CategoryId;

-- 14. Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora.
Select 
P.ProductName,P.Price,S.SupplierId,S.ContactName
from Products P
inner join Suppliers S
on P.SupplierId = S.SupplierId;

-- 15. Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto.
Select 
P.ProductID,P.ProductName,P.price,P.unit,P.price* P.unit as total 
from products P
inner join orderdetails OD
on P.ProductID = OD.ProductID
inner join Orders O
on OD.OrderID = O.OrderID
group by P.ProductID,P.ProductName;


-- 16. Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo.

Select 
O.OrderID,P.ProductID,P.Price,E.EmployeeID,E.LastName,E.FirstName
from products P
inner join OrderDetails OD
on P.ProductId = OD.ProductID
inner join Orders O
on O.OrderID = OD.OrderID
inner join Employees E
on E.EmployeeID = O.EmployeeID;

-- 17 . Mostrar los 10 productos con menor stock
SELECT ProductId, ProductName, Unit
FROM products
ORDER BY Unit ASC
LIMIT 10;
-- 18. Mostrar los 10 productos con mayor stock
SELECT ProductId, ProductName, Unit
FROM products
ORDER BY Unit DESC
LIMIT 10;

-- 19. Mostrar los 10 productos con menor precio
Select * from products order by Price asc limit 10;

-- 20. Mostrar los 10 productos con mayor precio
Select * from products order by Price desc limit 10;

-- 21. Mostrar los 10 productos más baratos
Select * from products order by Price asc limit 10;

-- 22. Mostrar los 10 productos más caros
Select * from products order by Price desc limit 10;

-- 23. Seleccionar todos los campos de la tabla clientes,ordenar por compania
Select CustomerID,CustomerName,Address,City,PostalCode,Country 
from customers 
group by CustomerID,CustomerName;

-- 24. Seleccionar todos los campos de clientes,cuya compania empiece con la letra B y pertenezcan a UK ,ordenar por nombre de la compania
Select 
* 
from customers 
where CustomerName like 'B%' and Country='UK';

-- 25. Seleccionar todos los campos de productos de las categorias 1,3 y 5 ,ordenar por categoria
Select * from products where CategoryId in(1,3,5) order by CategoryId;

-- 26. Seleccionar los productos cuyos precios unitarios estan entre 50 y 200
Select * from products where Price between 50 and 200 order by Price;

-- 27. Visualizar el nombre y el id de la compania del cliente,fecha,precio unitario y producto de la orden

Select 
O.OrderID,C.CustomerID,C.CustomerName ,O.orderDate,P.price  
from customers C
inner join Orders O
on C.customerID = O.customerID
inner join OrderDetails OD
on OD.OrderID = O.OrderID
inner join Products P
on P.ProductID = OD.ProductID;

-- 28. Visualizar el nombre de la categoria y el numero de productos que hay por cada categoria.
select 
C.CategoryName,Count(P.ProductID) as conteo
from categories C
inner join products P
on c.CategoryID = P.CategoryID
group by C.CategoryName;

-- 29. Seleccionar los 5 productos mas vendidos

Select 
OD.productId,P.productName,count(OD.productID) as conteo
from products P
inner join OrderDetails OD
on P.productId = OD.productID
group by OD.productId
order by count(OD.productID)  desc
limit 5;

-- 30. Seleccionar los jefes de los empleados
Select * from employees;

-- 31. Obtener todos los productos cuyo nombre comienzan con M y tienen un precio comprendido entre 28 y 129
Select 
* 
from products 
where ProductName like 'M%'
and Price between 28 and 129
order by Price;

-- 32. Obtener todos los clientes del Pais de USA,Francia y UK
Select 
* 
from customers 
where Country in("USA","Francia","UK");

-- 33. Obtener todos los productos descontinuados o con stock cero.
Select 
* 
from products 
where Unit=" ";

-- 34. Obtener todas las ordenes hechas por el empleado King Robert

Select 
* 
from orders O
inner join employees E
on O.EmployeeID = E.EmployeeID
where E.LastName='King' and E.FirstName='Robert' ;


-- 35. Obtener todas las ordenes por el cliente cuya compania es "Que delicia"

Select 
* 
from orders O
inner join Customers C
on O.CustomerID = C.CustomerID
where C.CustomerName='Que Delicia';

-- 36. Obtener todas las ordenes hechas por el empleado King Robert,Davolio Nancy y Fuller Andrew
Select 
* 
from Employees E
inner join Orders O
on E.EmployeeID = O.EmployeeID
where LastName in ("King","Davolio","Fuller")
and FirstName in ("Robert","Nancy","Andrew");

-- 37. Obtener todos los productos(codigo,nombre,precio,stock) de la orden 10257
Select 
P.ProductID,P.ProductName,P.Unit,P.Price,OD.OrderId
from products P
inner join orderdetails OD
on P.ProductID = OD.ProductID
where OrderID=10257;

-- 38. Obtener todos los productos(codigo,nombre,precio,stock) de las ordenes hechas desde 1997 hasta la fecha de hoy.
Select 
P.ProductID,P.ProductName,P.price,P.unit
from products p
inner join orderdetails od
on p.productid = od.ProductID
inner join Orders O
on O.OrderID = OD.OrderID
where O.Orderdate between '1997-01-01' and curdate()
group by P.ProductID,P.ProductName;

-- 39. Calcular los 15 productos mas caros

Select * from products order by Price desc limit 15;

-- 40. Calcular los 5 productos mas baratos
Select * from products order by Price  limit 5;

-- 41. Obtener el nombre de todas las categorias y los nombres de sus productos,precio y stock.
Select 
C.CategoryName,P.ProductName ,P.price,P.unit
from categories C
inner join Products P
on C.CategoryID = P.CategoryID
group by C.CategoryName,P.ProductName,P.price,P.unit;



-- 42. Obtener el nombre de todas las categorias y los nombres de sus productos,solo los productos que su nombre no comience con la letra P
Select 
* 
from products p
inner join categories c
on p.CategoryID = c.CategoryID
where P.ProductName not like 'P%';

-- 43. Calcular el stock de productos por cada categoria.Mostrar el nombre de la categoria y el stock por categoria.
Select 
C.CategoryName,count(P.productid) as stock 
from products P
inner join categories C
on P.categoryId = C.categoryID
group by C.CategoryName;

-- 44. Obtener el Nombre del cliente,Nombre del Proveedor,Nombre del empleado y el nombre de los productos que estan en la orden 10794
Select 
C.customername,S.suppliername,E.LastName,E.FirstName,P.Productname
from suppliers S
inner join Products P
on S.supplierID = P.supplierID
inner join OrderDetails OD
on OD.productID = P.productID
inner join Orders O
on o.orderid = od.orderid
inner join Customers C
on C.customerid = O.customerid
inner join Employees E
on E.employeeid = O.employeeid
where OD.OrderID=10794;

-- 45. Mostrar el numero de ordenes de cada uno de los clientes por año,luego ordenar codigo del cliente y el año.

SELECT 
    C.customerid, 
    YEAR(O.orderdate) AS año,
    COUNT(*) AS numero_ordenes
FROM 
    orders O
    inner join Customers C
    on C.customerid = O.customerid
GROUP BY 
   C.customerid, YEAR(O.orderdate)
ORDER BY 
    C.customerid, año;

-- 46. Contar el numero de ordenes que se han realizado por años y meses ,luego debe ser ordenado por año y por mes.

SELECT 
    YEAR(orderdate) AS año, 
    MONTH(orderdate) AS mes, 
    COUNT(*) AS total_ordenes
FROM 
    orders
GROUP BY 
    YEAR(orderdate), MONTH(orderdate)
ORDER BY 
    año, mes;

-- 47. Seleccionar el nombre de la compañía del cliente,él código de la orden de compra,la fecha de la orden de compra, código del producto, cantidad pedida del producto,nombre del producto, el nombre de la compañía proveedora y la ciudad del proveedor ,usar Join
Select 
C.customername,O.orderid,o.orderdate,p.productid,p.productname,c.customername,s.city
from customers C
inner join Orders O
on C.customerid = O.customerid
inner join OrderDetails OD
on OD.orderid = O.orderid
inner join Products P
on P.productid = OD.productid
inner join Suppliers S
on S.supplierid = P.supplierid;


-- 48. Seleccionar el nombre de la compañía del cliente, nombre del contacto, el código de la orden de compra, la fecha de la orden de compra, el código del producto,cantidad pedida del producto, nombre del producto y el nombre de la compañía proveedora, usas JOIN.Solamente las compañías proveedoras que comienzan con la letra de la A hasta la letra G,además la cantidad pedida del producto debe estar entre 23 y 187.


SELECT 
    C.CustomerName,            
    C.ContactName AS ContactName,  
    O.OrderID,                 
    O.OrderDate,               
    OD.ProductID,              
    OD.Quantity,               
    P.ProductName,            
    S.SupplierName             
FROM 
    Customers C
INNER JOIN 
    Orders O ON C.CustomerID = O.CustomerID
INNER JOIN 
    OrderDetails OD ON OD.OrderID = O.OrderID
INNER JOIN 
    Products P ON P.ProductID = OD.ProductID
INNER JOIN 
    Suppliers S ON S.SupplierID = P.SupplierID
WHERE 
    (S.SupplierName LIKE 'A%' OR S.SupplierName LIKE 'B%' OR S.SupplierName LIKE 'C%' 
    OR S.SupplierName LIKE 'D%' OR S.SupplierName LIKE 'E%' OR S.SupplierName LIKE 'F%' 
    OR S.SupplierName LIKE 'G%')
    AND OD.Quantity BETWEEN 23 AND 187
ORDER BY 
    C.CustomerID;










