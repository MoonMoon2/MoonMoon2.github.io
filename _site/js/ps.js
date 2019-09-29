var ascii_range = (function() {
  var data = [];
  while (data.length < 127) data.push(String.fromCharCode(data.length));
  return function (start,stop) {
    start = start.charCodeAt(0);
    stop = stop.charCodeAt(0);
    return (start < 0 || start > 126 || stop < 0 || stop > 126) ? null : data.slice(start,stop+1);
  };
})();
console.log(String.fromCharCode(126))
ascii_range('A','~').join();

console.log(ascii_range)

function password() {
    var text = document.getElementById('text')
    var text = text.value.split('')
    console.log('text')
    for (n=0; n<text.length; n++) {

    }
    for (i=0; i<text.length; i++) {

    }
    console.log('done.')
}
