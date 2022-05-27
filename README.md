<!-- LOGO -->

<p allign="center">
  <img width="400" height="240" src='./assets/bookstore.jpg'>
</p>

<!-- INDICE -->
<details>
  <summary>Indice</summary>
  <ol>
    <li>
      <a href="#introduccion">Introducción</a>
      <ul>
        <li><a href="#hecho-con">Tecnologías</a></li>
      </ul>
    </li>
    <li>
      <a href="#descripción-del-proyecto">Descripción del proyecto</a>
      <ul>
        <li><a href="#instalación">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#uso-endpoints">Endpoints</a></li>
    <li><a href="#licencia">Licencia</a></li>
    <li><a href="#contacto">Contacto</a></li>
    <li><a href="#conociemientos">Conocimiento</a></li>
  </ol>
</details>

<!-- SOBRE EL PROYECTO -->

## Introducción

En este proyecto enfocado al backend combinamos nuestros conocimientos
adquiridos en las tecnologías NodeJS, Express, MySql y Sequelize.
Enfocamos el proyecto hacia la parte del backend, que consistirá en una tienda online(e-commerce).
En este caso hemos optado por basarnos en una tienda de libros, donde los usuarios pueden registrarse,
iniciar sesión, consultar los libros que están a la venta y realizar pedidos.

### Tecnologías

Aquí presentamos las herramientas empleadas en este proyecto:

- [Node.js](https://node.org/)
- [Sequelize](https://sequelize.org/)
- [Multer](https://github.com/expressjs/multer)
- [MySql](https://MySql.org/)
- [Postman](https://www.postman.com/)
- [JWT](https://jwt.io//)

<!-- DESCRIPCION -->

## Descripción del proyecto

Dadas las necesidades del proyecto, hemos desarrollado una 
API REST que cumple las siguintes características:

- Permite registrar usuarios haciendo uso de Bcrypt.
- Login de usuarios (sirviendonos de Tokens y Middlewares).
- Que sea capaz de crear un CRUD.
- Cuenta con relaciones Many to Many y One to Many.
- Utilización de seeders.

### Instalación

1. Para la instalación de la aplicación has de clonarte el siguiente repositorio:

   ```sh
   git clone https://github.com/Santiremix/E-Commerce
   ```

2. Tambien has de instalar las dependencias del proyecto:
   ```sh
   npm install
   ```

<!-- EJEMPLOS DE USO -->

## Uso Endpoints

Esta es una lista de los Endpoints del proyecto que puedes ejecutar en Postman:

| method | endpoint                       | role    | use                                   |
| ------ | ------------------------------ | ------- | ------------------------------------- |
| POST   | `/users/createUser`            | user    | Crear nuevo usuario                   |
| POST   | `/users/login`                 | user    | Login                                 |
| DELETE | `/users/logout`                | user    | Logout                                |
| GET    | `/users/UserOrder`             | user    | Pedidos por usuario                   |
| POST   | `/books/addBooks`              | manager | Añadir libros a base datos            |
| GET    | `/books/getBooks`              | user    | Recibe lista de libros                |
| DELETE | `/books/deleteBook/id/:id`     | manager | Borrar libro por id                   |
| GET    | `/books/id/:id`                | user    | Buscar libro por id                   |
| PUT    | `/books/:id`                   | admin   | Actualizar datos de un libro          |
| GET    | `/books/search/title/:title`   | user    | Buscar libros por título              |
| GET    | `/books/search/price/:price`   | user    | Buscar libros pro precio              |
| GET    | `/books/getBooksOrdered`       | user    | Recibe lista libros ordenado          |
| POST   | `/orders/createOrder`          | user    | Crear pedido                          |
| GET    | `/orders/getAll`               | user    | Recibe lista de pedidos               |
| POST   | `/genres/addGenre`             | manager | Añadir género                         |
| GET    | `/genres/getGenreById/:id`     | user    | usca género por id                    |
| GET    | `/genres/getGenreByName/:name` | user    | Busca género por nombre               |
| GET    | `/genres/getGenre`             | user    | Lista total de géneros con sus libros |
| GET    | `/genres/getAll`               | user    | Lista total de géneros                |
| DELETE | `/genres/deleteGenre/:id`      | manager | Borra un género por su id             |

<!-- ROADMAP -->

## Experiencia

- [x] Hemos perfeccinado el trabajo en equipo mediante Git haciendo uso de distintas ramas de desarrollo para cada aspecto requerido en el proyecto.
- [x] Nos hemos servido de Trello para organizar la distribución del trabajo y optimizar el proceso.
- [x] Hemos perfeccionado la realización de pruebas API con el uso Psotman.

<!-- LICENCIA -->

## Licencia

Este programa es de código abierto y puede ser utilizado por cualquier persona que lo desee.

<!-- CONTACTO -->

## Contacto

Santiago - [gitHub](https://github.com/Santiremix)

Jorge - [gitHub](https://github.com/yorch82)

<!-- CONCOCIMIENTOS -->

## Conocimientos

- [x] Uso de Node.js
- [x] Sequelize
- [x] Relaciones BBDD
- [x] Creación CRUD
- [x] Utilización Seeders
- [x] Modelo Vista Cliente (MVC)
- [x] Uso de ramas en Git
- [x] Gestor de paquetes NPM
