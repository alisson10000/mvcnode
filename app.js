// app.js
const express = require('express');
const handlebars = require('express-handlebars');
const sequelize = require('./config/database');
const funcionariosController = require('./controllers/funcionariosController');

const app = express();
const PORT = 3120;

// Configurar Handlebars
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' ,runtimeOptions: {
  allowProtoPropertiesByDefault: true,
  allowProtoMethodsByDefault: true,
}}));
app.set('view engine', 'handlebars');
layoutsDir: __dirname + '/views/layouts'

// Configurar Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Configurar Rotas
app.use('/funcionarios', funcionariosController);

app.get("/home",function(req, res){
res.send("página principal")
})


// Configurar Servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
