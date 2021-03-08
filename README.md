
# Bike rental
Used tools:

- **HTML5**
- **SASS/SCSS**
- **React JS**
- **Redux/Redux thunk**
- **Axios library for Api requests**

React project that shows simple bike rental e-commerce. 
It has 2 types of login as ordinary user and as admin when entering into login form. When user has been registered it will receive confirmation email as well to reset password if it forgets the password. 
If the user is logged as admin it is showed admin beside other pages, that has diagram with most sold/rented items, and also a list of ordinary users that can be deleted.
Users also have the possibility of login out. Login/register form has it's validation.
On bike-rental link/page are showed all bicycles in shop, with possibility to filter them based on categories.
It is also available search form for term filtering. If items are already added to cart you have the possibility
clear the cart.
By clicking on add bike button to an item on this page you are adding one bike with one day to rent.
When entering into a page of single item you have the possibility to change thw quantity of days to rent for the bicycle.
By hitting the button "ADD" you will ads that bike and entered days to basket.
Than you can go to basket in header menu. When entering the basket it is shown list of products added to cart with their total for rent.
You have possibility to delete item per item here, and also by clicking the links of the item to re-enter to single page of it 
and to modify it's quantity to rent.
When we confirm hit button you are going to checkout page, with form to enter clients data and details to rent - pick up date.
Validation it has been added, and therefore all * fields must be filled in. When clicking continue to payment you will have
the possibility to pay with cards or just to choose pick up option. By hitting buy you will finish the process to rent the bike in the shop.


#Steps to run this project:

- **git clone https://github.com/Geeeva/bike-rental.git**
- **cd bike-rental**
- **npm install**
- **npm start**

**[Demo to project](https://geeeva.github.io/bike-rental/)**