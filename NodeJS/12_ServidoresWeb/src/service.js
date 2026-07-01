const data = require("./MOCK_DATA.json");
//Modulos en node

module.exports = {
    getUser: (id) => {
        let identificador = Number(id);
        let usr = data.filter((person)=>person.id===identificador)[0];
        return usr;
    },
    getUsers: ()=> data,
    createUser: (dataUser)=>{
        let newUser = {
            id: data.length +1,
            ...dataUser,
        }
        data.push(newUser);
        return newUser;
    },
     modificarUser(user, datos) {
        Object.assign(user, datos);
        return user;
    },
    eliminarUser(id) {
        let identificador = Number(id);
        const index = data.findIndex(user => user.id == identificador);
        if (index !== -1) {
            data.splice(index, 1);
        }
        return data;
    }
};



