/*var scoreOui=0
var scoreNon=0
function ouiPlus() {
	scoreOui=scoreOui+1
	document.getElementById('scoreOui').innerText = scoreOui;
}
function ouiMoins() {
	scoreOui=scoreOui-1
	document.getElementById('scoreOui').innerText = scoreOui;
}
function nonPlus() {
	scoreNon=scoreNon+1
	document.getElementById('scoreNon').innerText = scoreNon;
}
function nonMoins() {
	scoreNon=scoreNon-1
	document.getElementById('scoreNon').innerText = scoreNon;
}*/


//INITIALISATION
if (localStorage.ScoreOui== null){
localStorage.setItem('ScoreOui',0)
}
else{
document.getElementById('scoreOui').innerText = parseInt(localStorage.getItem('ScoreOui'));
}
if (localStorage.ScoreNon== null){
localStorage.setItem('ScoreNon',0)
}
else{
document.getElementById('scoreNon').innerText = parseInt(localStorage.getItem('ScoreNon'));
}


//GLOBAL
function ouiPlus(){
	a=parseInt(localStorage.getItem('ScoreOui'))
	a=a+1
	localStorage.setItem('ScoreOui',a)
	document.getElementById('scoreOui').innerText = parseInt(localStorage.getItem('ScoreOui'));
}
function ouiMoins() {
	a=parseInt(localStorage.getItem('ScoreOui'))
	a=a-1
	localStorage.setItem('ScoreOui',a)
	document.getElementById('scoreOui').innerText = parseInt(localStorage.getItem('ScoreOui'));
}
function nonPlus() {
	a=parseInt(localStorage.getItem('ScoreNon'))
	a=a+1
	localStorage.setItem('ScoreNon',a)
	document.getElementById('scoreNon').innerText = parseInt(localStorage.getItem('ScoreNon'));
}
function nonMoins() {
	a=parseInt(localStorage.getItem('ScoreNon'))
	a=a-1
	localStorage.setItem('ScoreNon',a)
	document.getElementById('scoreNon').innerText = parseInt(localStorage.getItem('ScoreNon'));
}