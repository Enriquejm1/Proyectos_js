const express = require("express");
const Service = require("./src/service");
const app = express();
const PORT = 2000;
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Lista de usuarios",
    body: Service.getUsers(),
  });
});

app.get("/:id", (req, res) => {
  //let id = req.params.id;
  let {
    params: { id },
  } = req;
  let user = Service.getUser(id);
  res.json({
    message: `Usuario ${id}`,
    body: user,
  });
});

app.put("/:id", (req, res) => {
  let {
    params: { id },
  } = req;
  let Users = req.body;
  let user = Service.getUser(id);
  if (!user) {
    return res.status(404).json({
      message: `Usuario ${id} no encontrado`,
    });
  }
  res.json({
    message: `Usuario ${id} Modificado Correctamente`,
    body: Service.modificarUser(user, Users),
  });
});

app.delete("/:id", (req, res) => {
  let {
    params: { id },
  } = req;
  let user = Service.getUser(id);
  if (!user) {
    return res.status(404).json({
      message: `Usuario ${id} no encontrado`,
    });
  }

  res.json({
    message: `Usuario ${id} Eliminado Correctamente`,
    body: Service.eliminarUser(id),
  });
});

app.post("/", (req, res) => {
  let newUser = req.body;
  res.status(201).json({
    message: "Usuario fue creado",
    body: Service.createUser(newUser),
  });
});

app.listen(PORT, () => {
  console.log(`Servidor eschuchando en http://localhost:${PORT}`);
});
