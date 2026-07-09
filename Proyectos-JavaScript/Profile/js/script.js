const data = {
  name: "Enrique Juárez Mendoza",
  desc: "Ingeniero en Computación.",
  email: "kikesparkin@gmail.com",
  phone: " (52) " + 7293552196,
};

function loadUserProfile(data) {
  document.getElementById("userName").textContent = data.name;
  document.getElementById("userDescripcion").textContent = data.desc;
  document.getElementById("userEmail").textContent = data.email;
  document.getElementById("userphone").textContent = data.phone;
}

document.addEventListener("DOMContentLoaded", function () {
  loadUserProfile(data);
});
