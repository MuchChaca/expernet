
// var allVars = {
// 	v1: 3.14,
// 	prenom: 'name\'s named',
// 	txt2: "still \"text\" 'text2'",
// 	typeoftxt2: "type of allVars",
// }

// if(true) {
// 	//
// } else if(false) {
// 	//
// } else {
// 	//
// }

// switch(allVars.length) {
// 	case 1:
// 		console.log("1");
// 		break;
// 	case 2:
// 		console.log("2");
// 		break;
// 	case 3:
// 		console.log("3");
// 		break;
// 	default:
// 		alert("def");
// 		break;
// }

// var test = false;
// while(test){
// 	console.log("");
// 	test = false;
// }

// var lien = document.querySelector('a');
// alert("1er line trouvé: " + lien.attributes);

var tabLiens = document.querySelectorAll('a');

console.log("[FOREACH]");
tabLiens.forEach(element => {
	console.log(element.innerHTML);
});
console.log("[//FOREACH]");

console.log("[FOR]");
for (var i = 0; i < tabLiens.length; i++) {
	const elem = tabLiens[i];
	console.log(elem.innerHTML);
}
console.log("[//FOR]");



