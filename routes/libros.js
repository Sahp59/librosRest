var express = require('express');
var router = express.Router();

/* GET users listing. */
var tablaLibros2 = [
    {'id': 1, 'titulo': 'Harry Potter', 'autor': 'J.K. Rowling'},
    {'id': 2, 'titulo': 'El Señor de los Anillos', 'autor': 'J.R.R. Tolkien'},
    {'id': 3, 'titulo': 'El Alquimista', 'autor': 'Paulo Coelho'},
    {'id': 4, 'titulo': 'El Código da Vinci', 'autor': 'Dan Brown'}
];
router.get('/', function (req, res, next) {
    res.status(200).json(tablaLibros2);
});

router.get('/:idLibro', (req, res, next) => {
    var id = req.params.idLibro;
    res.status(200).json(tablaLibros2[id - 1]);
});

router.post('/:idLibro', (req, res, next) => {
    res.status(404).json({'error': 'Operación no permitida'});
});

router.post('/', (req, res, next) => {
    console.log(req.body);
    var libro = {
        'id': tablaLibros2[tablaLibros2.length - 1]['id'] + 1,
        'titulo': req.body.titulo,
        'autor': req.body.autor
    };
    tablaLibros2.push(libro);
    res.status(200).json(tablaLibros2[tablaLibros2.length - 1]);
});

router.patch('/:idLibro', (req, res, next) => {
    var id = req.params.idLibro;
    tablaLibros2[id - 1] ['titulo'] = req.body.titulo;
    tablaLibros2[id - 1] ['autor'] = req.body.autor;
    res.status(200).json({'mensaje': 'Actualizado'});
});

router.put('/:idLibro', (req, res, next) => {
    var id = req.params.idLibro;
    tablaLibros2[id - 1] ['titulo'] = req.body.titulo;
    tablaLibros2[id - 1] ['autor'] = req.body.autor;
    res.status(200).json({'mensaje': 'Actualizado'});
});

module.exports = router;
