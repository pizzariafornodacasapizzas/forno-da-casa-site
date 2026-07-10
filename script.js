const URL_PLANILHA =
"https://script.google.com/macros/s/AKfycbyL_9zGprrNTmFsU37u9VpWNivA9czDKB7rxdIe2g46InBtCsORu__fRj5Cp1JIaMWu/exec";

const whatsapp = "5531971268087";

const fretes = {

 "Mata grande": 0,
 "Vale das Palmeiras 2": 0,
"Vale das Palmeiras": 0,
"Iporanga": 0,
"Iporanga 2": 0,
"São Cristóvão": 0,
"Santo Antônio": 0,
"Santa Rosa": 0,
"Henrique Nery": 5,
"São Jorge": 0,
"São Dimas": 0,
"Catarina": 0,
"Padre Teodoro": 5,
"Padre Teodoro 2": 5,
"Várzea": 0,
"Novo Horizonte": 0,
"Colorado": 3,
"Flórida": 0,
"São Geraldo": 0,
"Dona Dora": 0,
"Progresso": 5,
"Morro do Claro": 5,
"Bairro das Indústrias": 7,
"Centro": 5,
"Vapabuçu": 6,
"Canaã": 5,
"Jardim Arizona": 7,
"Mangabeiras": 8,
"Boa Vista": 5,
"Fatima": 5,
"Brasilia": 8,
"Nossa Senhora do Carmo": 5,
"Recanto do Cedro": 0,
"Piedade": 0,
"Aeroporto Industrial": 10,
"Jardim Universitário": 3,




};

let tamanhoAtual = "familia";

const pizzas = [
{
 name:"Forno da Casa (A MAIS PEDIDA)",
 preco:74.90,
 precoBroto:49.90,
imagem:"imagens/fornodacasa.jpg",
 descricao:"Molho, muçarela, presunto, frango, bacon, catupiry, cebola, pimentão, azeitona e orégano"
},
{
 name:"Costela",
 preco:74.90,
 precoBroto:49.90,
imagem:"imagens/costela.jpg",
 descricao:"Molho, muçarela, costela bovina desfiada, cebola caramelizada, catupiry, pimentão e cebolinha "
},
{
 name:"A Moda",
 preco:54.90,
 precoBroto:34.90,
imagem:"imagens/amoda.jpg",
 descricao:"Molho, muçarela, presunto, calabresa, cebola, tomate, pimentão, azeitona e orégano"
},
{
 name:"Calabresa",
 preco:54.90,
 precoBroto:34.90,
imagem:"imagens/calabresa.jpg",
 descricao:"Molho, muçarela, calabresa, cebola, azeitona e orégano"
},
{
 name:"Mussarela",
 preco:54.90,
 precoBroto:34.90,
imagem:"imagens/mussarela.jpg",
 descricao:"Molho, muçarela, azeitona e orégano"
},
{
 name:"Portuguesa",
 preco:57.90,
 precoBroto:39.90,
imagem:"imagens/portuguesa.jpg",
 descricao:"Molho, muçarela, presunto, ovo, cebola, bacon, azeitona e orégano"
},
{
 name:"Frango com Catupiry",
 preco:64.90,
 precoBroto:39.90,
imagem:"imagens/frangocatupiry.jpg",
 descricao:"Molho, muçarela, frango, catupiry, azeitona e orégano"
},
{
 name:"4 Queijos",
 preco:64.90,
 precoBroto:39.90,
imagem:"imagens/4queijos.jpg",
 descricao:"Molho, muçarela, provolone, parmesão, catupiry, azeitona e orégano"
},
{
 name:"Caipira",
 preco:57.90,
 precoBroto:39.90,
imagem:"imagens/caipira.jpg",
 descricao:"Molho, muçarela, frango, bacon, milho, cebola, azeitona e orégano"
},
{
 name:"Lombinho",
 preco:64.90,
 precoBroto:39.90,
imagem:"imagens/lombinho.jpg",
 descricao:"Molho, muçarela, lombinho, catupiry, cebola, azeitona e orégano"
},
{
 name:"Marguerita",
 preco:44.90,
 precoBroto:29.90,
imagem:"imagens/marguerita.jpg",
 descricao:"Molho, muçarela, manjericão, tomate, azeitona e orégano"
},
{
 name:"Palmito",
 preco:64.90,
 precoBroto:39.90,
imagem:"imagens/palmito.jpg",
 descricao:"Molho, muçarela, palmito, pimentão, cebola, tomate, azeitona e orégano"
}
];

