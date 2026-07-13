var coll = document.getElementsByClassName("collapsible");

  coll[0].addEventListener("click", function() {
    this.classList.toggle("active");
    var cont = document.getElementsByClassName("content");
    var i;
    for (i = 0; i < cont.length; i++) {
        if (cont[i].style.display === "block") {
        cont[i].style.display = "none";
        } else {
        cont[i].style.display = "block";
        }
    }
  });
