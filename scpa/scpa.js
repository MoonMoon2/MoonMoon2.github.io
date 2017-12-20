function cloutify() {
    var ntext = document.getElementById("ntext").value;
    var clevel = document.getElementById('clevel').value;
    if (clevel == '0') {
        var r0 = new Array('ab', 'a', 'b')
        var g0 = new Array('🆎', '🅰️', '🅱️')
        for (i = 0; i < r0.length; i++) {
            var ntext = ntext.toLowerCase().replace(r0[i], g0[i])
        }
    } else if (clevel == '1') {
        var r1 = new Array('ab', 'a', 'b', 'cl', 'o', '100')
        var g1 = new Array('🆎', '🅰️', '🅱️', '🆑', '🅾️', '💯')
        for (i = 0; i < r1.length; i++) {
            var ntext = ntext.toLowerCase().replace(r1[i], g1[i])
        }
    } else if (clevel == '2') {
        var r2 = new Array('ab', 'cl', 'id', 'vs', 'sos', '100', 'atm', 'wc', 'abc', 'ng', 'ok', 'a', 'b', 'o', 't', 'c', 'u', 'v', '2', 'm', 'n', 'x', 'p', '!', '?', 'i')
        var g2 = new Array('🆎', '🆑', '🆔', '🆚', '🆘', '💯', '🏧', '🚾', '🔤', '🆖', '🆗', '🅰️', '🅱️', '🅾️', '✝️ ', '☪️', '⛎', '♈️', '♊️', '♍️', '♑️', '❌', '🅿️', '❗️', '❓', 'ℹ️')
        for (i = 0; i < r2.length; i++) {
            var ntext = ntext.toLowerCase().replace(r2[i], g2[i])
        }
    } else if (clevel == '3') {

    var r2 = new Array('ab', 'cl', 'id', 'vs', 'sos', '100', 'atm', 'wc', 'abc', 'ng', 'ok')
    var g2 = new Array('🆎', '🆑', '🆔', '🆚', '🆘', '💯', '🏧', '🚾', '🔤', '🆖', '🆗')
    for (i = 0; i < r2.length; i++) {
        var ntext = ntext.toLowerCase().replace(r2[i], g2[i])
    }
    var r = new Array('a', 'b', 'o', 't', 'c', 'u', 'v', '2', 'm', 'n', 'x', 'p', '!', '?', 'i')
    var g = new Array('🅰️', '🅱️', '🅾️', '✝️ ', '☪️', '⛎', '♈️', '♊️', '♍️', '♑️', '❌', '🅿️', '❗️', '❓', 'ℹ️')
    for (i = 0; i < ntext.length; i++) {
        for (n = 0; n < r.length; n++) {
            if (ntext[i].toLowerCase() == r[n]) {
                ntext = ntext.substring(0, i) + g[n] + ntext.substring((i + 1));
            }
        }

    }
}
    document.getElementById("ctext").value = ntext
    window.location.href = "prev.php?ntext=" + ntext;

}
/*var str = "Visit Microsoft!";
var str = str.replace("Microsoft", "W3Schools");*/
