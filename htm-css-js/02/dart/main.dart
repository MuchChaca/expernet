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
  querySelector('#click1').onClick.listen((e) => newWindow());
  // Page prev (3rd)
  querySelector('#histo-prev').onClick.listen((e) => doPagePrev());
  // Page next (1st)
  querySelector('#histo-next').onClick.listen((e) => doPageNext());
}

void newWindow() {
  window.open("infos.html", "String target,");
}


void doPagePrev () {
  window.history.back();
  window.history.go(-3);
}
void doPageNext () {
  window.history.forward();
}



