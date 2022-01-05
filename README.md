# Studio Goldney

This is a project done completely with React JS in the Coderhouse course.

## Installation, Execution

In order to run the program you must ...

### `npm i or npm install`

With npm i or npm install you will be able to install all the necessary dependencies to make the application work.

### `npm start`

With npm start, you can start the application, in general, it will open only after a few minutes, if not, entering [http: // localhost: 3000], you will see the result.

### `Cntrl + C`

With control + C, you can end the execution of the program.

## What programming languages did I use to do this?

The programming languages I used were:

- Html
- Css / Sass
- JavaScript
- React JS
- Node JS (For server execution)

The database used is:

- Firebase

### `.env`

Add an .env with the firebase data to make the app work.

## Text for example

-   REACT_APP_API_KEY=OIJASODIJasIsOSeaHQ
-   REACT_APP_AUTH_DOMAIN=SDOKASOD.firebaseapp.com
-   REACT_APP_PROJECT_ID=APOSKDAPOSDK
-   REACT_APP_STORAGE_BUCKET=APOSKDPOASKDO.appspot.com
-   REACT_APP_MESSAGING_SENDER_ID=102830192830912
-   REACT_APP_APP_ID=1:1982301298:web:e572ff92ce82d1ee79fc67

### APP routes

- / -> ItemListContainer -> is the main router.
- / category /: categoryId -> ItemListContainer -> is the router for specific product categories.
- / item /: paramId -> ItemDetailContainer -> is the product detail router.
- / cart -> CartContainer -> is the shopping cart router.
- / checkout -> CheckoutContainer -> is the checkout router.
- / dashboard -> DashboardContainer -> is the dashboard router.

### What data does an item have when adding it to the cart?

The data they have when you add it to the cart, is an object of {item, count};

- Item -> is the product object that was added to the cart.
- Count -> is the number of products that were added to the cart.

### What data does it have when you generate an order?

The data that an order has are:

- buyer -> is an object with the data of the user who made the order.
- items -> is an object of {item, count};
- total -> the total price purchased.

## How does the project work?

### `ItemListContainer`

The ItemListContainer contains a list of all the products found in the product.

### `ItemDetailContainer`

The ItemDetailContainer contains the details of a specific product, which is received by ID through the `useParams` of React Router.

### `CartViewContainer`

The cartViewContainer contains a list of all the products that are in the shopping cart that the user chose.

### `CheckoutContainer`

The checkoutContainer contains a form with restrictions to register the user's data and thus add it to the database.

### `DashboardContainer`

The DashboardContainer contains a list of all the products that the user bought through their email.

## Autor

Alejo Tomás Clifton Goldney, University Programming Technician, 21 years old. 