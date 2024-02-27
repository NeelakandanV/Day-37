1. Find all the information about each products

Ans :
db.Products.find().toArray()


2. Find the product price which are between 400 to 800

Ans :
db.Products.find({$and :[{product_price:{$gte : 400}},{product_price:{$lte : 800}}]})


3. Find the product price which are not between 400 to 600

Ans :
db.Products.find({$or :[{product_price :{$lt : 400}},{product_price:{$gt : 600}}]}).toArray()


4. List the four product which are grater than 500 in price

Ans :
db.Products.find({product_price:{$gte:500} })


5. Find the product name and product material of each products

Ans :
db.Products.find({},{product_name:1,product_material:1,_id:1}).pretty().toArray()


6. Find the product with a row id of 10

Ans :
db.Products.findOne({'id':'10'})


7. Find only the product name and product material

Ans :
db.Products.find({},{product_name:1,product_material:1,_id:0}).pretty().toArray()


8. Find all products which contain the value of soft in product material 

Ans :
db.Products.find({product_material :"Soft"}).pretty().toArray()


9. Find products which contain product color indigo  and product price 492.00

Ans :
db.Products.find({$or :[{product_price:492.00},{product_color:"indigo"}]}).pretty().toArray()


10. Delete the products which product price value are same

Ans :
db.Products.deleteMany({$or :[{product_price:36.00},{product_price:47.00}]})

productTasks> db.Products.countDocuments()
21