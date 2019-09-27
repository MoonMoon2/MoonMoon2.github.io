var ascii_range = (function() {
  var data = [];
  while (data.length < 128) data.push(String.fromCharCode(data.length));
  return function (start,stop) {
    start = start.charCodeAt(0);
    stop = stop.charCodeAt(0);
    return (start < 0 || start > 127 || stop < 0 || stop > 127) ? null : data.slice(start,stop+1);
  };
})();
console.log(String.fromCharCode(127))
ascii_range('A','Z').join();


function password(text,key) {

}
