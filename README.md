# alphonsus
Gere nomes poéticos e aleatórios

## Instalação

```
npm install alphonsus
```

## Uso

```javascript
var alphonsus = require("alphonsus");

// uso normal
alphonsus() // => "clareira-tímida-5150"

// tamanho customizado (padrão=4)
alphonsus({tokenLength: 6}) // => "disco-divino-457821"

// use hex ao invés de números
alphonsus({tokenHex: true}) // => "barco-jovem-fccf"

// use custom chars instead of numbers/hex
alphonsus({tokenChars: "castidade"}) // => "campo-rude-aesa"

// não incluir um token
alphonsus({tokenLength: 0}) // => "arte-desconhecida"

// use um delimitador diferente
alphonsus({delimiter: "*"}) // => "poeira*pura*4521"

// sem token, delimitado por espaços
alphonsus({tokenLength: 0, delimiter: " "}) // => "brilho quieto"

// sem token, delimitador vazio
alphonsus({tokenLength: 0, delimiter: ""}) // => "montanhaelegante"
```

## Opções

As seguintes opções estão disponíveis:

```javascript
alphonsus({
  delimiter: "-",
  tokenLength: 4,
  tokenHex: false,
  tokenChars: "0123456789"
});
```
