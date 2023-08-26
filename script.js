
let colapso = document.getElementsByClassName("colapso");
let i;

for (i = 0; i < colapso.length; i++) {
    colapso[i].addEventListener("click",function () {
        this.classList.toggle("active");
        let contenido =this.nextElementSibling;
        if (contenido.style.display=== "block") {
            contenido.style.display ="none";
        } else {
            contenido.style.display ="block";
        }
    });
}