const bebidas = [
 {name:"Coca-Cola 2L",preco:13.90},
 {name:"Coca-Cola Zero 2L",preco:13.90},
 {name:"Guaraná Antarctica 2L",preco:12.90},
{name:"Mate Couro 1L",preco:7.90}
];

let pedido = {
 pizzas:[],
 bebidas:[],
 frete:0,
 total:0
};

function mostrarEtapa(numero){

 document.querySelectorAll(".tela").forEach(tela=>{
  tela.style.display = "none";
 });

 const etapa =
 document.getElementById("etapa" + numero);

 if(!etapa) return;

 if(numero === 1){

  etapa.style.display = "flex";

 }else{

  etapa.style.display = "block";

 }

 const carrinho =
 document.getElementById("carrinhoFlutuante");

 if(carrinho){

  if(numero >= 7){

   carrinho.style.display = "none";

  }else{

   atualizarCarrinhoFlutuante();

  }

 }

 window.scrollTo(0,0);

}
function mostrarEtapaCustom(id){

 document.querySelectorAll(".tela").forEach(tela=>{
  tela.style.display="none";
 });

 document.getElementById(id).style.display="block";

}

function selecionarTipo(tipo){

 if(tipo === "familia"){

  tamanhoAtual = "familia";
  mostrarEtapaInteira();

 }

 else if(tipo === "broto"){

  tamanhoAtual = "broto";
  mostrarEtapaInteira();

 }

 else if(tipo === "meio"){

  tamanhoAtual = "familia";
  mostrarEtapaMeio();

 }

}

function mostrarEtapaInteira(){

 mostrarEtapaCustom("etapa3Inteira");

 const lista =
 document.getElementById("listaSaboresInteira");

 lista.innerHTML="";

 pizzas.forEach(pizza=>{

const preco =
 tamanhoAtual === "broto"
 ? pizza.precoBroto
 : pizza.preco;

  lista.innerHTML += `
  <div class="sabor">

<img
        src="${pizza.imagem || ''}"
        alt="${pizza.name}"
        class="foto-pizza"
    >

   <div>

    <strong>${pizza.name}</strong>

    <p class="descricao-pizza">
        ${pizza.descricao}
    </p>

    <span class="preco">
        R$ ${preco.toFixed(2)}
    </span>

</div>

<button onclick="escolherPizza('${pizza.name}',${preco})">
    +
</button>

</div>
`;

});

}

function mostrarEtapaMeio(){

 mostrarEtapaCustom("etapa3Meio");

 const sabor1 =
 document.getElementById("sabor1");

 const sabor2 =
 document.getElementById("sabor2");

 sabor1.innerHTML="";
 sabor2.innerHTML="";

 pizzas.forEach(pizza=>{

  sabor1.innerHTML +=
  `<option>${pizza.name}</option>`;

  sabor2.innerHTML +=
  `<option>${pizza.name}</option>`;

 });

}

function escolherPizza(nome,preco){

 pedido.pizzas.push({
  sabor:nome,
  preco:preco,
  tamanho:tamanhoAtual,
  borda:false,
  precoBorda:0
 });

 mostrarEtapa(4);

 const valorBorda =
 document.getElementById("valorBorda");

 if(valorBorda){

    if(tamanhoAtual === "broto"){

        valorBorda.innerHTML =
        "R$ 7,90";

    }else{

        valorBorda.innerHTML =
        "R$ 11,90";

    }

 }

}

function confirmarMeioMeio(){

 const s1 =
 document.getElementById("sabor1").value;

 const s2 =
 document.getElementById("sabor2").value;

 if(s1===s2){

  alert("Escolha dois sabores diferentes.");
  return;

 }

 const p1 =
 pizzas.find(p=>p.name===s1);

 const p2 =
 pizzas.find(p=>p.name===s2);

 pedido.pizzas.push({
 sabor:`Meio a Meio: ${s1} / ${s2}`,
 preco:(p1.preco + p2.preco)/2,
 borda:false,
 precoBorda:0
});

 atualizarCarrinhoFlutuante();

 mostrarEtapa(4);

}

function selecionarBorda(sim){

 let ultimaPizza =
 pedido.pizzas[pedido.pizzas.length - 1];

 ultimaPizza.borda = sim;

 if(sim){

  if(ultimaPizza.tamanho === "broto"){

   ultimaPizza.precoBorda = 7.90;

  }else{

   ultimaPizza.precoBorda = 11.90;

  }

 }else{

  ultimaPizza.precoBorda = 0;

 }

 atualizarCarrinhoFlutuante();

 carregarBebidas();

 mostrarEtapa(5);

}

