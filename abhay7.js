var h1 = document.querySelector("h1");
//h1.style.color = "red";
var bool = true;

setInterval(function(){
	if(bool==true){
		h1.style.color = "red";
	}
	else{
		h1.style.color = "#2c3e50";
	}
	bool = !bool;
},1000);