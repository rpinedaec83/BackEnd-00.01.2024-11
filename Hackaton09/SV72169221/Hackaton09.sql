-- 1.  Seleccionar los clientes que viven en el país de "usa"

select * from Customers where country = 'USA';

-- 2.  Seleccionar los proveedores que viven en la ciudad de "BERLIN"

select * from suppliers where city= 'Berlin';

-- 3.  Seleccionar los empleados con código 3,5 y 8

select * from employees where EmployeeID in (3,5,8);

-- 4.  Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5

select * from products where SupplierID in (1,3,5);

-- 5.  Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90

select * from products where Price>=20 and Price<=90;

-- 6.  Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997

select * from orders where OrderDate between '1997-01-01' and '1997-07-15';

-- 7.  Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8

select * from orders where OrderDate LIKE '1997%' and EmployeeID in (1,3,4,8);

-- 8.  Mostrar las ordenes hechas en el año 1996

select * from orders where OrderDate LIKE '1996%';

-- 9.  Mostrar las ordenes hechas en el año 1997 ,del mes de abril

select * from orders where OrderDate LIKE '1997-04%';

-- 10. Mostrar las ordenes hechas el primero de todos los meses, del año 1998

select * from orders where OrderDate LIKE '1998-__-01%';

-- 11. Mostrar todos los clientes que no tienen fax

select * from employees ;

-- 12. Mostrar todos los clientes que tienen fax


-- 13. Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece.

select ProductName,Price,Unit,CategoryID from products;

-- 14. Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora.

select ProductName,Price,p.SupplierID,s.SupplierName from products p inner join suppliers s on p.SupplierID=s.SupplierID;

-- 15. Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto.

select  o.OrderID,o.ProductID,o.Quantity*p.Price as Precio,o.Quantity,p.Price as Precio_por_producto from orderdetails o inner join products p on o.ProductID=p.ProductID;

-- 16. Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo.

Select 
o.orderid as 'Numero de Orden',
o.orderdate as Fecha,
d.ProductID as 'Codigo de Producto',
p.Price as 'Precio de producto',
o.EmployeeID as 'Codigo de empleado',
concat(e.FirstName,' ',e.LastName) as 'Nombre Completo del Empleado' 

from orderdetails d
inner join orders o on d.OrderID = o.OrderID
inner join products p on d.ProductID = p.ProductID
inner join shippers s on o.ShipperID = s.ShipperID
inner join employees e on o.EmployeeID=e.EmployeeID;

-- 17. Mostrar los 10 productos con menor stock

select * from products 
order by Unit asc limit 10;

-- 18. Mostrar los 10 productos con mayor stock

select * from products 
order by Unit desc limit 10;

-- 19. Mostrar los 10 productos con menor precio

select * from products 
order by Price asc limit 10;

-- 20. Mostrar los 10 productos con mayor precio

select * from products 
order by Price desc limit 10;

-- 21. Mostrar los 10 productos más baratos

select * from products 
order by Price asc limit 10;

-- 22. Mostrar los 10 productos más caros

select * from products 
order by Price desc limit 10;

-- 23. Seleccionar todos los campos de la tabla clientes,ordenar por compania

select 
c.*,
s.SupplierName as Compania

from customers c
inner join suppliers s on c.country=s.country
Order by Compania;

-- 24. Seleccionar todos los campos de clientes,cuya compania empiece con la letra B y pertenezcan a UK ,ordenar por nombre de la compania

select * 
from customers
where CustomerName like 'B%' and Country = 'UK'
order by CustomerName asc;

-- 25. Seleccionar todos los campos de productos de las categorias 1,3 y 5,ordenar por categoria

select Description 
from categories
where CategoryID in (1,3,5)
order by CategoryID asc;

-- 26. Seleccionar los productos cuyos precios unitarios estan entre 50 y 200

select * 
from products
where Price>=50 and Price <=200;

-- 27. Visualizar el nombre y el id de la compania del cliente,fecha,precio unitario y producto de la orden
select
c.CustomerName,
c.CustomerID,
o.OrderDate,
p.Price,
p.ProductName

from orders o
inner join customers c on o.CustomerID=c.CustomerID
inner join orderdetails d on o.OrderID=d.OrderID
inner join products p on d.ProductID=p.ProductID;

-- 28. Visualizar el nombre de la categoria y el numero de productos que hay por cada categoria.

select CategoryName,
LENGTH(Description) - LENGTH(REPLACE(Description, ',', '')) + 1 AS word_count
from categories;

-- 29. Seleccionar los 5 productos mas vendidos
 
