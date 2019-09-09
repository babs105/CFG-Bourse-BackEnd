
const Tache = require('./tache.model').tacheModel;
module.exports = {
    list: (req, res) => {
        Tache.find({}, { __v: 0 }, (err, taches) => {
            res.json({
                status: "succes",
                response: taches

            });
        });
    },
    create: (req, res) => {
        let tache = new Tache(req.body);

        tache.save((err, tache) => {
            if (err) {
                res.status(500).json({
                    status: "error",
                    message: err
                });
            }
            res.json({
                status: "succes",
                response: tache

            });


        });
    },
    read: (req, res) => {
        Tache.findOne({ _id: req.params.id }, { __v: 0 }, (err, tache) => {
            res.json({
                status: "success",
                response: tache
            });
        });


    },
    update: (req, res) => {
        Tache.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true },
            (err, tache) => {
                res.json({
                    status: "success",
                    response: tache
                })
            })

    },
    delete: (req, res) => {
        Tache.findOneAndDelete({ _id: req.params.id }, (err, message) => {

            res.json({

                status: "success",
                response: message
            });
        });
    }
}  

// module.exports = {
//     list: (req, res) => {
//         let taches = require("./tache.service").listAllTache();
//         res.json({
//             status: "succes",
//             response: taches

//         });

//     },
//     read: (req, res) => {
//         let tache = require("./tache.service").listTache(parseInt(req.params.id));
//         console.log("tache", tache);
//         res.json({
//             status: "success",
//             response: tache
//         });
//     },
//     create: (req, res) => {
//         let tache = require("./tache.service").addTache(req.body)

//         res.json({
//             status: "succes",
//             response: tache

//         });
//     },
//     update: (req, res) => {
//         let tache = require("./tache.service").updateTache(req.body)
//         res.json({
//             status: "success",
//             response: tache
//         })

//     },
//     delete: (req, res) => {
//         let tache = require("./tache.service").delete(parseInt(req.params.id))
//         res.json({
//             status: "success",
//             response: tache
//         })

//     }
// }