function carregarBebidas(){

 const lista =
 document.getElementById("listaBebidas");

 lista.innerHTML="";

 bebidas.forEach(item=>{

  const encontrada =
  pedido.bebidas.find(
   b=>b.nome===item.name
  );

  const qtd =
  encontrada ? encontrada.qtd : 0;

  lista.innerHTML += `
  <div class="bebida">

   <div>
    <strong>${item.name}</strong>
    <br>
    <span class="preco">
    R$ ${item.preco.toFixed(2)}
    </span>
   </div>

   <div style="display:flex;gap:10px;align-items:center">

    <button onclick="removerBebida('${item.name}')">
    -
    </button>

    <strong>${qtd}</strong>

    <button onclick="adicionarBebida('${item.name}',${item.preco})">
    +
    </button>

   </div>

  </div>
  `;

 });

}

function adicionarBebida(nome,preco){

 let bebida =
 pedido.bebidas.find(
  b=>b.nome===nome
 );

 if(bebida){

  bebida.qtd++;

 }else{

  pedido.bebidas.push({
   nome:nome,
   preco:preco,
   qtd:1
  });

 }

 carregarBebidas();
 atualizarCarrinhoFlutuante();

}

function removerBebida(nome){

 let bebida =
 pedido.bebidas.find(
  b=>b.nome===nome
 );

 if(!bebida) return;

 bebida.qtd--;

 if(bebida.qtd<=0){

  pedido.bebidas =
  pedido.bebidas.filter(
   b=>b.nome!==nome
  );

 }

 carregarBebidas();
 atualizarCarrinhoFlutuante();

}

function totalBebidas(){

 let total = 0;

 pedido.bebidas.forEach(item=>{

  total += item.preco * item.qtd;

 });

 return total;

}

function totalPizzas(){

 let total = 0;

 pedido.pizzas.forEach(pizza=>{

  total += pizza.preco;
  total += pizza.precoBorda;

 });

 return total;

}

function atualizarCarrinhoFlutuante(){

 const carrinho =
 document.getElementById("carrinhoFlutuante");

 if(!carrinho) return;

 const subtotal =
 totalPizzas() +
 totalBebidas();

 if(subtotal <= 0){

  carrinho.style.display = "none";
  return;

 }

 carrinho.style.display = "flex";

 let resumo = "";

resumo += `🍕 ${pedido.pizzas.length} Pizza(s)`;

let qtdBebidas = 0;

pedido.bebidas.forEach(item=>{
 qtdBebidas += item.qtd;
});

resumo += `<br>🥤 ${qtdBebidas} Bebida(s)`;

 document.getElementById("resumoFlutuante")
 .innerHTML = resumo;

 document.getElementById("totalFlutuante")
 .innerHTML =
 "R$ " + subtotal.toFixed(2);

}