select
ProductID,
sum(Quantity) as 'Cantidad vendida'
 
from orderdetails
group by ProductID
order by 2 desc LIMIt 5;

-- 30. Seleccionar los jefes de los empleados

select 
concat(E.firstName, ' ', E.LastName) as Empleado,
s.ShipperName as Jefe

from employees e
inner join orders o on e.EmployeeID=o.EmployeeID
inner join shippers s on o.ShipperID=s.ShipperID;

-- 31. Obtener todos los productos cuyo nombre comienzan con M y tienen un precio comprendido entre 28 y 129

select
ProductName,
Price

from products
where ProductName Like 'M%' and
Price between 28 and 129
order by 2 desc;

-- 32. Obtener todos los clientes del Pais de USA,Francia y UK
	
select *

from customers
where Country in ('USA','France','UK')
order by country;

-- 33. Obtener todos los productos descontinuados o con stock cero.

select * from products;

-- 34. Obtener todas las ordenes hechas por el empleado King Robert

Select 
e.FirstName
from orders o
inner join employees e on o.EmployeeID=e.EmployeeID
where e.FirstName='King' and e.LastName='Robert';

-- 35. Obtener todas las ordenes por el cliente cuya compania es "Que delicia"

select o.*,
c.CustomerName
from orders o
inner join customers c on o.CustomerID=o.CustomerID
where CustomerName= 'Que Delicia';

-- 36. Obtener todas las ordenes hechas por el empleado King Robert,Davolio Nancy y Fuller Andrew

select o.*

from orders o
inner join employees e on o.EmployeeID=e.EmployeeID
where e.FirstName in ('King','Davolio','Fuller');

-- 37. Obtener todos los productos(codigo,nombre,precio,stock) de la orden 10257

select 
o.OrderID,
p.ProductID,
p.ProductName,
p.Price,
p.Unit

from orders o
inner join orderdetails d on o.OrderID=d.OrderID
inner join products p on d.ProductID=p.ProductID
where o.OrderID='10257';

-- 38. Obtener todos los productos(codigo,nombre,precio,stock) de las ordenes hechas desde 1997 hasta la fecha de hoy.

select p.*
from products p
inner join orderdetails d on p.ProductID=d.ProductID
inner join orders o on d.OrderID=o.OrderID
where OrderDate between '1997-01-01' and '2025-02-02';

-- 39. Calcular los 15 productos mas caros

select *
from products
order by Price desc limit 15;

-- 40. Calcular los 5 productos mas baratos

select *
from products
order by Price asc limit 5;

-- 41. Obtener el nombre de todas las categorias y los nombres de sus productos,precio y stock.

select c.*,
p.ProductName as 'Nombre de producto',
p.Price as 'Precio de producto',
p.Unit as 'Stock'  
from categories c
inner join products p on c.CategoryID=p.CategoryID;

-- 42. Obtener el nombre de todas las categorias y los nombres de sus productos,solo los productos que su nombre no comience con la letra P

select c.*,
p.ProductName as 'Nombre de producto',
p.Price as 'Precio de producto' 
from categories c
inner join products p on c.CategoryID=p.CategoryID
where p.ProductName not like 'P%';

-- 43. Calcular el stock de productos por cada categoria.Mostrar el nombre de la categoria y el stock por categoria.

select c.CategoryName,
sum(p.Unit) as 'Stock'
 
from categories c
inner join products p on c.CategoryID=p.CategoryID
group by c.CategoryName;

-- 44. Obtener el Nombre del cliente,Nombre del Proveedor,Nombre del empleado y el nombre de los productos que estan en la orden 10794

select
o.OrderID,
c.CustomerName,
s.ShipperName,
concat(E.firstName, ' ', E.LastName) as 'Nombre del empleado',
p.ProductName

from orders o
inner join shippers s on o.ShipperID=s.ShipperID
inner join employees e on o.EmployeeID=e.EmployeeID
inner join customers c on o.CustomerID=c.CustomerID
inner join orderdetails d on o.OrderID=d.OrderID
inner join products p on d.ProductID=p.ProductID
where o.OrderID=10794;

-- 45. Mostrar el numero de ordenes de cada uno de los clientes por año,luego ordenar codigo del cliente y el año.
select
CustomerID,
count(case when year(OrderDate) =1996 then OrderID else 1 end)as 'compras 1996',
count(case when year(OrderDate) =1997 then OrderID else 1 end)as 'compras 1997'
from orders 
where year(OrderDate) in (1996,1997)
group by CustomerID;

