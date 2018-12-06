// Declare main variables //
var ctab = document.getElementsByClassName('ctab')
var cfill = document.getElementsByClassName('ctabf')
var audio = document.getElementsByClassName("audio");

function onLoad() {
    console.log('onload')
}


function cShow(arg) {
    var i;
    for (i = 0; i < 21; i++) {
        ctab[i].setAttribute("hidden", "true");
        ctab[i].removeAttribute("style")
    }
    cfill[0].setAttribute("hidden", "true")
    switch (arg) {
        case 1:
            ctab[0].removeAttribute("hidden")
            ctab[0].setAttribute("style", "display:table-cell;")
            break
        case 2:
            ctab[1].removeAttribute("hidden")
            ctab[1].setAttribute("style", "display:table-cell;")
            break
        case 3:
            ctab[2].removeAttribute("hidden")
            ctab[2].setAttribute("style", "display:table-cell;")
            break
        case 4:
            ctab[3].removeAttribute("hidden")
            ctab[3].setAttribute("style", "display:table-cell;")
            break
        case 5:
            ctab[4].removeAttribute("hidden")
            ctab[4].setAttribute("style", "display:table-cell;")
            break
        case 6:
            ctab[5].removeAttribute("hidden")
            ctab[5].setAttribute("style", "display:table-cell;")
            break
        case 7:
            ctab[6].removeAttribute("hidden")
            ctab[6].setAttribute("style", "display:table-cell;")
            break
        case 8:
            ctab[7].removeAttribute("hidden")
            ctab[7].setAttribute("style", "display:table-cell;")
            break
        case 9:
            ctab[8].removeAttribute("hidden")
            ctab[8].setAttribute("style", "display:table-cell;")
            break
        case 10:
            ctab[9].removeAttribute("hidden")
            ctab[9].setAttribute("style", "display:table-cell;")
            break
        case 11:
            ctab[10].removeAttribute("hidden")
            ctab[10].setAttribute("style", "display:table-cell;")
            break
        case 12:
            ctab[11].removeAttribute("hidden")
            ctab[11].setAttribute("style", "display:table-cell;")
            break
        case 13:
            ctab[12].removeAttribute("hidden")
            ctab[12].setAttribute("style", "display:table-cell;")
            break
        case 14:
            ctab[13].removeAttribute("hidden")
            ctab[13].setAttribute("style", "display:table-cell;")
            break
        case 15:
            ctab[14].removeAttribute("hidden")
            ctab[14].setAttribute("style", "display:table-cell;")
            break
        case 16:
            ctab[15].removeAttribute("hidden")
            ctab[15].setAttribute("style", "display:table-cell;")
            break
        case 17:
            ctab[16].removeAttribute("hidden")
            ctab[16].setAttribute("style", "display:table-cell;")
            break
        case 18:
            ctab[17].removeAttribute("hidden")
            ctab[17].setAttribute("style", "display:table-cell;")
            break
        case 19:
            ctab[18].removeAttribute("hidden")
            ctab[18].setAttribute("style", "display:table-cell;")
            break
        case 20:
            ctab[19].removeAttribute("hidden")
            ctab[19].setAttribute("style", "display:table-cell;")
            break
        case 21:
            ctab[20].removeAttribute("hidden")
            ctab[20].setAttribute("style", "display:table-cell;")
            break
    }
}
// Scrolling tacking
window.onscroll = function() {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").className = "hidden";
        document.getElementById("sitehead").className = "hidden";
        document.getElementById("social").className = "hiddensocial";
        document.getElementById("sitetitle").className = "hidden";
        document.getElementById("myphead").className = "movedmyp";
        document.getElementById("wip").className = "movedwip";
    } else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) {
        document.getElementById("header").removeAttribute("class");
        document.getElementById("sitehead").removeAttribute("class");
        document.getElementById("social").removeAttribute("class");
        document.getElementById("sitetitle").removeAttribute("class");
        document.getElementById("myphead").removeAttribute("class");
        document.getElementById("wip").removeAttribute("class");
    }
}






/* kept incase it's needed
function chide(arg) {
    cfill[0].removeAttribute("hidden")
    switch (arg) {
        case 1:
            ctab[0].setAttribute("hidden", "true")
            ctab[0].removeAttribute("style")
            break
        case 2:
            ctab[1].setAttribute("hidden", "true")
            ctab[1].removeAttribute("style")
            break
        case 3:
            ctab[2].setAttribute("hidden", "true")
            ctab[2].removeAttribute("style")
            break
        case 4:
            ctab[3].setAttribute("hidden", "true")
            ctab[3].removeAttribute("style")
            break
        case 5:
            ctab[4].setAttribute("hidden", "true")
            ctab[4].removeAttribute("style")
            break
        case 6:
            ctab[5].setAttribute("hidden", "true")
            ctab[5].removeAttribute("style")
            break
        case 7:
            ctab[6].setAttribute("hidden", "true")
            ctab[6].removeAttribute("style")
            break
        case 8:
            ctab[7].setAttribute("hidden", "true")
            ctab[7].removeAttribute("style")
            break
        case 9:
            ctab[8].setAttribute("hidden", "true")
            ctab[8].removeAttribute("style")
            break
        case 10:
            ctab[9].setAttribute("hidden", "true")
            ctab[9].removeAttribute("style")
            break
        case 11:
            ctab[10].setAttribute("hidden", "true")
            ctab[10].removeAttribute("style")
            break
        case 12:
            ctab[11].setAttribute("hidden", "true")
            ctab[11].removeAttribute("style")
            break
        case 13:
            ctab[12].setAttribute("hidden", "true")
            ctab[12].removeAttribute("style")
            break
        case 14:
            ctab[13].setAttribute("hidden", "true")
            ctab[13].removeAttribute("style")
            break
        case 15:
            ctab[14].setAttribute("hidden", "true")
            ctab[14].removeAttribute("style")
            break
        case 16:
            ctab[15].setAttribute("hidden", "true")
            ctab[15].removeAttribute("style")
            break
        case 17:
            ctab[16].setAttribute("hidden", "true")
            ctab[16].removeAttribute("style")
            break
        case 18:
            ctab[17].setAttribute("hidden", "true")
            ctab[17].removeAttribute("style")
            break
        case 19:
            ctab[18].setAttribute("hidden", "true")
            ctab[18].removeAttribute("style")
            break
        case 20:
            ctab[19].setAttribute("hidden", "true")
            ctab[19].removeAttribute("style")
            break
        case 21:
            ctab[20].setAttribute("hidden", "true")
            ctab[20].removeAttribute("style")
            break
    }
}
*/
