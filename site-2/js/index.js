index.js
[user@work-browser btndlabs.io]$ cat js/index.js 
$('.txt').html(function(i, html) {
  var chars = $.trim(html).split("");

  return '<span>' + chars.join('</span><span>') + '</span>';
