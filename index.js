var adjsF = [
  "escondida", "amarga", "nebulosa", "silenciosa", "vazia", "seca", "escura",
  "gelada", "delicada", "quieta", "branca", "legal", "paciente", "carmesin",
  "fina", "encharcada", "azul", "esvoaçante", "quebrada", "fria", "úmida",
  "caindo", "verde", "longa", "tardia", "prolongada", "corajosa", "pequena",
  "lamacenta", "velha", "vermelha", "brusca", "imóvel", "pequena", "cintilante",
  "latejante", "tímida", "errante", "murcha", "selvagem", "preta", "jovem",
  "sagrada", "solitária", "perfumada", "idosa", "pura", "orgulhosa", "floral",
  "inquieta", "divina", "elegante", "antiquada", "roxa", "animada", "desconhecida",
  "sortuda", "real", "ampla", "íngreme", "plana", "redonda", "muda", "barulhenta",
  "rude", "rouca", "suave", "estridente", "rápida", "doce", "encaracolada", "calma",
  "alegre", "estravagante", "plana", "brilhante"
];

var adjsM = [
  "escondido", "amargo", "nebuloso", "silencioso", "vazio", "seco", "escuro",
  "gelado", "delicado", "quieto", "branco", "legal", "paciente", "carmesin",
  "fino", "encharcado", "azul", "esvoaçante", "quebrado", "frio", "úmido",
  "caindo", "verde", "longo", "tardio", "prolongado", "corajoso", "pequeno",
  "lamacento", "velho", "vermelho", "brusco", "imóvel", "pequeno", "cintilante",
  "latejante", "tímido", "errante", "murcho", "selvagem", "preto", "jovem",
  "sagrado", "solitário", "perfumado", "idoso", "puro", "orgulhoso", "floral",
  "inquieto", "divino", "elegante", "antiquado", "roxo", "animado", "desconhecido",
  "sortudo", "real", "amplo", "íngreme", "plano", "redondo", "mudo", "barulhento",
  "rude", "rouco", "suave", "estridente", "rápido", "doce", "encaracolado", "calmo",
  "alegre", "estravagante", "plano", "brilhante"
];

var subsM = [
  "frio", "vento", "oceano", "amanhecer", "brilho", "lago", "pinho", "pasto", 
  "sol", "pássaro", "riacho", "arbusto", "orvalho", "campo", "fogo", "silêncio",
  "som", "céu", "trovão", "sol", "sonho", "papel", "sapo", "átomo",
  "bloco", "barco", "prazo", "crédito", "disco", "coração", "limite", "pão",
  "bônus", "laboratório", "modo", "dente", "rei", "leão", "tigre", "pinguim",
  "kiwi", "bolo", "rato", "arroz", "chapéu"
];

var subsF= [
  "cachoeira",  "brisa", "lua", "chuva", "manhã", "neve", "sombra", "folha", 
  "floresta", "colina", "nuvem", "clareira", "borboleta", "poeira", "flor",
  "pena", "grama", "neblina", "montanha", "noite", "lagoa", "escuridão",
  "forma", "ressaca", "violeta", "água", "onda", "maré", "ressonância",
  "madeira", "cereja", "névoa", "geada", "voz", "fumaça", "estrela",
  "banda", "barra", "base", "arte", "moda", "verdade", "matemática",
  "unidade", "célula", "cena", "receita", "união", "torrada", "lama",
  "poesia", "sala", "rainha", "coca", "salada", "árvore"
];

function extend(obj) {
  Array.prototype.slice.call(arguments, 1).forEach(function (source) {
    var prop;
    if (source) {
      for (prop in source) {
        obj[prop] = source[prop];
      }
    }
  });
  return obj;
}

var haikunator = function (opt) {
  if ((Math.floor((Math.random() * 100) + 1)) % 2 == 0) {
    adjs = adjsF;
    subs = subsF;
  } else {
    adjs = adjsM;
    subs = subsM;
  }
  var i, adj, sub, sections, defaults, token = "";

  defaults = {
    delimiter: "-",
    tokenLength: 4,
    tokenHex: false,
    tokenChars: "0123456789"
  };

  opt = extend(defaults, opt);

  if (opt.tokenHex === true) {
    opt.tokenChars = "0123456789abcdef";
  }

  adj = adjs[Math.floor(Math.random() * adjs.length)];
  sub = subs[Math.floor(Math.random() * subs.length)];

  for (i = 0; i < opt.tokenLength; i++) {
    token += opt.tokenChars.charAt(Math.floor(Math.random() * opt.tokenChars.length));
  }

  sections = [sub, adj, token];
  return sections.filter(function (e) { return e === 0 || e; }).join(opt.delimiter);
};

module.exports = haikunator;