function mostrarCarrinho(){

 let pizzasTexto = "";
 let subtotalPizzas = 0;

 pedido.pizzas.forEach((pizza,index)=>{

  subtotalPizzas += pizza.preco;

  if(pizza.borda){
   subtotalPizzas += pizza.precoBorda;
  }

  pizzasTexto += `
<p>
 <strong>Pizza ${index + 1}:</strong><br>

 ${pizza.sabor}<br>

 <small>
 ${pizza.tamanho === "broto"
 ? "🍕 Broto - 4 pedaços"
 : "🍕 Família - 8 pedaços"}
 </small>

 ${pizza.borda
 ? "<br> Borda Catupiry"
 : ""}
</p>
`;

 });

 let bebidasTexto = "";
 let subtotalBebidas = 0;

 pedido.bebidas.forEach(item=>{

  bebidasTexto += `
  ${item.nome} (${item.qtd}x)<br>
  `;

  subtotalBebidas += item.preco * item.qtd;

 });

 if(bebidasTexto === ""){
  bebidasTexto = "Nenhuma";
 }

 const subtotal =
 subtotalPizzas + subtotalBebidas;

 document.getElementById("resumoPedido")
 .innerHTML = `

 ${pizzasTexto}

 <p>
 <strong>Bebidas:</strong><br>
 ${bebidasTexto}
 </p>

 <hr>

 <h3>
 Subtotal: R$ ${subtotal.toFixed(2)}
 </h3>

 `;

 mostrarEtapa(6);

}
function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function calcularFrete(){

const bairro = normalizarTexto(
 document.getElementById("bairro").value
);

 const subtotal =
 totalPizzas() + totalBebidas();

const bairroEncontrado =
encontrarBairroMaisProximo(bairro);
 
if(!bairroEncontrado){
  alert(
   "Bairro não cadastrado. Envie seu pedido e calcularemos o frete no WhatsApp."
  );

  pedido.frete = null;

  pedido.total = subtotal;

 }else{

  pedido.frete =
  fretes[bairroEncontrado];

  pedido.total =
  subtotal + pedido.frete;

 }

 document.getElementById("resumoFinal")
 .innerHTML = `

 <p>
 <strong>Subtotal:</strong>
 R$ ${subtotal.toFixed(2)}
 </p>

 <p>
 <strong>Frete:</strong>
 ${
  pedido.frete === null
  ? "A calcular"
  : "R$ " + pedido.frete.toFixed(2)
 }
 </p>

 <hr>

 <h2>
 Total: R$ ${pedido.total.toFixed(2)}
 </h2>

 `;

const btnWhatsapp =
document.querySelector(".whatsapp");

if(pedido.frete === null){

 btnWhatsapp.innerHTML =
 "📲 Enviar Pedido no WhatsApp<br>e Solicitar Valor do Frete";

}else{

 btnWhatsapp.innerHTML =
 "📲 Enviar Pedido no WhatsApp";

}

 mostrarEtapa(9);

}

function finalizarPedido(){

 const nome =
 document.getElementById("nome").value;

 const telefone =
 document.getElementById("telefone").value;

 const bairro =
 document.getElementById("bairro").value;

 const rua =
 document.getElementById("rua").value;

 const numero =
 document.getElementById("numero").value;

const complemento =
document.getElementById("complemento").value;

const obs =
document.getElementById("obs").value;

 let pizzasTexto = "";

 pedido.pizzas.forEach((pizza,index)=>{

  pizzasTexto +=
` Pizza ${index+1}: ${pizza.sabor}`;

pizzasTexto +=
` (${pizza.tamanho === "broto"
 ? "Broto - 4 pedaços"
 : "Família - 8 pedaços"})`;

if(pizza.borda){

 pizzasTexto +=
 " + Borda Catupiry";

}

  pizzasTexto += "\n";

 });

 let bebidasTexto = "";

 pedido.bebidas.forEach(item=>{

  bebidasTexto +=
  ` ${item.nome} (${item.qtd}x)\n`;

 });

const codigoPedido =
Date.now()

 const msg = `

NOVO PEDIDO - FORNO DA CASA

Pedido Nº: ${codigoPedido}

Nome: ${nome}

Telefone: ${telefone}

Bairro: ${bairro}

Rua: ${rua}

Número: ${numero}

Complemento: ${complemento}

--------------------------------

${pizzasTexto}

${bebidasTexto}

--------------------------------
Frete: ${
 pedido.frete === null
 ? "A calcular"
 : "R$ " + pedido.frete.toFixed(2)
}
--------------------------------
Total: R$ ${pedido.total.toFixed(2)}

Observações:
${obs}

`;
const dadosPedido = {

 pedido: codigoPedido,

 nome: nome,

 total:
 pedido.total.toFixed(2)

};

fetch(URL_PLANILHA, {

 method: "POST",

 body: JSON.stringify(dadosPedido)

})
.then(() => {

 console.log("Pedido salvo");

})
.catch((erro) => {

 console.error(erro);

});
 
window.open(
 `https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`,
 "_blank"
 );

}

function mostrarConfirmacao(){

 let html = "";

 let total = 0;

 pedido.pizzas.forEach((pizza,index)=>{

 html += `
 <p>
 <strong>Pizza ${index+1}</strong><br>

 ${pizza.sabor}
 - R$ ${pizza.preco.toFixed(2)}<br>

 <small>
 ${pizza.tamanho === "broto"
 ? "🍕 Broto - 4 pedaços"
 : "🍕 Família - 8 pedaços"}
 </small>

 </p>
`;

  total += pizza.preco;

  if(pizza.borda){

   html += `
<p>
 Borda Catupiry
- R$ ${pizza.precoBorda.toFixed(2)}
</p>
`;
   total += pizza.precoBorda;

  }

  html += "<hr>";

 });

 if(pedido.bebidas.length){

  html += "<h3>Bebidas</h3>";

  pedido.bebidas.forEach(b=>{

html += `
 <p>
   ${b.nome} x${b.qtd}
  - R$ ${(b.preco * b.qtd).toFixed(2)}
 </p>
`;

   total += b.preco * b.qtd;

  });

 }

 html += `
 <h2>
 Total: R$ ${total.toFixed(2)}
 </h2>
 `;

 document.getElementById(
  "resumoConfirmacao"
 ).innerHTML = html;

 mostrarEtapa(7);

}

