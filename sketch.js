//variaveis da bolinha 
let xBolinha = 300; //criar variavel para bolinha
let yBolinha = 200; //criar variavel para bolinha
let diametroBolinha = 15; //criar variavel para bolinha
let raio = diametroBolinha / 2 //criar variavel para coledir na ponta, e não no centro então somamos mais o raio 

//variaveis da velocidade da bolinha 
let velocidadexBolinha = 4; //criar variavel para bolinha andar
let velocidadeyBolinha = 4; //criar variavel para bolinha andar

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

//variaveis da raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeyOponente; //criar variavel da velocidade do oponente
let velocidadexOponente; //criar variavel da velocidade do oponente

//Variavel pontos do jogo
let meusPontos = 0;
let oponentesPontos = 0;

let colidiu = false;

function setup() { //tamanho do funco
  createCanvas(600, 400);
}
function draw(){
  background(0) //cor do quadrado fundo
  mostraBolinha();
  movimentaBolinha();
  verificaborda();
  mostrarRaquete(xRaquete, yRaquete); //chamar duas vezes a mesma função mas com valores diferente
  mostrarRaquete(xRaqueteOponente, yRaqueteOponente); //chamar duas vezes a mesma função mas com valores diferente
  movimentaMinhaRaquete();
  movimentaRaqueteOponente(xRaqueteOponente, yRaqueteOponente);
  verificarcolisaodaRaquete(xRaquete, yRaquete);
  verificarcolisaodaRaquete(xRaqueteOponente, yRaqueteOponente);
  incluirPlacar();
  marcaPntos();
}  

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametroBolinha) // criar bolinha na posição
}

function movimentaBolinha(){
  xBolinha += velocidadexBolinha; //bolinha recebendo o valor da bolinha mais o valor da variavel para andar
  yBolinha += velocidadeyBolinha; //bolinha recebendo o valor da bolinha mais o valor da variavel para andar
}

function verificaborda(){
  if( xBolinha + raio > width|| xBolinha - raio < 0 ){ //se a bolinha tocar no limete ela recebe o valor *-1 isso vai dar negativo e vai voltar
    velocidadexBolinha *=-1;
  }
  if( yBolinha + raio > height || yBolinha - raio < 0 ){ //se a bolinha tocar no limete ela recebe o valor *-1 isso vai dar negativo e vai voltar
    velocidadeyBolinha *= -1
  }
}

function mostrarRaquete(x, y){
  rect(x, y, larguraRaquete, alturaRaquete) // criar raquete na posição
}

function movimentaMinhaRaquete (){
  if (keyIsDown(UP_ARROW)){ //o valor da posição da raquete recebe -10 para subir 
    yRaquete -=10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete +=10; //o valor da posição da raquete recebe +10 para descer 
  }
}

  function movimentaRaqueteOponente(){
    velocidadeyOponente = yBolinha - yRaqueteOponente - larguraRaquete / 2 - 30;
    yRaqueteOponente += velocidadeyOponente;
}

function verificarcolisaodaRaquete(x, y) {
  colidiu = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadexBolinha *= -1;
  }
}

function incluirPlacar(){
  fill(255); //pintar os pontos na cor branca
  text(meusPontos, 200, 26); //impromir meus pontos nessa posição
  text(oponentesPontos, 400, 26); //impromir meus pontos nessa posição
}

function marcaPntos(){
  if (xBolinha > 595){
    meusPontos += 1;
  }
  if (xBolinha < 5){
    oponentesPontos += 1;
  }
}

  
























