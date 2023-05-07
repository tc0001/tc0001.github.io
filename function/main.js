function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}








function darkMode() {
    var dark = document.body;
    const darkmode = document.getElementById('dark-mode');
    dark.classList.toggle("dark-mode");

    var darkicon = document.getElementById("dark-image");
    if (darkicon.src.match("/images/dark.png")) {
        darkicon.src = "images/light-mode.png";
        darkmode.title = "Light Mode";
    } else {
        darkicon.src = "images/dark.png";
        darkmode.title = "Dark Mode";
    }

}