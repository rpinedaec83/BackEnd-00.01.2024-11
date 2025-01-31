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

