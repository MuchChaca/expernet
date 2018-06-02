import 'dart:html';

void main() {
  // Browser info
  String txtBrow = 'Browser info: ';
  txtBrow += window.navigator.appCodeName;
  txtBrow += ' - ';
  txtBrow += window.navigator.appVersion;
  querySelector('#browser-info').innerHtml = txtBrow;
  // Screen info
  String txtScreen = 'Screen info: ';
  txtScreen += window.screen.width.toString();
  txtScreen += 'x';
  txtScreen += window.screen.height.toString();
  querySelector('#screen-info').innerHtml = txtScreen;

  // New window
  WindowBase opened; 
  querySelector('#click1').onClick.listen((e) => opened = newWindow());
  // Page prev (3rd)
  querySelector('#histo-prev').onClick.listen((e) => doPagePrev());
  // Page next (1st)
  querySelector('#histo-next').onClick.listen((e) => doPageNext());


  // close new window
  querySelector('#click2').onClick.listen((e) => closeWindow(opened));
}

WindowBase newWindow() => window.open("infos.html", "String target,", "_blank");


void doPagePrev () {
  window.history.back();
  window.history.go(-3);
}
void doPageNext () {
  window.history.forward();
}

closeWindow(WindowBase wb) => wb.close();



