document.addEventListener('DOMContentLoaded',function(){
    var f1 = document.querySelector("#registro.html");
    
    f1.onsubmit = function(e){ 
        a.preventDefault();
        var nombre = document.getElementById("txtnombre"). value;
        var apellido = document.getElementById("txtapellido"). value;
        var telefono = document.getElementById("txttelefono"). value;
        var password = document.getElementById("txtpassword"). value;
        var correo = document.getElementById("txtcorreo"). value;




        if (nombre =='' || apellido ==''  || telefono =='' || password ==''  || correo =='')
        {
            alert("error, debe ingresar la contraseña");
            return false;
        }
        var request = (window.XMLHttpRequest) ? new XMLHttpRquest() : new ActiveXObject('microsoft.XMLHTTP ');
        var ajaxUrl = "http://localhos/registro.html";
        var formData = new formData(f1);
        request.open("POST",ajaxUrl,true );
        request.send(formData);

        request.onreadystatechange = function(){
            if(request.readyState == 4 && request.status == 200){
                var objData = JSON.parse(request.responsetext);
                if(objData.status){
                    alert("mensaje", objData.msg);
                }else{
                    alert("error", objData.msg);
                }    
                

            }
        }

    }

})
