//variaveis da bolinha 
let xBolinha = 300; //criar variavel para bolinha
let yBolinha = 200; //criar variavel para bolinha
let diametroBolinha = 12; //criar variavel para bolinha
let raio = diametroBolinha / 2 //criar variavel para coledir na ponta, e não no centro então somamos mais o raio 

//variaveis da velocidade da bolinha 
let velocidadexBolinha = 6; //criar variavel para bolinha andar
let velocidadeyBolinha = 6; //criar variavel para bolinha andar

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

//variaveis da raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

//Variavel pontos do jogo
let meusPontos = 0;
let oponentesPontos = 0;

let colidiu = false;

//sons do jogo
let raquetada; //criar variaveis para puxar o som do jogo
let ponto;
let trilha;


function setup() { //tamanho do funco
  createCanvas(600, 400);
  trilha.loop(); // para dar play na variavel trilha que é da musica se quiser ficar tocando sempre seria loop
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
    ponto.play();
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

//   function movimentaRaqueteOponente(){
//     if (keyIsDown(87)){ //o valor da posição da raquete recebe -10 para subir
//       yRaqueteOponente -=10;
//     }
//     if (keyIsDown(83)){
//       yRaqueteOponente +=10; //o valor da posição da raquete recebe +10 para descer
//     }
// }

function movimentaRaqueteOponente(){
  velocidadeyOponente = yBolinha - yRaqueteOponente - larguraRaquete / 2 - 30;
  yRaqueteOponente += velocidadeyOponente;
}

function verificarcolisaodaRaquete(x, y) {
  colidiu = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadexBolinha *= -1;
    raquetada.play(); // verifica se colidiu, se sim ela vai emitir o som
  }
}

function incluirPlacar(){
  stroke(255); // contorno na cor branca da caixa de placar
  textAlign(CENTER); // todos os texto centralizado
  textSize(16);//aumentar tamanho do placar

  fill(color(255, 140, 0)); //pintar caixinha dos pontos de laranja
  rect(130,10,40,20); //criar minha caixinha de pontos do jogo
  rect(430,10,40,20); //criar caixinha do oponente pontos do jogo

  fill(255); //pintar os pontos na cor branca
  text(meusPontos, 150, 26); //impromir meus pontos nessa posição
  fill(255); //pintar os pontos na cor branca
  text(oponentesPontos, 450, 26); //impromir meus pontos nessa posição
}

function marcaPntos(){
  if (xBolinha > 595){
    meusPontos += 1;
  }
  if (xBolinha < 5){
    oponentesPontos += 1;
  }
}

function preload(){ //função que está recebendo o son do jogo e passando para as variaveis criadas no começo do codigo (loadSound = carrega som)
  trilha = loadSound("trilha.mp3");
  raquetada = loadSound ("raquetada.mp3");
  ponto = loadSound ("ponto.mp3");
}
