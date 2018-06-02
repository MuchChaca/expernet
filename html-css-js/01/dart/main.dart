import 'dart:html';
import 'dart:js';

void main() {

  //   int iter = 0;

  //   while (iter < 10) {
  //     print(iter);
  //     iter++;
  //   }

  //   for (var i = 0; i < 5; i++) {
  //     print("-" * (i + 5));
  //   }

  //   do {
  //     print("do while");
  //     iter++;
  //   } while(iter < 20);

  // var elem1 = querySelector('#t1');
  // // div.text = "TESSSSSSSSSSSSSSSSSTED";
  // elem1.appendText("text");


  // var dfName = context.callMethod('prompt',['Name ?','']);

  // window.alert("Hello " + dfName);

  // var ul = querySelectorAll('#numbs > li');
  // ul.forEach((elem) => window.alert(elem.innerHtml));

  // var aAc = querySelector('#accueil');
  // window.alert(aAc.attributes['href']);
  // aAc.attributes['href'] = '#';
  // window.alert(aAc.attributes['href']);

  querySelector('#playfield-h1')
    ..style.color = "cyan"
    ..style.fontSize = "100px";

  querySelector('#numbs')
    ..style.listStyleType = "upper-roman";




  void changeColorD(String color) => querySelector('#playfield-h1')
    ..style.color = color;

  querySelector('#playfield-h1').onClick.listen((e) => changeColorD('gold'));


}