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
         consumirJSON(this)
    }
  };
  
    xhttp.open("GET", "data/datos.json", true)
    xhttp.send()
    }
    
    
    function consumirJSON(respuestaTXT)
    {
        var objJson = JSON.parse(respuestaTXT.responseText);
        
        var estructuraHTML;
        var i= 0; 
        var fondo= ["#ff6666", "#85e085", "#4d94ff","#ff6666", "#85e085", "#4d94ff" ];
        div_Demo.innerHTML="";
        
        for (i in objJson.notas)
        { 
            estructuraHTML= ""
            estructuraHTML+= "Nota " + i + ": <br>"
            estructuraHTML += "Para: " + objJson.notas[i].para+ "<br>"
            estructuraHTML += "De: " + objJson.notas[i].de + "<br>"
            estructuraHTML += "Mensaje: " + objJson.notas[i].cuerpo + "<br><br><br>"
            var nuevoDiv = document.createElement("div")
            nuevoDiv.innerHTML= estructuraHTML;
            nuevoDiv.style.backgroundColor=fondo[i];
            nuevoDiv.style.fontFamily="Arial";
            nuevoDiv.style.width="500px";
            div_Demo.appendChild(nuevoDiv);
  }
    
    }
}