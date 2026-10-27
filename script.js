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
 name:"Calabresa Cremosa",
 preco:64.90,
 precoBroto:44.90,
imagem:"imagens/calabresacremosa.jpg",
 descricao:"Molho, muçarela, calabresa,catupiri, cebola, azeitona e orégano"
},
{
 name:"Mussarela",
 preco:54.90,
 precoBroto:34.90,
imagem:"imagens/mussarela.jpg",
 descricao:"Molho, muçarela, azeitona e orégano"
},
{
 name:"Napolitana",
 preco:49.90,
 precoBroto:34.90,
imagem:"imagens/napolitana.jpg",
 descricao:"Molho, muçarela, presunto, cebola, tomate, orégano e azeitona"
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
 name:"Frango com Bacon",
 preco:59.90,
 precoBroto:41.90,
imagem:"imagens/frangobacon.jpg",
 descricao:"Molho, muçarela, frango, bacon, azeitona e orégano"
},
{
 name:"Frango",
 preco:54.90,
 precoBroto:37.90,
imagem:"imagens/frango.jpg",
 descricao:"Molho, muçarela, frango, azeitona e orégano"
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
 name:"Milho e Bacon",
 preco:54.90,
 precoBroto:37.90,
imagem:"imagens/Milhobacon.jpg",
 descricao:"Molho, muçarela, bacon, milho, azeitona e orégano"
},
{
 name:"Milho",
 preco:49.90,
 precoBroto:34.90,
imagem:"imagens/Milho.jpg",
 descricao:"Molho, muçarela, milho, azeitona e orégano"
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
 {name:"Coca-Cola 2L",preco:14.90},
 {name:"Coca-Cola Zero 2L",preco:14.90},
 {name:"Guaraná Antarctica 2L",preco:12.90},
{name:"Mate Couro 1L",preco:7.90},
{name:"Guarana Antarctica 1L",preco:7.90}
];

