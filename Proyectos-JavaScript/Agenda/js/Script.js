const contactForm = document.getElementById("contactFrom").addEventListener("submit", 
    function(e){
        e.preventDefault();
        const name = document.getElementById("contactName").value;
        const phone = document.getElementById("contacTel").value;
        const dateS = document.getElementById("contacDate").value;
        const TimeS = document.getElementById("contactTime").value;


        const listItem = document.createElement('li');
        listItem.textContent= `Nombre: ${name}; Telefono:${phone};Fecha:${dateS};Hora:${TimeS}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent="Eliminar Paciente";
        deleteBtn.addEventListener('click',
            function(){
                listItem.remove();
            });
            listItem.appendChild(deleteBtn);
            document.getElementById("contactList").appendChild(listItem);
    }
)

document.getElementById("searchinput").addEventListener("input",function(e){
    const search = e.target.value.toLowerCase();
    const contact = document.querySelectorAll("#contactList li");

    contact.forEach(contact=>{
        if(contact.textContent.toLocaleLowerCase().includes(search)){
            contact.style.display="";
        }else{
       contact.style.display = "none";
        }
    })
})