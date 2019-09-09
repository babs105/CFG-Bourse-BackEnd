const mongoose = require("mongoose");
const Tache=require("../modules/tache/tache.model").tacheModel

module.exports = function () {
    return {
        connectBd,
        createTaches
    }
    
}
const connectBd = () =>{
    return mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
}

const createTaches = () => {

    const tache1 = new Tache({
        titre: 'Manger et boire',
        etat: 'A faire',
    });
    const tache2 = new Tache({
        titre: 'Programmer',
        etat: 'En cours',
    });
    const tache3 = new Tache({
        titre: 'Dormir',
        etat: 'Terminer',
    });
     tache1.save();
     tache2.save();
     tache3.save();
}