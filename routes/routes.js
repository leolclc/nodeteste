const { Router } = require('express');
const PokemonController = require('../controllers/PokemonController');
const routes = Router();

routes.get('/', (req,res) => {
    res.status(200).json({mensagem: "Hello World"})
});

routes.get('/pokemons', PokemonController.getAll);
routes.get('/pokemon/:id', PokemonController.getOne);
routes.post('/pokemon', PokemonController.create);
routes.put('/pokemon/:id', PokemonController.update);
routes.delete('/pokemon/:id', PokemonController.delete);
routes.get('/pokemonsNome', PokemonController.getAllByNome);


/* get, put, delete, update FIND */

module.exports = routes;