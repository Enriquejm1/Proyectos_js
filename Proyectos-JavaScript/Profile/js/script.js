const data={
name:"Enrique Juarez Mendoza",
desc:"Programador en Backend y fronted, Amante de la Musica Rock",
email:"kikeparki@gmail.com",
phone:" (52) "+ 7299663509
}

function loadUserProfile(data){
    document.getElementById("userName").textContent= data.name;
    document.getElementById("userDescripcion").textContent= data.desc;
    document.getElementById("userEmail").textContent= data.email;
    document.getElementById("userphone").textContent= data.phone;
}

document.addEventListener("DOMContentLoaded", function(){
    loadUserProfile(data);
})