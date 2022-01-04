# Studio Goldney

Este es un proyecto realizado de forma completa con React JS en el curso de Coderhouse.

## Instalación, Ejecución

Para poder ejecutar el programa deberás...

### `npm i o npm install`

Con npm i o npm install podrás instalar todas las dependecias necesarias para hacer funcionar la aplicación.

### `npm start`

Con npm start, podrás iniciar la aplicación, por lo general, se te abrirá sólo al cabo de unos minutos, si no es así, entrando a [http://localhost:3000], podrás ver el resultado.

### `Cntrl + C`

Con control + C, podrás finalizar la ejecución del programa.

## ¿Qué lenguajes de programación utilicé para realizar esto?

Los lenguajes de programación que utilicé fueron:

-   Html
-   Css/Sass
-   JavaScript
-   React JS
-   Node JS (Para la ejecución del servidor)

La base de datos usada es:

-   Firebase

### `.env`

Agregar un .env con los datos de firebase para hacer funcionar la aplicación.

## Texto por ejemplo

REACT_APP_API_KEY=OIJASODIJasIsOSeaHQ
REACT_APP_AUTH_DOMAIN=SDOKASOD.firebaseapp.com
REACT_APP_PROJECT_ID=APOSKDAPOSDK
REACT_APP_STORAGE_BUCKET=APOSKDPOASKDO.appspot.com
REACT_APP_MESSAGING_SENDER_ID=102830192830912
REACT_APP_APP_ID=1:1982301298:web:e572ff92ce82d1ee79fc67

### Rutas de la APP

-   / -> ItemListContainer -> es el router principal.
-   /category/:categoryId -> ItemListContainer -> es el router de categorias de productos específicos.
-   /item/:paramId -> ItemDetailContainer -> es el router de detalle de producto.
-   /cart -> CartContainer -> es el router de carrito de compras.
-   /checkout -> CheckoutContainer -> es el router de checkout.
-   /dashboard -> DashboardContainer -> es el router de dashboard.

### ¿Qué datos tiene un item al agregarlo al carrito?

Los datos que tienen cuando lo agregas al carrito, es un objeto de {item, count};

-   Item\* -> es el objeto de producto que se agregó al carrito.
-   Count\* -> es el número de productos que se agregaron al carrito.

### ¿Qué datos tiene cuando generas una orden?

Los datos que tiene una orden son:

- buyer -> es un objeto con los datos del usuario que realizó la orden.
- items -> es un objeto de {item, count};
- total -> el precio total comprado.

## ¿Cómo funciona el proyecto?

### ItemListContainer

El ItemListContainer, contiene una lista de todos los productos que se encuentran en producto.

### ItemDetailContainer

El ItemDetailContainer, contiene los detalles de un producto específico, que este, es recibido por ID mediante el `useParams` de React Router.

### cartViewContainer

El cartViewContainer, contiene una lista de todos los productos que se encuentran en el carrito de compras que el usuario eligió.

### CheckoutContainer

El checkoutContainer, contiene un formulario con restricciones para que se registren los datos del usuario y así sumarlo a la base de datos.

### DashboardContainer

El DashboardContainer, contiene una lista de todos los productos que el usuario compró mediante su email.

## Autor

Alejo Tomás Clifton Goldney, Técnico Universitario en Programación, 21 años.
