const URL_PLANILHA =
"https://script.google.com/macros/s/AKfycbyL_9zGprrNTmFsU37u9VpWNivA9czDKB7rxdIe2g46InBtCsORu__fRj5Cp1JIaMWu/exec";

const whatsapp = "5531971268087";

const CHAVE_RASCUNHO = "fornoDaCasaPedidoRascunho";

const fretes = {

 "Mata grande": 0,
 "Vale das Palmeiras 2": 0,
"Vale das Palmeiras": 0,
"Iporanga": 0,
"Iporanga 2": 0,
"Manoa": 12,
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
"Dona Dora": 5,
"Progresso": 5,
"Morro do Claro": 5,
"Bairro das Indústrias": 7,
"Centro": 5,
"Vapabuçu": 6,
"Canaã": 5,
"Jardim Arizona": 7,
"Santa Helena": 7,
"Cemig": 7,
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
 name:"Lombinho com Cheddar",
 preco:64.90,
 precoBroto:39.90,
imagem:"imagens/lombinhocheddar.jpg",
 descricao:"Molho, muçarela, lombinho, catupiry, cheddar, cebola, azeitona e orégano"
},
{
 name:"Marguerita",
 preco:44.90,
 precoBroto:29.90,
imagem:"imagens/marguerita.jpg",
 descricao:"Molho, muçarela, manjericão, tomate, azeitona e orégano"
},
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

/* controla a montagem da pizza família (sempre 2 sabores, podem repetir) */
let selecaoFamilia = [];

/* controla se o carrinho flutuante está expandido ou recolhido */
let carrinhoAberto = false;

/* ===== INDICADOR DE PROGRESSO (5 passos, Passo 0 = home não conta) ===== */
const mapaProgresso = {
 2: 1,   // Passo 1: Monte sua pizza
 4: 2,   // Passo 2: Borda de cada pizza + Bebida
 7: 3,   // Passo 3: Confirmação
 8: 4,   // Passo 4: Entrega
 9: 5    // Passo 5: Finalizar
};
const totalPassos = 5;

