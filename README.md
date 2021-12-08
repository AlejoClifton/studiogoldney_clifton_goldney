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

* Html
* Css/Sass
* JavaScript
* React JS
* Node JS (Para la ejecución del servidor)


## ¿Cómo funciona el proyecto?

### App.JS

El app.js tiene todos los routers del proyecto, el `ItemListContainer` tiene 2 parametros,
uno es el `/` y el otro es el `/category/:categoryId`.
Y por otro lado está el `ItemDetailContainer` que tiene un parametro `/item/:paramId`.

* / -> ItemListContainer -> es el router principal.
* /category/:categoryId -> ItemListContainer -> es el router de categorias de productos específicos.
* /item/:paramId -> ItemDetailContainer -> es el router de detalle de producto.

### Navbar

El navbar redirecciona a las diferentes categorías de productos.

#### `useEffect`

El useEffect llama al método `getCategories` del category.js para traer todas las categorías de productos, estas se las mandamos a `NavBarList`.

#### `NavBarList`

NavBarList es una función que recibe un array de categorías de productos y las manda a como map al componente `NavBarCategory` además de mostrar el carrito y el botón `Studio Goldney` como botón "home" para volver al inicio `/`.

#### `NavBarCategory`

Este componente recibe cada objeto recibido por el map y lo transforma en un link con una redirección de categoría y su nombre.

### ItemListContainer

El ItemListContainer, contiene una lista de todos los productos que se encuentran en producto.js, también recibe un ID mediante el `useParams` de React Router.

#### `useEffect`

El useEffect llama al método `getCategories` del producto.js lo cual suceden 2 cosas:

* Si le mandamos un ID referencial, traerá todos los productos que se encuentren en esa categoría.
* Si no le mandamos un ID, por defecto es vacío, al ser vacío traerá todos los productos sin importar la categoría.

En caso de haber recibido el ID, se lo mandamos al `ItemList` además del resultado de la promesa para que lo renderice.
En caso que no, de igual forma mandamos el resultado de la promesa le mandamos al `ItemList` para que lo renderice.

También hice a propósito que en la categoría gabinetes no haya ningún producto, por lo tanto, si el ID es igual a gabinetes, no se renderizará nada y aparecerá un mensaje de cargando infinito.

#### `ItemList`

Recibe los productos del `ItemListContainer` los coloca en un map y dentro coloca al `Item` para que lo renderice además de asignarle una key para diferenciar cada uno de ellos sumado a un prop de producto con el item.

#### `Item`

El Item recibe el producto luego se renderiza con datos necesarios para mostrar en la lista y un botón Link para que al hacer click en él, se redireccione a la página de detalle del producto `ItemDetailContainer`.

### ItemDetailContainer

El ItemDetailContainer, contiene los detalles de un producto específico, que este, es recibido por ID mediante el `useParams` de React Router.

#### `useEffect`

El useEffect llama al método `getItemById` del producto.js y le mandamos el Id recibido por el `useParams`, el resultado de la promesa se la mandamos al `ItemDetail` con el producto obtenido.

#### `ItemDetail`

Recibe el producto seleccionado del `ItemDetailContainer`, Luego se renderiza con todos los datos y sus detalles correspondientes. Además de esto usamos el componente `ItemCount`
para simular la selección de cantidad del mismo producto, con su stock correspondiente. 
Los datos name, y stock, son enviados al ItemCount.

### ItemCount

El ItemCount, lo que hace es en base al stock, el contador (por defecto ponemos 1) y un nombre recibido por parámetros hace esto:

#### `handleAdd`

Esta función se encarga de aumentar el valor del contador, en caso de que el stock sea menor al stock recibido como parámetro.

#### `handleRemove`

Esta función se encarga de disminuir el valor del contador, mientras el contador sea mayor a 1.

#### `onAdd`

Esta función se encarga de mostrar una alerta, que dice "Agregada la cantidad de [aca iría el valor del contador] de [aca iría el nombre del producto recibido por parámetro]".

`Ejemplo` Agregada la cantidad de 5 de Producto 1.

### Products

Los productos por el momento, son atraídos de un array de objetos, que son llamados por los diferentes métodos:

#### `getItemById`

Este método se encarga de recibir un parámetroID de ese mismo producto. Luego lo devuelve como promesa con un delay, para simular el llamado a una base de datos.

#### `getCategory`

Este método se encarga de recibir un parámetro ID de la categoría del producto. Luego lo devuelve como promesa con un delay, para simular el llamado a una base de datos.

### Category

Las categorías como los productos, son por el momento, traídas de un array de objetos, que son llamados por el siguiente método:

#### `getCategories`

Este es el método que trae todas las categorías de los productos. Luego lo devuelve como promesa sin delay ya que es el navbar.

## Autor

Alejo Tomás Clifton Goldney, Técnico Universitario en Programación, 21 años.