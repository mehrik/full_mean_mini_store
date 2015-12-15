My thought process in creating the SPA

Start working on server get it running
Start up an index file
    angular
    skeleton
-----------------------
Set up Angular model and routes
Start up partials
    Dashboard, Products, Orders, Customers
-----------------------
Customers
 - HTML Mockup
 - Factories
 - Controllers
 - Angular Routes
 - Server Models
 - Server Controllers
 - Server routes
 - $http.get/post connector

Orders
 - HTML Mockup
 - Factories
 - Controllers
 - Angular Routes
 - Server Models
 - Server Controllers
 - Server routes

Products
 - HTML Mockup
 - Factory
 - Controller
 - Angular routes
 - Server Models
 - Server Controllers
 - Server routes

Get products name to loop in the orders database
When adding a new order, update the quantity of product based on quantity ordered
- when product quantity reaches zero, make it say "sold out" on the products page
    - update in factory, controller, and server controller

-------------------
Dashboard
- angular routes
- create Controller, no need for factory
- controller contains all factories
-------------------
Validations
 - customer name validation
 - currently still working on name validation for customers

