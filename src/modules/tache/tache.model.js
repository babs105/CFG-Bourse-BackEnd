const mongoose = require("mongoose");
const tacheSchema = new mongoose.Schema({
    titre: { type: String, required: true },
    etat: { type: String, required: true }
});

module.exports.tacheModel = mongoose.model("Tache", tacheSchema);