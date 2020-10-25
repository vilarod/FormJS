function validarForm() {
    let el1= document.getElementById("email").value;
    let el2= document.getElementById("clave").value;
    if(el1 == "" ){
        alert("El usuario debe completarse con un email válido");
    }else if(el1.indexOf('@',0)==-1){
        alert("El email debe contener @");
    }else if(el2 == "" ){
        alert("La contraseña no debe estar vacía");
    }else{
    alert("todos los campos están correctos");
    document.test.submit(); 
    }   
}
