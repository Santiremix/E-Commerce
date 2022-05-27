const { Book, Genre, Sequelize } = require("../models/index");
const { Op } = Sequelize;

const BookController = {
    addBook(req, res, next) {
      if (req.file)req.body.Image = (req.file.destination + req.file.filename);
      console.log(req.file)  
      Book.create({...req.body })
            .then(book => {
              book.addGenre(req.body.GenreId)
              res.status(201).send({ message: 'Libro añadido exitosamente.', book })
            })
            .catch(error => {
              error.origin = 'Book';
              next(error);              
          });
    },
    getAll(req, res) {
        Book.findAll({
          include: [{model: Genre, through: { attributes: [] } }],
        })
          .then((books) => res.send(books))
          .catch((err) => {
            console.log(err);
            res.status(500).send({
              message: "Ha habido un problema al cargar los libros",
            });
          });
    },
    async delete(req, res) {
        await Book.destroy({
          where: {
            id: req.params.id,
          },
        });
        res.send("El libro ha sido eliminada con éxito");
      },
    getById(req, res) {
    Book.findByPk(req.params.id, {
      include: [],
    })
      .then((book) => res.send(book))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar el libro",
        });
      });
  },
  getByName(req, res) {
    Book.findAll({
      where: {
        title: {
          [Op.like]: `%${req.params.title}%`,
        },
      },
      include: [],
    })
      .then((post) => res.send(post))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar el libro",
        });
      });
  },
  getByPrice(req, res) {
    Book.findAll({
      where: {
        price: {
          [Op.like]: `%${req.params.price}%`,
        },
      },
      include: [],
    })
      .then((post) => res.send(post))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar el libro",
        });
      });
  },
  
  getAllOrdered(req, res) {
    Book.findAll({
      order: [['price', 'DESC']]
    })
      .then((books) => res.send(books))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar los libros",
        });
      });
  },
  async update(req, res) {
    try {
      await Book.update(
        { ...req.body },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      const book = await Book.findByPk(req.params.id);
      book.setGenres(req.body.GenreId); //actualiza el género en la tabla intermedia
      res.send("Libro actualizado con éxito");
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "no ha sido posible actualizado el libro" });
    }
  }
}

module.exports = BookController