var express = require('express');
var router = express.Router();

/* GET users listing. */
var tablaLibros = {'id': 1, 'titulo': 'el perfume', 'autor': 'Patrik Sûskind'}
var tablaLibros2 = [
    {'id': 1, 'titulo': 'el perfume', 'autor': 'Patrik Sûskind'},
    {'id': 2, 'titulo': 'El hobit', 'autor': 'Tolkien'},
    {'id': 3, 'titulo': 'La biblia', 'autor': 'Apostoles'}
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