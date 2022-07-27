function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
    var nameEQ = name ;
    var ca = document.cookie.split(';');
    var i;
    for(i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
}

function loaded() {
    try {
        var p = getCookie('prevclout')
        var p = p.slice(1)
        var p = p.split('|')
        for (i = 0; i < p.length; i++) {
            var pclout = document.createElement('li')
            var t = document.createTextNode(p[i]);
            pclout.appendChild(t);
            document.getElementById("pastclout").insertBefore(pclout, document.getElementById("pastclout").firstChild)
        }
    } catch (TypeError){

    }

}

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

        var r2 = new Array('ab', 'cl', 'id', 'vs', 'sos', '100', 'atm', 'wc', 'abc', 'ng', 'ok', 'll')
        var g2 = new Array('🆎', '🆑', '🆔', '🆚', '🆘', '💯', '🏧', '🚾', '🔤', '🆖', '🆗', '⏸')
        for (i = 0; i < r2.length; i++) {
            var ntext = ntext.toLowerCase().replace(r2[i], g2[i])
        }
        var r = new Array('a', 'b', 'o', 't', 'c', 'u', 'v', '2', 'm', 'n', 'x', 'p', '!', '?', 'i', 'h', 'g', 'w')
        var g = new Array('🅰️', '🅱️', '🅾️', '✝️', '☪️', '⛎', '♈️', '♊️', '♍️', '♑️', '❌', '🅿️', '❗️', '❓', 'ℹ️', '🈶', '🈺', '〰')
        for (i = 0; i < ntext.length; i++) {
            for (n = 0; n < r.length; n++) {
                if (ntext[i].toLowerCase() == r[n]) {
                    ntext = ntext.substring(0, i) + g[n] + ntext.substring((i + 1));
                }
            }

        }
    }
    document.getElementById("ctext").value = ntext

    var t = getCookie('prevclout')
    try {
        var t = t.split('|')
    } catch (TypeError){
        var t = new Array()
    }
    t.push(ntext)
    var pclout = document.createElement('li')
    var c = document.createTextNode(ntext);
    pclout.appendChild(c);
    document.getElementById("pastclout").insertBefore(pclout, document.getElementById("pastclout").firstChild)
    var t = t.join('|')
    var t = t.replace('=', '')
    setCookie('prevclout', t, '365')
}
