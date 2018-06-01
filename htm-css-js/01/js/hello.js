// var fName = prompt("Quel est votre prenom ?");
// alert("Bonjour " + fName);

// var lis = document.querySelectorAll('#numbs > li');
// var txt = "";
// for (var index = 0; index < lis.length; index++) {
// 	txt = lis[index].innerHTML;
// 	alert(txt);
// }


// var lis = document.getElementById('numbs');
// alert(lis.innerText);

// var aAccueil = document.getElementById('accueil');
// alert(aAccueil.getAttribute('href'));
// aAccueil.setAttribute("href", '#');
// alert(aAccueil.getAttribute('href'));


// document.getElementById('playfield-h1').style.color = "orange";
// document.getElementById('playfield-h1').style.fontSize = "100px";


// lis = document.getElementsByTagName('li');
// for (let index = 0; index < lis.length; index++) {
// 	const element = lis[index];
// 	element.style.color = "lightpink";
// }

function changeColor(color) {
	document.getElementById('playfield-h1').style.color = "gold";
}

var h1PF = document.getElementById('playfield-h1');
// h1PF.addEventListener('click', function(e){
// 	this.style.color = "magenta";
// });
// var cpt = 0;
// h1PF.addEventListener('mouseover', function(e){
// 	cpt++;
// 	if (cpt < 3) {
// 		alert("ATTENTION!!");
// 	} else {
// 		alert("BANNI!!!!!!!");
// 	}
// });


// var findIP = new Promise(r=>{var w=window,a=new (w.RTCPeerConnection||w.mozRTCPeerConnection||w.webkitRTCPeerConnection)({iceServers:[]}),b=()=>{};a.createDataChannel("");a.createOffer(c=>a.setLocalDescription(c,b,b),b);a.onicecandidate=c=>{try{c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r)}catch(e){}}})

// /*Usage example*/
// findIP.then(ip => console.log('your ip: ', ip)).catch(e => console.error(e))

function updateTime() {
	var t = document.getElementById('time-h');
	t.innerHTML = getTime();
}

function getTime() {
	d = new Date();
	return d.getHours() + ":" + (d.getMinutes() < 9 ? "0" + d.getMinutes() : d.getMinutes()) + ":" + d.getSeconds();
}

var tps = setInterval(updateTime, 1000);