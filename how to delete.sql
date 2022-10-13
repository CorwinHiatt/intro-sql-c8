--select * from customers

UPDATE public.customers
	SET  first_name='COR', last_name='HI',
	email='bro@brosiphcacode.com' , phone= '9712267777', 
	--created_at=?, updated_at=?
	updated_at=NOW()
	WHERE customer_id=1;
	
	--DELETE from customers where cutomer_id=11