var active = false;

function displayBio() {
    var container = document.getElementById("container");
    if(active == false) {
        container.style.display = "block";
        var active = true;
    } else {
        container.style.display = "none";
        var active = false;
    }
}