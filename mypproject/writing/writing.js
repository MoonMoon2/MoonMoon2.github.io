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