function atualizarProgresso(passo){

 const container = document.getElementById("progresso");
 const texto = container ? container.querySelector(".progresso-texto") : null;
 const fill = document.getElementById("progressoFill");

 if(!container) return;

 if(!passo){
  container.style.display = "none";
  return;
 }

 container.style.display = "block";

 if(texto){
  texto.innerHTML = `Passo ${passo} de ${totalPassos}`;
 }

 if(fill){
  fill.style.width = ((passo/totalPassos)*100) + "%";
 }

}

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

 atualizarProgresso(mapaProgresso[numero] || null);

 if(numero === 2){

  renderizarPizzasAdicionadas();
  atualizarBotaoContinuarPasso1();

 }else{

  const btnContinuarPasso1 =
  document.getElementById("btnContinuarPasso1");

  if(btnContinuarPasso1){
   btnContinuarPasso1.style.display = "none";
  }

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

/* ===== PASSO 1: monta as listas de sabores (família e broto) ===== */
function popularSabores(){

 const listaFamilia =
 document.getElementById("listaSaboresFamilia");

 const listaBroto =
 document.getElementById("listaSaboresBroto");

 if(listaFamilia){

  listaFamilia.innerHTML = "";

  pizzas.forEach((pizza,index)=>{

   listaFamilia.innerHTML +=
   itemSaborFamiliaHtml(pizza, index);

  });

 }

 if(listaBroto){

  listaBroto.innerHTML = "";

  pizzas.forEach((pizza,index)=>{

   listaBroto.innerHTML +=
   itemSaborBrotoHtml(pizza, index);

  });

 }

}

function itemSaborFamiliaHtml(pizza, index){

 return `
  <div class="sabor" id="saborFamilia${index}">

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
        R$ ${pizza.preco.toFixed(2)}
    </span>

</div>

<button onclick="selecionarSaborFamilia('${pizza.name}',${pizza.preco},${index})">
    +
</button>

</div>
`;

}

function itemSaborBrotoHtml(pizza, index){

 return `
  <div class="sabor" id="saborBroto${index}">

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
        R$ ${pizza.precoBroto.toFixed(2)}
    </span>

</div>

<button onclick="escolherPizzaBroto('${pizza.name}',${pizza.precoBroto})">
    +
</button>

</div>
`;

}

/* seleção de sabor da família (sempre 2 escolhas, podem repetir) */
function selecionarSaborFamilia(nome,preco,index){

 selecaoFamilia.push({nome:nome, preco:preco, index:index});

 const item =
 document.getElementById("saborFamilia" + index);

 if(item){
  item.classList.add("selecionado-sabor");
 }

 atualizarStatusMontagemFamilia();

 if(selecaoFamilia.length >= 2){
  finalizarPizzaFamilia();
 }

}

function atualizarStatusMontagemFamilia(){

 const status =
 document.getElementById("statusMontagemFamilia");

 if(!status) return;

 if(selecaoFamilia.length === 0){

  status.style.display = "none";
  status.innerHTML = "";

  return;

 }

 let html = "";

 selecaoFamilia.forEach(item=>{

  html += `<p>🍕 1/2 ${item.nome}</p>`;

 });

 if(selecaoFamilia.length === 1){

  html += `<small>Escolha o 2º sabor (pode repetir o mesmo)</small>`;

 }

 status.style.display = "block";
 status.innerHTML = html;

}

function finalizarPizzaFamilia(){

 const m1 = selecaoFamilia[0];
 const m2 = selecaoFamilia[1];

 const sabor =
 m1.nome === m2.nome
 ? m1.nome
 : `1/2 ${m1.nome} + 1/2 ${m2.nome}`;

 const preco = (m1.preco + m2.preco) / 2;

 pedido.pizzas.push({
  sabor:sabor,
  preco:preco,
  tamanho:"familia",
  borda:false,
  tipoBorda:"",
  precoBorda:0
 });

 limparMontagemFamilia();

 renderizarPizzasAdicionadas();
 atualizarCarrinhoFlutuante();
 atualizarBotaoContinuarPasso1();

}

function limparMontagemFamilia(){

 selecaoFamilia.forEach(item=>{

  const el =
  document.getElementById("saborFamilia" + item.index);

  if(el){
   el.classList.remove("selecionado-sabor");
  }

 });

 selecaoFamilia = [];

 atualizarStatusMontagemFamilia();

}

function escolherPizzaBroto(nome,preco){

 pedido.pizzas.push({
    sabor:nome,
    preco:preco,
    tamanho:"broto",
    borda:false,
    tipoBorda:"",
    precoBorda:0
});

 renderizarPizzasAdicionadas();
 atualizarCarrinhoFlutuante();
 atualizarBotaoContinuarPasso1();

}

/* ===== NOVO: lista as pizzas já adicionadas no Passo 1, com opção de remover ===== */
function renderizarPizzasAdicionadas(){

 const container =
 document.getElementById("listaPizzasAdicionadas");

 if(!container) return;

 if(pedido.pizzas.length === 0){

  container.style.display = "none";
  container.innerHTML = "";

  return;

 }

 container.style.display = "block";

 let html = `<h3 class="titulo-pizzas-adicionadas">Pizzas no seu pedido (${pedido.pizzas.length})</h3>`;

 pedido.pizzas.forEach((pizza,i)=>{

  html += `
   <div class="pizza-adicionada">

    <div>
     <strong>Pizza ${i+1}:</strong> ${pizza.sabor}<br>
     <span class="preco">R$ ${pizza.preco.toFixed(2)}</span>
    </div>

    <button class="btn-remover-pizza" onclick="removerPizza(${i})">
     🗑 Remover
    </button>

   </div>
  `;

 });

 container.innerHTML = html;

}

/* ===== NOVO: remove uma pizza já adicionada ===== */
function removerPizza(indice){

 pedido.pizzas.splice(indice,1);

 renderizarPizzasAdicionadas();
 atualizarCarrinhoFlutuante();
 atualizarBotaoContinuarPasso1();

}

/* mostra/esconde o botão "Continuar" fixo do Passo 1 conforme houver pizza no pedido */
function atualizarBotaoContinuarPasso1(){

 const btn =
 document.getElementById("btnContinuarPasso1");

 if(!btn) return;

 btn.style.display =
 pedido.pizzas.length > 0 ? "block" : "none";

}

/* ===== PASSO 1 -> PASSO 2 ===== */
function irParaBordas(){

 renderizarBordasPizzas();
 carregarBebidas();

 mostrarEtapa(4);

}

/* ===== PASSO 2: borda individual de cada pizza do pedido ===== */
function renderizarBordasPizzas(){

 const container =
 document.getElementById("listaBordasPizzas");

 if(!container) return;

 container.innerHTML = "";

 pedido.pizzas.forEach((pizza,i)=>{

  const acrescimo =
  pizza.tamanho === "broto" ? "7,90" : "11,90";

  container.innerHTML += `
   <div class="card-pizza-borda">

    <h3>Pizza ${i+1}: ${pizza.sabor}</h3>
    <small class="tamanho-pizza-borda">
     ${pizza.tamanho === "broto" ? "Broto - 4 pedaços" : "Família - 8 pedaços"}
    </small>

    <div class="opcoes-borda-pizza">

     <button
      id="btnBorda${i}Tradicional"
      class="opcao opcao-pequena${pizza.borda === false ? " selecionado" : ""}"
      onclick="selecionarBordaPizza(${i}, false)">
      Tradicional
     </button>

     <button
      id="btnBorda${i}Catupiry"
      class="opcao opcao-pequena${pizza.tipoBorda === "catupiry" ? " selecionado" : ""}"
      onclick="selecionarBordaPizza(${i}, 'catupiry')">
      Catupiry
      <br><small>Acréscimo: R$ ${acrescimo}</small>
     </button>

     <button
      id="btnBorda${i}Cheddar"
      class="opcao opcao-pequena${pizza.tipoBorda === "cheddar" ? " selecionado" : ""}"
      onclick="selecionarBordaPizza(${i}, 'cheddar')">
      Cheddar
      <br><small>Acréscimo: R$ ${acrescimo}</small>
     </button>

    </div>

   </div>
  `;

 });

}

function selecionarBordaPizza(indice, tipo){

 const pizza = pedido.pizzas[indice];

 if(!pizza) return;

 if(tipo === false){

  pizza.borda = false;
  pizza.tipoBorda = "";
  pizza.precoBorda = 0;

 }else{

  pizza.borda = true;
  pizza.tipoBorda = tipo;

  pizza.precoBorda =
   pizza.tamanho === "broto"
   ? 7.90
   : 11.90;

 }

 /* destaque visual só dentro do grupo de botões dessa pizza */
 ["Tradicional","Catupiry","Cheddar"].forEach(nomeBtn=>{

  const btn =
  document.getElementById("btnBorda" + indice + nomeBtn);

  if(btn){
   btn.classList.remove("selecionado");
  }

 });

 const idSelecionado =
  tipo === false
  ? "Tradicional"
  : tipo === "catupiry"
  ? "Catupiry"
  : "Cheddar";

 const btnSelecionado =
 document.getElementById("btnBorda" + indice + idSelecionado);

 if(btnSelecionado){
  btnSelecionado.classList.add("selecionado");
 }

 atualizarCarrinhoFlutuante();

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

/* ===== NOVO: salvar/carregar/limpar rascunho do pedido no navegador ===== */
function salvarRascunho(){

 try{

  localStorage.setItem(
   CHAVE_RASCUNHO,
   JSON.stringify(pedido)
  );

 }catch(e){

  console.error("Não foi possível salvar o rascunho:", e);

 }

}

function limparRascunho(){

 try{
  localStorage.removeItem(CHAVE_RASCUNHO);
 }catch(e){
  console.error(e);
 }

}

function carregarRascunho(){

 try{

  const salvo = localStorage.getItem(CHAVE_RASCUNHO);

  if(!salvo) return;

  const dados = JSON.parse(salvo);

  if(!dados || !dados.pizzas || dados.pizzas.length === 0){
   return;
  }

  const continuar = confirm(
   "Você tem um pedido em andamento salvo. Deseja continuar de onde parou?"
  );

  if(continuar){

   pedido = dados;

   mostrarEtapa(2);

  }else{

   limparRascunho();

  }

 }catch(e){

  console.error("Não foi possível carregar o rascunho:", e);

 }

}

function alternarCarrinhoFlutuante(){

 carrinhoAberto = !carrinhoAberto;
 aplicarEstadoCarrinho();

}

function aplicarEstadoCarrinho(){

 const expandido =
 document.getElementById("carrinhoExpandido");

 const seta =
 document.querySelector(".seta-carrinho");

 if(expandido){
  expandido.style.display = carrinhoAberto ? "block" : "none";
 }

 if(seta){
  seta.textContent = carrinhoAberto ? "▼" : "▲";
 }

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
  carrinhoAberto = false;
  limparRascunho();
  return;

 }

 carrinho.style.display = "block";

 let qtdBebidas = 0;

 pedido.bebidas.forEach(item=>{
  qtdBebidas += item.qtd;
 });

 const totalItens =
 pedido.pizzas.length + qtdBebidas;

 /* resumo compacto (sempre visível) */
 document.getElementById("resumoCompacto").innerHTML =
 `🍕 ${totalItens} ${totalItens === 1 ? "item" : "itens"}`;

 document.getElementById("totalCompacto").innerHTML =
 "R$ " + subtotal.toFixed(2);

 /* resumo expandido (só aparece ao tocar) */
 let resumo = "";

 pedido.pizzas.forEach(pizza=>{

  resumo += `🍕 ${pizza.sabor}<br>`;

 });

 if(qtdBebidas > 0){
  resumo += `🥤 ${qtdBebidas} Bebida(s)`;
 }else{
  resumo = resumo.replace(/<br>$/, "");
 }

 document.getElementById("resumoFlutuante")
 .innerHTML = resumo;

 document.getElementById("totalFlutuante")
 .innerHTML =
 "R$ " + subtotal.toFixed(2);

 aplicarEstadoCarrinho();

 salvarRascunho();

}

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

/* ===== NOVO: máscara de telefone (XX) XXXXX-XXXX ===== */
function mascararTelefone(input){

 let v = input.value.replace(/\D/g,"");

 v = v.slice(0,11);

 if(v.length === 0){
  input.value = "";
  return;
 }

 if(v.length <= 2){

  input.value = "(" + v;

 }else if(v.length <= 6){

  input.value =
  "(" + v.slice(0,2) + ") " + v.slice(2);

 }else if(v.length <= 10){

  input.value =
  "(" + v.slice(0,2) + ") " + v.slice(2,6) + "-" + v.slice(6);

 }else{

  input.value =
  "(" + v.slice(0,2) + ") " + v.slice(2,7) + "-" + v.slice(7);

 }

}

/* ===== NOVO: validação dos campos obrigatórios de entrega ===== */
function validarCamposEntrega(){

 let valido = true;

 const camposObrigatorios = ["nome","telefone","bairro"];

 camposObrigatorios.forEach(id=>{

  const el = document.getElementById(id);

  if(!el) return;

  if(!el.value.trim()){

   el.classList.add("campo-erro");
   valido = false;

  }else{

   el.classList.remove("campo-erro");

  }

 });

 return valido;

}

function calcularFrete(){

if(!validarCamposEntrega()){

 alert("Preencha nome, telefone e bairro para continuar.");
 return;

}

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

const formaPagamento =
document.getElementById("formaPagamento").value;

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
 pizza.tipoBorda === "cheddar"
        ? " + Borda Cheddar"
        : " + Borda Catupiry";
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

Forma de Pagamento: ${formaPagamento}

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

limparRascunho();

mostrarEtapa(10);

}

/* ===== NOVO: reseta tudo e volta pra Home depois do pedido enviado ===== */
function fazerNovoPedido(){

 pedido = {
  pizzas:[],
  bebidas:[],
  frete:0,
  total:0
 };

 limparMontagemFamilia();
 renderizarPizzasAdicionadas();
 atualizarBotaoContinuarPasso1();
 atualizarCarrinhoFlutuante();

 mostrarEtapa(1);

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
 Borda ${
    pizza.tipoBorda === "cheddar"
        ? "Cheddar"
        : "Catupiry"
}
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

 limparMontagemFamilia();
 renderizarPizzasAdicionadas();
 atualizarBotaoContinuarPasso1();

 atualizarCarrinhoFlutuante();
 limparRascunho();

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

function selecionarBairro(bairro){

  document.getElementById("bairro").value = bairro;

  document.getElementById("sugestoesBairro").style.display = "none";
  document.getElementById("sugestoesBairro").innerHTML = "";

  verificarFrete();

}

function mostrarSugestoesBairro(){

  const texto = normalizarTexto(
    document.getElementById("bairro").value
  );

  const caixa =
  document.getElementById("sugestoesBairro");

  if(texto.length < 2){

    caixa.style.display = "none";
    caixa.innerHTML = "";
    return;

  }

  const encontrados =
  Object.keys(fretes).filter(bairro =>
    normalizarTexto(bairro).includes(texto)
  );

  if(encontrados.length === 0){

    caixa.style.display = "none";
    caixa.innerHTML = "";
    return;

  }

  caixa.style.display = "block";
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
popularSabores();
mostrarEtapa(1);
carregarRascunho();

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

  if(!melhorBairro){
    return null;
  }

  /* CORREÇÃO: tolerância proporcional ao tamanho do nome do bairro.
     Antes era um número fixo (3), grande demais pra nomes curtos —
     isso fazia bairros bem diferentes (ex: "Manoa" e "Canaã", distância 2)
     serem confundidos um com o outro. Agora nomes curtos toleram só
     1 letra de diferença; nomes longos continuam tolerando até 3. */
  const toleranciaMaxima =
    Math.min(3, Math.max(1, Math.floor(melhorBairro.length * 0.25)));

  if(menorDistancia <= toleranciaMaxima){
    return melhorBairro;
  }

  return null;
}