/* ===== ADICIONAIS (ingredientes extras, por pizza) ===== */
const ADICIONAIS = [
 {nome:"Presunto",  preco:5},
 {nome:"Lombinho",  preco:10},
 {nome:"Calabresa", preco:5},
 {nome:"Frango",    preco:5},
 {nome:"Bacon",     preco:5},
 {nome:"Catupiry",  preco:7},
 {nome:"Costela",   preco:15},
 {nome:"Provolone", preco:6},
 {nome:"Parmesão",  preco:5},
 {nome:"Ovo",       preco:4}
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

/* ===== PROMOÇÃO DO DIA =====
   0=Domingo 1=Segunda 2=Terça 3=Quarta 4=Quinta 5=Sexta 6=Sábado
   Dia sem promoção = null (o banner some e nada é aplicado) */

/* MODO TESTE: enquanto estiver 2, o site age como se fosse TERÇA.
   Para usar o dia real da semana, troque por:  const DIA_TESTE = null; */
const DIA_TESTE = null;

const promocoesDaSemana = {
 0: null,
 1: null,
 2: {
  dia:"Terça",
  titulo:"🔥 Terça do Refri!",
  descricao:"Na compra de uma pizza tamanho FAMÍLIA GANHE um refrigerante 1L"
 },
 3: {
  dia:"Quarta",
  titulo:"🍕 Quarta da Borda!",
  descricao:"Na compra de qualquer pizza GANHE borda recheada GRÁTIS"
 },
 4: {
  dia:"Quinta",
  titulo:"⭐ Quinta Dupla!",
  descricao:"Na compra de duas pizzas tamanho FAMÍLIA GANHE uma Coca-Cola 2L"
 },
 5: null,
 6: null
};

function diaDaPromocao(){

 return DIA_TESTE !== null
 ? DIA_TESTE
 : new Date().getDay();

}

/* Dias SEM promoção: mostra um aviso com as promoções da semana (terça, quarta, quinta) */
function htmlPromocoesSemana(){

 let linhas = "";

 [2,3,4].forEach(d=>{

  const p = promocoesDaSemana[d];

  if(!p) return;

  linhas += `
   <div class="semana-item">
    <strong>${p.titulo}</strong>
    <span>${p.descricao}</span>
   </div>
  `;

 });

 return `
  <span class="promo-etiqueta promo-etiqueta-semana">📅 PROMOÇÕES DA SEMANA</span>
  <div class="semana-subtitulo">Hoje não tem promoção, mas volte nesses dias:</div>
  ${linhas}
 `;

}

function mostrarPromocoesHome(){

 const caixa = document.getElementById("promoSemanaHome");

 if(!caixa) return;

 if(promocoesDaSemana[diaDaPromocao()]){
  caixa.style.display = "none";
  caixa.innerHTML = "";
  return;
 }

 caixa.innerHTML = htmlPromocoesSemana();
 caixa.style.display = "block";

}

function mostrarPromocaoDoDia(){

 const banner = document.getElementById("bannerPromocao");

 if(!banner) return;

 const promo = promocoesDaSemana[diaDaPromocao()];

 if(!promo){
  banner.className = "banner-promocao banner-semana";
  banner.innerHTML = htmlPromocoesSemana();
  banner.style.display = "block";
  return;
 }

 banner.className = "banner-promocao";

 banner.innerHTML = `
  <span class="promo-etiqueta">PROMOÇÃO DE ${promo.dia.toUpperCase()}</span>
  <div class="promo-titulo">${promo.titulo}</div>
  <div class="promo-descricao">${promo.descricao}</div>
 `;

 banner.style.display = "block";

}

function contarFamilias(){

 return pedido.pizzas.filter(p => p.tamanho === "familia").length;

}

/* Quarta: borda recheada grátis em qualquer pizza */
function bordaEhGratis(){

 return diaDaPromocao() === 3;

}

function precoBordaDaPizza(pizza){

 if(bordaEhGratis()) return 0;

 return pizza.tamanho === "broto" ? 7.90 : 11.90;

}

function recalcularPrecosBorda(){

 pedido.pizzas.forEach(pizza=>{

  if(pizza.borda){
   pizza.precoBorda = precoBordaDaPizza(pizza);
  }

 });

}

/* Brindes calculados na hora a partir das pizzas do pedido:
   Terça  = 1 refrigerante 1L por pizza FAMÍLIA
   Quinta = 1 Coca-Cola 2L a cada 2 pizzas FAMÍLIA */
function calcularBrindes(){

 const dia = diaDaPromocao();
 const familias = contarFamilias();
 const brindes = [];

 if(dia === 2 && familias > 0){

  brindes.push({
   nome:"Refrigerante 1L (sabor conforme disponibilidade)",
   qtd:familias
  });

 }

 if(dia === 4 && familias >= 2){

  brindes.push({
   nome:"Coca-Cola 2L",
   qtd:Math.floor(familias / 2)
  });

 }

 return brindes;

}

function htmlBrindes(){

 const brindes = calcularBrindes();

 if(brindes.length === 0) return "";

 let html = `<p>🎁 <strong>Brinde da promoção:</strong><br>`;

 brindes.forEach(b=>{
  html += `${b.qtd}x ${b.nome} - <strong>GRÁTIS</strong><br>`;
 });

 html += `</p>`;

 return html;

}

/* dica no Passo 1 para o cliente aproveitar a promoção */
function dicaPromocao(){

 const dia = diaDaPromocao();
 const familias = contarFamilias();

 if(dia === 2 && familias === 0){
  return "💡 Na terça o refrigerante 1L grátis vale para pizza FAMÍLIA.";
 }

 if(dia === 3){
  return "💡 Hoje a borda recheada é grátis! Escolha no próximo passo.";
 }

 if(dia === 4 && familias % 2 === 1){
  return "💡 Falta mais 1 pizza FAMÍLIA para ganhar a Coca-Cola 2L.";
 }

 return "";

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

 if(numero === 1){

  mostrarPromocoesHome();

 }

 if(numero === 2){

  mostrarPromocaoDoDia();
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
        onerror="this.style.display='none'"
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
        onerror="this.style.display='none'"
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
  precoBorda:0,
  adicionais:[]
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
    precoBorda:0,
  adicionais:[]
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

 html += htmlBrindes();

 const dica = dicaPromocao();

 if(dica){
  html += `<p class="dica-promocao">${dica}</p>`;
 }

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

 recalcularPrecosBorda();

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

  const textoAcrescimo =
  bordaEhGratis()
  ? "🎁 GRÁTIS - Promoção de Quarta"
  : "Acréscimo: R$ " + acrescimo;

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
      <br><small>${textoAcrescimo}</small>
     </button>

     <button
      id="btnBorda${i}Cheddar"
      class="opcao opcao-pequena${pizza.tipoBorda === "cheddar" ? " selecionado" : ""}"
      onclick="selecionarBordaPizza(${i}, 'cheddar')">
      Cheddar
      <br><small>${textoAcrescimo}</small>
     </button>

    </div>

    ${htmlAdicionaisPizza(pizza, i)}

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

  pizza.precoBorda = precoBordaDaPizza(pizza);

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

function precoAdicionais(pizza){

 let total = 0;

 (pizza.adicionais || []).forEach(nome=>{

  const a = ADICIONAIS.find(x => x.nome === nome);

  if(a) total += a.preco;

 });

 return total;

}

function htmlAdicionaisPizza(pizza, i){

 const selecionados = pizza.adicionais || [];

 let html = `
  <details class="adicionais-pizza" ${selecionados.length ? "open" : ""}>
   <summary>➕ Adicionais (opcional)</summary>
   <div class="opcoes-adicionais">
 `;

 ADICIONAIS.forEach((a,k)=>{

  html += `
   <button
    id="btnAdic${i}_${k}"
    class="opcao opcao-pequena${selecionados.includes(a.nome) ? " selecionado" : ""}"
    onclick="alternarAdicional(${i}, ${k})">
    ${a.nome}
    <br><small>+ R$ ${a.preco.toFixed(2).replace(".", ",")}</small>
   </button>
  `;

 });

 html += `</div></details>`;

 return html;

}

function alternarAdicional(i, k){

 const pizza = pedido.pizzas[i];

 if(!pizza) return;

 if(!pizza.adicionais) pizza.adicionais = [];

 const nome = ADICIONAIS[k].nome;
 const pos = pizza.adicionais.indexOf(nome);

 if(pos >= 0){
  pizza.adicionais.splice(pos, 1);
 }else{
  pizza.adicionais.push(nome);
 }

 const btn = document.getElementById(`btnAdic${i}_${k}`);

 if(btn){
  btn.classList.toggle("selecionado", pos < 0);
 }

 atualizarCarrinhoFlutuante();

}

function totalPizzas(){

 let total = 0;

 pedido.pizzas.forEach(pizza=>{

  total += pizza.preco;
  total += pizza.precoBorda;
  total += precoAdicionais(pizza);

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
   recalcularPrecosBorda();

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

  resumo += `🍕 ${pizza.sabor}${(pizza.adicionais || []).length ? " (+" + pizza.adicionais.join(", ") + ")" : ""}<br>`;

 });

 if(qtdBebidas > 0){
  resumo += `🥤 ${qtdBebidas} Bebida(s)`;
 }else{
  resumo = resumo.replace(/<br>$/, "");
 }

 calcularBrindes().forEach(b=>{
  resumo += `<br>🎁 ${b.qtd}x ${b.nome}`;
 });

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

 ${htmlBrindes()}

 <hr>

 <h2>
 Total: R$ ${pedido.total.toFixed(2)}
 </h2>

 `;

const btnWhatsapp =
document.querySelector(".whatsapp");

if(pedido.frete === null){

 btnWhatsapp.innerHTML =
 "✅ Confirmar Pedido<br><small>O valor do frete confirmamos com você</small>";

}else{

 btnWhatsapp.innerHTML =
 "✅ Confirmar Pedido";

}

 mostrarEtapa(9);

}

let enviandoPedido = false;
let ultimoPedidoEnviado = {codigo:"", msg:""};

async function finalizarPedido(){

 if(enviandoPedido) return;

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

 if(pizza.precoBorda === 0){
  pizzasTexto += " 🎁 (GRÁTIS - Promoção)";
 }
}

  (pizza.adicionais || []).forEach(nome=>{
   pizzasTexto += ` + Adicional: ${nome}`;
  });

  pizzasTexto += "\n";

 });

 let bebidasTexto = "";

 pedido.bebidas.forEach(item=>{

  bebidasTexto +=
  ` ${item.nome} (${item.qtd}x)\n`;

 });

let brindesTexto = "";

 calcularBrindes().forEach(b=>{

  brindesTexto +=
  ` 🎁 BRINDE: ${b.qtd}x ${b.nome}\n`;

 });

/* linha "Promoção:" lida pelo painel de pedidos (só quando a promoção realmente foi aplicada) */
let promocaoTexto = "";
let promoNome = "";

const promoAplicada =
 calcularBrindes().length > 0 ||
 (bordaEhGratis() && pedido.pizzas.some(p => p.borda));

if(promoAplicada){

 const promoDoDia = promocoesDaSemana[diaDaPromocao()];

 if(promoDoDia){
  promocaoTexto = `Promoção: ${promoDoDia.dia}\n\n`;
  promoNome = promoDoDia.titulo.replace(/[^\p{L}\p{N}\s]/gu, "").trim();
 }

}

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
${brindesTexto}

--------------------------------
Frete: ${
 pedido.frete === null
 ? "A calcular"
 : "R$ " + pedido.frete.toFixed(2)
}
--------------------------------
Total: R$ ${pedido.total.toFixed(2)}

${promocaoTexto}Forma de Pagamento: ${formaPagamento}

Observações:
${obs}

`;
const subtotalPlanilha =
 totalPizzas() + totalBebidas();

let brindesPlanilha = "";

calcularBrindes().forEach(b=>{
 brindesPlanilha += `${b.qtd}x ${b.nome}; `;
});

const dadosPedido = {

 pedido: String(codigoPedido),

 data: new Date().toLocaleString("pt-BR"),

 nome: nome,

 telefone: telefone,

 rua: rua,

 numero: numero,

 complemento: complemento,

 bairro: bairro,

 pizzas: pizzasTexto.trim(),

 bebidas: bebidasTexto.trim(),

 promocao: promoNome,

 brindes: brindesPlanilha.trim().replace(/;$/, ""),

 subtotal: subtotalPlanilha.toFixed(2),

 frete:
 pedido.frete === null
 ? "A calcular"
 : pedido.frete.toFixed(2),

 total:
 pedido.total.toFixed(2),

 formaPagamento: formaPagamento,

 observacoes: obs,

 origem: "Site"

};

/* Registra o pedido na planilha (a pizzaria é avisada por lá).
   Só mostra "Pedido enviado" se a planilha confirmou. */
enviandoPedido = true;

const botaoEnviar = document.querySelector("#etapa9 .whatsapp");
if(botaoEnviar){
 botaoEnviar.disabled = true;
 botaoEnviar.innerHTML = "⏳ Enviando pedido...";
}

const registrado = await enviarPedidoParaPlanilha(dadosPedido);

enviandoPedido = false;

if(botaoEnviar){
 botaoEnviar.disabled = false;
 botaoEnviar.innerHTML = "✅ Confirmar Pedido";
}

ultimoPedidoEnviado = { codigo: String(codigoPedido), msg: msg };

limparRascunho();

mostrarTelaPedidoEnviado(registrado);

}

async function enviarPedidoParaPlanilha(dados){

 const controle = new AbortController();
 const timer = setTimeout(()=> controle.abort(), 20000);

 try{

  const resposta = await fetch(URL_PLANILHA, {
   method: "POST",
   body: JSON.stringify(dados),
   signal: controle.signal
  });

  if(!resposta.ok) return false;

  try{
   const resultado = await resposta.json();
   if(resultado && resultado.ok === false) return false;
  }catch(e){
   /* resposta sem JSON: o que importa é o status HTTP ter sido OK */
  }

  return true;

 }catch(erro){

  console.error("Falha ao registrar pedido na planilha:", erro);
  return false;

 }finally{

  clearTimeout(timer);

 }

}

function mostrarTelaPedidoEnviado(registrado){

 const titulo = document.getElementById("tituloEnviado");
 const texto = document.getElementById("textoEnviado");
 const btnWhats = document.getElementById("btnWhatsEnviado");
 const btnNovo = document.getElementById("btnNovoPedido");
 const check = document.getElementById("checkEnviado");

 if(registrado){

  check.innerHTML = "✅";
  titulo.innerHTML = "Pedido enviado!";
  texto.innerHTML =
   "Recebemos o seu pedido <strong>Nº " + ultimoPedidoEnviado.codigo.slice(-4) + "</strong>. " +
   "Vamos conferir e falar com você pelo WhatsApp para confirmar (e informar o frete, se precisar).";
  btnWhats.innerHTML = "💬 Falar com a pizzaria no WhatsApp";
  btnWhats.className = "continuar";
  btnNovo.className = "continuar btn-verde";

 }else{

  check.innerHTML = "⚠️";
  titulo.innerHTML = "Falta só um passo";
  texto.innerHTML =
   "Não conseguimos registrar o seu pedido direto. " +
   "<strong>Toque no botão abaixo e envie a mensagem pelo WhatsApp</strong> para a pizzaria receber.";
  btnWhats.innerHTML = "📲 Enviar pedido no WhatsApp";
  btnWhats.className = "continuar btn-verde";
  btnNovo.className = "continuar";

 }

 mostrarEtapa(10);

}

function abrirWhatsAppPedido(){

 window.open(
  `https://wa.me/${whatsapp}?text=${encodeURIComponent(ultimoPedidoEnviado.msg)}`,
  "_blank"
 );

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
- ${pizza.precoBorda === 0 ? "🎁 GRÁTIS" : "R$ " + pizza.precoBorda.toFixed(2)}
</p>
`;
   total += pizza.precoBorda;

  }

  (pizza.adicionais || []).forEach(nome=>{

   const a = ADICIONAIS.find(x => x.nome === nome);

   if(!a) return;

   html += `
<p>
 ➕ Adicional ${a.nome}
 - R$ ${a.preco.toFixed(2)}
</p>
`;

   total += a.preco;

  });

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

 html += htmlBrindes();

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
