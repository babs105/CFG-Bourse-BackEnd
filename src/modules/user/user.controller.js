const Bcrypt = require("bcryptjs");
const User = require('./user.model').userModel;
module.exports = {
    list: (req, res) => {
        User.find({}, { __v: 0 }, (err, users) => {
            res.json({
                status: "succes",
                response: users

            });
        });
    },
    register: (req, res) => {
        req.body.password = Bcrypt.hashSync(req.body.password, 10);
        let user = new User(req.body);

        user.save((err, user) => {
            if (err) {
                res.status(500).json({
                    status: "error",
                    message: err
                });
            }
            res.json({
                status: "success",
                response: user

            });

        });
    },
    read: (req, res) => {
        User.findOne({ _id: req.params.id }, { __v: 0 }, (err, user) => {
            res.json({
                status: "success",
                response: user
            });
        });


    },
    update: (req, res) => {
        User.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true },
            (err, ) => {
                res.json({
                    status: "success",
                    response: user
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
    },
    login: (req, res) => {

        User.findOne({ login: req.body.login }, (err, user) => {
            if (user && (Bcrypt.compareSync(req.body.password, user.password))) {

                if (err) {
                    res.status(500).json({
                        status: "error",
                        response: err
                    });
                }
                res.json({
                    status: "success",
                    response: user
                });
            }
            else if (!user) {
                res.json({
                    status: "error",
                    response: "user not found"
                });
            }
            else if (!Bcrypt.compareSync(req.body.password, user.password)) {
                res.json({
                    status: "error",
                    response: "Mot de passe Invalid"
                });

            } else {
                res.json({
                    status: "error",
                    response: "erreur identifiant"
                });
            }

        });

    }

}  