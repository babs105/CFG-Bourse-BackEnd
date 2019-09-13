const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const userSchema = new mongoose.Schema({
    login: { type: String, unique: true },
    password: { type: String, required: true },
    genre: { type: String, required: false },
    prenom: { type: String, required: false },
    nom: { type: String, required: false },
    situationPro: { type: String, require: false },
    dateNaissance: { type: Date, required: false },
    lieuNaissance: { type: String, required: false },
    nationalite: { type: String, required: false },
    pays: { type: String, required: false },
    ville: { type: String, required: false },
    region: { type: String, required: false },
    adresse: { type: String, required: false },
    telephone: { type: String, required: false },
    photo: { type: String, required: false },
    cni: { type: String, required: false },
    facture: { type: String, required: false },
    convention: { type: String, required: false },
    etatDossier: { type: Boolean, required: false },
    etatPhoto: { type: Boolean, required: false },
    etatFacture: { type: Boolean, required: false },
    etatCni: { type: Boolean, required: false },
    etatConvention: { type: Boolean, required: false }

});
module.exports.userModel = mongoose.model("User", userSchema);