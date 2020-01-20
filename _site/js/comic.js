// Declare main variables //
var ctab = document.getElementsByClassName('ctab')
var cfill = document.getElementsByClassName('ctabf')
var audio = document.getElementsByClassName("audio");

function onLoad() {
    console.log('onload')
}


function cShow(arg) {
    var i;
    arg -= 1
    console.log(arg)
    for (i = 0; i < 8; i++) {
        ctab[i].setAttribute("hidden", "true");
        ctab[i].removeAttribute("style");
    }
    cfill[0].setAttribute("hidden", "true");
    ctab[arg].removeAttribute("hidden");
    ctab[arg].setAttribute("style", "display:table-cell;");
}

// Scrolling tracking
// Consider adding some kind of custom scroll progress tracking bar
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {

}
// Example from another page on this site
/*
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
*/





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
