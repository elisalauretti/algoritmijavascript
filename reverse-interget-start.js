/**
	* Dato un numero intero restituire il numero inverso
	* Esempio
	* reverseInt(15) => 51
	* reverseInt(981) => 189
	* reverseInt(-90) => -9
	* reverseInt(-15) => -51
	*/
    var reversenumero;
	function reverseInt(numero){
		var spezzata= numero.toString().split("");	
		if(spezzata[0]==="-"){
			spezzata.splice(0,1,"");
			var invertito = spezzata.reverse();
			var ultimoposto = invertito.length - 1
			if (ultimoposto == "0") {
				invertito.splice(ultimoposto, 1, "");
			}
			var ricucito = invertito.join("");
			var reversestringa= "-" + ricucito;
		}else{
			var invertito= spezzata.reverse();
			var ultimoposto = invertito.length - 1
			if (ultimoposto == "0") {
				invertito.splice(ultimoposto, 1, "");
			}
			var reversestringa= invertito.join("");
		}
		return reversenumero=Number(reversestringa);
	}
	console.log(reverseInt(-80));