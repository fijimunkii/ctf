const ais = require('ais-decoder-ts');
const Decoder = ais.Decoder
const messages = [
'!AIVDO,1,1,,,B52L5BP3wk?8mP=18D3Q3wwUSP06,0*2F'
];
const results = (new Decoder(messages, false)).getResults();
console.log(results);

