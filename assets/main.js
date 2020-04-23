console.log("java is done");

var studenti = {
  nome: "Mattia",
  cognome: "Piu",
  età: 20
}

for (var key in studenti){
  console.log(key + ":" + studenti[key]);
}
