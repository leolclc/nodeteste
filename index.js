/*
const express = require('express');
const app = express();
// const routes = require('./routes/routes');
const { pokemons } = require('./models');

app.use(express.urlencoded({extended: false}));

app.get('/', (req,res) => {
    res.json({mensagem: "Hello World"});

});

app.post('/pokemons', (req,res)=>{
  

    let Pokemons = {
        numero: Number(req.body.numero),
        nome: req.body.nome,
        tipo: req.body.tipo,
        geracao: req.body.geracao
};

    pokemons.create(Pokemons);

        res.statusCode(200).json(Pokemons);
   
})

    

// app.use(routes);

app.listen(3000);

*/
const express = require('express');
const routes = require('./routes/routes');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(routes);

app.listen(3000);