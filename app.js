	
var bigbox = document.getElementById("bigbox");
var personbox = document.getElementById("personbox");
var computerbox = document.getElementById("computerbox");
function buttonfunction(){
	var text = personbox.value; 
	if (text==="hello") {
		computerbox.value='wubalubdudub';
	}
	if (text==="how are you doing") {
		computerbox.value='sandwhich';
	}
	if (text==="how the weather today govner") {
		computerbox.value='spiders';
	}
	bigbox.value += personbox.value + computerbox.value
}