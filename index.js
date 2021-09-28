const express = require("express"); // importando express
const path = require("path"); // importando o path
const app = express();
const port = 3000; // set porta

app.set("view engine", "ejs"); // set engine pra trabalhar EJS

app.use(express.static(path.join(__dirname, "public"))); //CONFIGURAR A PASTA RAIZ DE ARQUIVO ESTATICOS PARA USO DO CSS

app.get("/", function(req,res){ //GET PARA TRATAR REQUISICOES E A ROTA
    res.render("index", {titulo: "SIMBORA MEU AMOR"}) // RENDER PRA RENDERIZAR O ARQUIVO
})

app.get("/pagina", function(req,res){
    res.render("pagina")
})

app.get("/", function(req,res){
        res.send("HELLO BLUEMERS");
});

app.get("/teste", function(req,res){
    res.send("ESSE EH UM TESTE");
});
app.get("/PERFIL", function(req,res){
    res.send("BERNARDO, 34 ANOS, ESTUDANTE DE PROGRAMAÇÃO");
});
app.get("/PROFISSAO", function(req,res){
    res.send("PROGRAMADOR / COZINHEIRO! COMBINAÇÃO LOUCA NÉ?");
});
app.get("/LINGUAGENS", function(req,res){
    res.send("JAVASCRIPT, HTML5 , CSS");
});

//app.post
//app.put
//app.delete
app.listen(port, ()=> console.log(`Servidor rodando em http://localhost:${port}`));
// LISTEN FAZ O SERVIDO ESCUTAR, PASSANDO A PORTA ONDE O SERVIDOR FICA ATIVO