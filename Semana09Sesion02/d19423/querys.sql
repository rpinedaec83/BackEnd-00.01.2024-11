-- use Northwind;

select * from Customers;

select 
CustomerName,
Address
from Customers;

SELECT distinct Country FROM Customers;


SELECT COUNT(DISTINCT Country) FROM Customers;

SELECT * FROM Customers
WHERE Country='Mexico';

select * from Products;

select * from Products
where Price > 30;

select * from Products
where Price >= 30;

select * from Products
where Price < 30;

select * from Products
where Price <= 30;


select * from Products
where Price > 30 and Price < 50;


select * from Products
where Price between 30 and  50;

select * from Orders;



select * from Orders
where OrderDate between '1996-07-01' and '1996-07-31';

Select * from Products
where CategoryID not in (2,4, 6);

select * from Employees;


Select * from Products
where CategoryID <> 5;


SELECT * FROM Products
ORDER BY Price;

SELECT * FROM Products
ORDER BY Price desc;

SELECT * FROM Products
ORDER BY ProductName;

SELECT * FROM Customers
ORDER BY Country, CustomerName;

SELECT * FROM Customers
ORDER BY Country desc, CustomerName asc;


SELECT *
FROM Customers
WHERE Country = 'Germany' OR Country = 'Spain';

SELECT * FROM Customers
WHERE NOT Country = 'Spain';

SELECT * FROM Customers
LIMIT 3;

SELECT * FROM Customers
WHERE Country='Germany'
LIMIT 3;

Select * from Products
order by Price desc
limit 5;

select max(price) from products;
select min(price) from products;
select count(price) from products;
select avg(price) from products;
select sum(price) from products;


SELECT * FROM Customers
WHERE city LIKE 'L_nd__';

SELECT * FROM Customers
WHERE city LIKE '%L%';

SELECT * FROM Customers
WHERE CustomerName LIKE 'La%';

SELECT * FROM Customers
WHERE CustomerName LIKE 'a%' OR CustomerName LIKE 'b%';

SELECT * FROM Customers
WHERE CustomerName LIKE '%a';

SELECT * FROM Customers
WHERE CustomerName LIKE 'a__%';


SELECT * FROM Customers
WHERE CustomerName LIKE '_r%';


select 
customerId as ID
,CustomerName as Nombre
,contactName as 'Nombre del Contacto'
,Address as Direccion
,City as Ciudad
,PostalCode as 'Codigo Postal'
,Country as Pais

from Customers;

select 
SU.Address,
SU.City
from Suppliers SU;



Select * from Orders O
inner join Customers C on O.CustomerID = C.CustomerId
inner join Employees E on O.EmployeeID = E.EmployeeID
inner join Shippers S on O.shipperID = S.ShipperID;

Select 
o.orderid as 'Numero de Orden',
o.orderdate as Fecha,
C.CustomerName Nombre,
C.ContactName Contacto,
concat(E.firstName, ' ', E.LastName) as Vendedor,
S.ShipperName as Delivery
 from Orders O
inner join Customers C on O.CustomerID = C.CustomerId
inner join Employees E on O.EmployeeID = E.EmployeeID
inner join Shippers S on O.shipperID = S.ShipperID;



SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
where Orders.OrderID is null
ORDER BY Customers.CustomerName
;


SELECT Orders.OrderID, Employees.LastName, Employees.FirstName
FROM Orders
RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
where Orders.OrderID is null
ORDER BY Orders.OrderID;



SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country;


SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
ORDER BY COUNT(CustomerID) DESC;

SELECT Shippers.ShipperName, COUNT(Orders.OrderID) AS NumberOfOrders FROM Orders
LEFT JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID
GROUP BY ShipperName;


SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5;

SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5
ORDER BY COUNT(CustomerID) DESC;

SELECT Employees.LastName, COUNT(Orders.OrderID) AS NumberOfOrders
FROM (Orders
INNER JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID)
GROUP BY LastName
HAVING COUNT(Orders.OrderID) > 10;