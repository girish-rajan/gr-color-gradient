var colorInputvar1 = document.querySelector(".selectColor1");
var colorInputvar2 = document.querySelector(".selectColor2");
var colorGradient= document.querySelector("body");

console.log("test "+ colorInputvar1);

colorInputvar1.addEventListener("input",function(){
 	console.log("test"+ colorInputvar1.value);
 	colorGradient.style.background="linear-gradient(to right, " + colorInputvar1.value + ", "+ colorInputvar2.value+")";
 	                           });

colorInputvar2.addEventListener("input",function(){
 	console.log("test"+ colorInputvar1.value);
 	colorGradient.style.background="linear-gradient(to right, " + colorInputvar1.value + ", "+ colorInputvar2.value+")";
 	                           });