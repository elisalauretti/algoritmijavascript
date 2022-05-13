/**
	* Data una stringa, restituire una stringa con i caratteri in ordine inverso.
	* Esempio:
	* reverse("ciao") => "oaic"
	*/

function invertirestringa(stringa){
	var spezzata = stringa.split("");
	var spezzatainvertita = spezzata.reverse();
	var invertita = spezzatainvertita.join("");
	return invertita;
}

console.log(invertirestringa("Elisa"));

