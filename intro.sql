-- select productionname,customerid from orders 
-- where 
-- customerid = 2
-- and
--  create_time > '2022-01-01';

-- select * from orders where customerid != 2

SELECT * FROM customers inner join orders on customers.customerid = orders.customerid -- everything matching
SELECT * FROM customers full join  orders on customers.customerid = orders.customerid -- all
SELECT * FROM customers left join  orders on customers.customerid = orders.customerid -- care about customers only
SELECT * FROM customers right join orders on customers.customerid = orders.customerid -- care about orders only

SELECT * FROM customers full join orders on customers.customerid = orders.customerid
order by customers.customerid

insert into orders(create_time,production,customerid) values('2022-10-12','iphone',5)
-- select * from customers


update customers set name='corwin' where customerid=2 --update





