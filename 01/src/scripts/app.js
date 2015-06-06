(function(global, undefined) {
  'use strict';

  if(!global.app) throw new Error('Application app is not defined.');

  //---

  var p, ul, li;
  var htmlContent = $('<div/>');

  htmlContent.append( $('<p/>').append('Application Running...') );

  //-- Hello

  p = $('<p/>').append( 'say hello...' );
  htmlContent.append( p );
  ul = $('<ul/>');
  p.append( ul );

  var hello = new app.Hello();

  console.log( hello.say() );
  console.log( hello.say(  'Erko Bridee'  ) );

  ul.append( $('<li/>').append( hello.say() ) );
  ul.append( $('<li/>').append( hello.say(  'Erko Bridee'  ) ) );

  p = ul = li = null;

  //--- Sum

  p = $('<p/>').append( 'sum a + b' );
  htmlContent.append( p );
  ul = $('<ul/>');
  p.append( ul );

  var sum = new app.Sum();

  console.log( sum.add( 1, 1) );
  console.log( sum.add( 101, 212) );

  ul.append( $('<li/>').append( sum.add( 1, 1) ) );
  ul.append( $('<li/>').append( sum.add( 101, 212) ) );

  p = ul = li = null;

  //---

  $('#outputArea').append( htmlContent );


})(window);
