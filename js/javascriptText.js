// JavaScript File
window.onload=function(){
    
    var btn_Cambiar = document.getElementById("Cambiar");
    
    btn_Cambiar.addEventListener("click", cambiarTexto); 
    
    var div_Demo= document.getElementById("demo");
    
    function cambiarTexto()
    {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
         div_Demo.innerHTML= xhttp.responseText;
    }
  };
  
    xhttp.open("GET", "data/contenido.txt", true);
    xhttp.send();
    }
}