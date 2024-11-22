import express from "express"

const posts = [
 {
   id: 1,
   descrição: "Gato brincando com um novelo de lã",
   imagem: "https://placekitten.com/400/200"
 },
 {
  id: 2,  
  descrição: "Gatinho dormindo em uma caixa",
   imagem: "https://placekitten.com/200/300"
 },
 {
  id: 3,
  descrição: "Gato olhando pela janela",
  imagem: "https://placekitten.com/300/300"
 },
 {
  id: 4, 
  descrição: "Gatos fazendo amizade",
  imagem: "https://placekitten.com/500/300"
 },
 {
  id: 5,
  descrição: "Gatinho curioso",
  imagem: "https://placekitten.com/200/200"
 }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
 console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
 res.status(200).json(posts)
});