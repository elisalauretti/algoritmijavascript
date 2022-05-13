/**
	* Scrivere una funzione che conti le ricorrenze dei caratteri all'interno di
	* una parola. La funzione dovrà restituire un'oggetto con chiave la lettera e
	* come valore il conteggio. Mostrare il risultato in console.
	* Esempio
	* countChar("hello") => {h: 1, e: 1, l: 2, o: 1}
	*/

	var parola = "hello"; // prova
	var conto=0;
	var uscita={};

	function countChar(parola){
		var vettore=parola.split("");
		vettore.forEach(function(element){
			for(var i=0;i<vettore.length;i++){
				if (element===vettore[i]){
					conto++;
				}
			}
			uscita[element] = conto;
			conto = 0;
		})
		return uscita;
	}

console.log(countChar(parola));  //basta cambiare la variabile prima di chiamare la funzione