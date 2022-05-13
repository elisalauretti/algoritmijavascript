/**
	* Scrivere una funzione che controlli se una data stringa è palindroma
	* oppure no. Mostrare il risultato in console.
	* isPalindrome("anna") => true
	* isPalindrome("manuel") => false
	*/
var parola="anna";  //prova 
function isPalindrome(parola){
	var spezzata=parola.split("");
	var invertita=spezzata.reverse();
	var ricucita = invertita.join("");

	if(parola==ricucita){
		return true;
	} else{
		return false;
	}
}
console.log(isPalindrome(parola));  //basta cambiare la variabile prima di chiamare la funzione o direttamente nella funzione
