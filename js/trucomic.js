function onScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").setAttribute("hidden", "true");
    } else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) {
        document.getElementById("header").setAttribute("hidden", "false");
    }

}
