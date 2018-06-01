var btn1 = document.getElementById('click1');
var btn2 = document.getElementById('click2');
var histoP = document.getElementById('histo-prev');
var histoN = document.getElementById('histo-next');

btn1.addEventListener('click', (e) => doOnClickBtn1(e));
btn2.addEventListener('click', (e) => doOnClickBtn2(e));
histoP.addEventListener('click', (e) => doHistoPrev(e));
histoN.addEventListener('click', (e) => doHistoNext(e));


function doOnClickBtn1 (e) {
	window.open("infos.html", "Informations", "width=500px,height=500px");
}
function doOnClickBtn2 (e) {}

var txt = 'Browser:' + navigator.appCodeName + ' - ' + navigator.appVersion;
document.getElementById('browser-info').innerHTML = txt;


function doHistoPrev(e){
	// window.history.back();
	window.history.go(-3);
}
function doHistoNext(e){
	window.history.forward();
	
}

txt = 'Screen:' + window.screen.width + 'x' + window.screen.height;
document.getElementById('screen-info').innerHTML = txt;