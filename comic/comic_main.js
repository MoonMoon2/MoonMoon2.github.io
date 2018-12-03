// show tabs for each chracter when you hover over it //
// 1) Define character tabs //
// Is there a way to set up a nest of them? ctab.rick as a variable?
var ctab = document.getElementsByClassName('ctab')
var i;
function onLoad() {
    console.log('onload')
    for (i = 0; i < ctab.length; i++) {
        console.log(i)
        ctab[i].setAttribute("style", "color:#000000;top:180px;height:50px;width:20px;background-color:#333333");
    }
}


function cShow(arg) {
    switch (arg) {
        case 1:
            ctab[0].setAttribute("hidden", "false")
            break
        case 2:
            ctab[1].setAttribute("hidden", "false")
            break
        case 3:
            ctab[2].setAttribute("hidden", "false")
            break
        case 4:
            ctab[3].setAttribute("hidden", "false")
            break
        case 5:
            ctab[4].setAttribute("hidden", "false")
            break
        case 6:
            ctab[5].setAttribute("hidden", "false")
            break
        case 7:
            ctab[6].setAttribute("hidden", "false")
            break
        case 8:
            ctab[7].setAttribute("hidden", "false")
            break
        case 9:
            ctab[8].setAttribute("hidden", "false")
            break
        case 10:
            ctab[9].setAttribute("hidden", "false")
            break
        case 11:
            ctab[10].setAttribute("hidden", "false")
            break
        case 12:
            ctab[11].setAttribute("hidden", "false")
            break
        case 13:
            ctab[12].setAttribute("hidden", "false")
            break
        case 14:
            ctab[13].setAttribute("hidden", "false")
            break
        case 15:
            ctab[14].setAttribute("hidden", "false")
            break
        case 16:
            ctab[15].setAttribute("hidden", "false")
            break
        case 17:
            ctab[16].setAttribute("hidden", "false")
            break
        case 18:
            ctab[17].setAttribute("hidden", "false")
            break
        case 19:
            ctab[18].setAttribute("hidden", "false")
            break
        case 20:
            ctab[19].setAttribute("hidden", "false")
            break
        case 21:
            ctab[20].setAttribute("hidden", "false")
            break
    }
}
function chide() {
    switch (arg) {
        case 1:
            ctab[0].setAttribute("hidden", "true")
            break
        case 2:
            ctab[1].setAttribute("hidden", "true")
            break
        case 3:
            ctab[2].setAttribute("hidden", "true")
            break
        case 4:
            ctab[3].setAttribute("hidden", "true")
            break
        case 5:
            ctab[4].setAttribute("hidden", "true")
            break
        case 6:
            ctab[5].setAttribute("hidden", "true")
            break
        case 7:
            ctab[6].setAttribute("hidden", "true")
            break
        case 8:
            ctab[7].setAttribute("hidden", "true")
            break
        case 9:
            ctab[8].setAttribute("hidden", "true")
            break
        case 10:
            ctab[9].setAttribute("hidden", "true")
            break
        case 11:
            ctab[10].setAttribute("hidden", "true")
            break
        case 12:
            ctab[11].setAttribute("hidden", "true")
            break
        case 13:
            ctab[12].setAttribute("hidden", "true")
            break
        case 14:
            ctab[13].setAttribute("hidden", "true")
            break
        case 15:
            ctab[14].setAttribute("hidden", "true")
            break
        case 16:
            ctab[15].setAttribute("hidden", "true")
            break
        case 17:
            ctab[16].setAttribute("hidden", "true")
            break
        case 18:
            ctab[17].setAttribute("hidden", "true")
            break
        case 19:
            ctab[18].setAttribute("hidden", "true")
            break
        case 20:
            ctab[19].setAttribute("hidden", "true")
            break
        case 21:
            ctab[20].setAttribute("hidden", "true")
            break
    }
}
