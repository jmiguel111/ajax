// JavaScript File
// JavaScript File
window.onload=function(){
    
    var btn_Cambiar = document.getElementById("Cambiar")    
    btn_Cambiar.addEventListener("click", cambiarTexto)    
    var div_Demo= document.getElementById("demo")
    
    function cambiarTexto()
    {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         consumirXML(this)
    }
  };
  
    xhttp.open("GET", "data/notas.xml", true)
    xhttp.send()
    }
    
    
    function consumirXML(respuestaXML)
    {
        var xmlDoc = respuestaXML.responseXML;
        var nodo = xmlDoc.getElementsByTagName("nota")
        var estructuraHTML;
        var i
        var fondo= ["#ff6666", "#85e085", "#4d94ff", "#ff6666", "#85e085", "#4d94ff", "#ff6666", "#85e085", "#4d94ff"];
        div_Demo.innerHTML="";
        for ( i = 0; i < nodo.length; i++) { 
            estructuraHTML= ""
            estructuraHTML+= "Nota " + i + ": <br>"
            estructuraHTML += "Para: " + nodo[i].getElementsByTagName("para")[0].childNodes[0].nodeValue + "<br>"
            estructuraHTML += "De: " + nodo[i].getElementsByTagName("de")[0].childNodes[0].nodeValue + "<br>"
            estructuraHTML += "Mensaje: " + nodo[i].getElementsByTagName("cuerpo")[0].childNodes[0].nodeValue + "<br><br><br>"
            var nuevoDiv = document.createElement("div")
            nuevoDiv.innerHTML= estructuraHTML;
            nuevoDiv.style.backgroundColor=fondo[i];
            nuevoDiv.style.fontFamily="Arial";
            nuevoDiv.style.width="500px";
            div_Demo.appendChild(nuevoDiv);
  }
    
    }
}