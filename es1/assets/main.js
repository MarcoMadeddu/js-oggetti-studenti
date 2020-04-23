console.log("java is done");

var studenti = {
  nome: "Mattia",
  cognome: "Piu",
  età: 20
}
var quant =0;

for (var key in studenti){
  quant++
  console.log(key + ":" + studenti[key]);

}
console.log(quant);
