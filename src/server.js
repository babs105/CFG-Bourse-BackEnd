

require("dotenv/config");

const express = require("express"),
    app = express(),
    cors = require("cors"),
    bodyParser = require("body-parser");




app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create link to Angular build directory
var distDir = __dirname + "/../dist/";
console.log(distDir);
app.use(express.static(distDir));

app.get('/', (req, res) => {

    res.status(200).json({
        response: "Bienvenue ici test"
    })

});

// monter routes

app.use('/user', require("./modules/user/user.route").routeUser);
app.use('/compte', require("./modules/compte/compte.route").routeCompte);
app.use('/profilage', require("./modules/profilage/profilage.route").routeProfilage);


app.use(function (req, res) {
    res.status(404).send("OUPS PAGE INTROUVABLE");
});



// appel service base de donnees
const dbServices = require('./services/db.services')();
const eraseDatabaseOnSync = true
dbServices.connectBd().then(async () => {

    if (eraseDatabaseOnSync) {
        await Promise.all([

            require("./modules/tache/tache.model").tacheModel.deleteMany({}),
        ]);
    }

    dbServices.createTaches();
    app.listen(process.env.PORT | 9999, () =>
        console.log(`Serveur Demarre au port: ${process.env.PORT}`)
    )
}).catch(err => {
    console.log(`MongoDB connection error: ${err}`);
    process.exit(1);
});