function reiniciarPedido(){

 pedido = {
  pizzas:[],
  bebidas:[],
  frete:0,
  total:0
 };

 atualizarCarrinhoFlutuante();

 mostrarEtapa(2);

}

function verificarFrete(){

 const bairro = normalizarTexto(
 document.getElementById("bairro").value
);

 const info =
 document.getElementById("infoFrete");

 if(!info) return;

 if(!bairro){

  info.style.display = "none";
  return;

 }

 const bairroEncontrado =
Object.keys(fretes).find(b =>
  normalizarTexto(b).includes(bairro)
);

if(!bairroEncontrado){

  info.style.display = "block";
  info.innerHTML =
  "❌ Bairro não cadastrado no sistema (Clique em CONFIRMAR DADOS para calcularmos pelo WhatsApp)";

  return;

 }

 if(fretes[bairroEncontrado] === 0){

  info.style.display = "block";
  info.innerHTML =
  "✅ Frete Grátis";

 }else{

  info.style.display = "block";
  info.innerHTML =
  `🚚 Frete: R$ ${fretes[bairroEncontrado].toFixed(2)}`
 }

}

function mostrarSugestoesBairro(){

  const texto = normalizarTexto(
    document.getElementById("bairro").value
  );

  const caixa =
  document.getElementById("sugestoesBairro");

  if(texto.length < 2){

    caixa.innerHTML = "";
    return;

  }

  const encontrados =
  Object.keys(fretes).filter(bairro =>
    normalizarTexto(bairro).includes(texto)
  );

  caixa.innerHTML = "";

  encontrados.forEach(bairro => {

    caixa.innerHTML += `
      <div
        class="sugestao-item"
        onclick="selecionarBairro('${bairro}')"
      >
        ${bairro}
      </div>
    `;

  });

}

function selecionarBairro(bairro){

  document.getElementById("bairro").value =
  bairro;

  document.getElementById("sugestoesBairro")
  .innerHTML = "";

  verificarFrete();

}



function atualizarStatusLoja(){

 const agora = new Date();
 const dia = agora.getDay();
 const hora = agora.getHours();

 let aberta = false;

 if((dia>=2 && dia<=6) || dia===0){

  if(hora>=18 && hora<23){

   aberta=true;

  }

 }

 const status =
 document.getElementById("statusLoja");

 if(!status) return;

 if(aberta){

  status.innerHTML="🟢 Aberto Agora";
  status.className="status aberto";

 }else{

  status.innerHTML="🔴 Fechado";
  status.className="status fechado";

 }

}

atualizarStatusLoja();
mostrarEtapa(1);
function distanciaTexto(a, b) {

  a = normalizarTexto(a);
  b = normalizarTexto(b);

  const matriz = [];

  for(let i = 0; i <= b.length; i++){
    matriz[i] = [i];
  }

  for(let j = 0; j <= a.length; j++){
    matriz[0][j] = j;
  }

  for(let i = 1; i <= b.length; i++){

    for(let j = 1; j <= a.length; j++){

      if(b.charAt(i-1) === a.charAt(j-1)){

        matriz[i][j] = matriz[i-1][j-1];

      }else{

        matriz[i][j] = Math.min(
          matriz[i-1][j-1] + 1,
          matriz[i][j-1] + 1,
          matriz[i-1][j] + 1
        );

      }

    }

  }

  return matriz[b.length][a.length];
}
function encontrarBairroMaisProximo(textoDigitado){

  textoDigitado = normalizarTexto(textoDigitado);

  let melhorBairro = null;
  let menorDistancia = 999;

  Object.keys(fretes).forEach(bairro => {

    const distancia =
      distanciaTexto(textoDigitado, bairro);

    if(distancia < menorDistancia){

      menorDistancia = distancia;
      melhorBairro = bairro;

    }

  });

  if(menorDistancia <= 3){
    return melhorBairro;
  }

  return null;
}
