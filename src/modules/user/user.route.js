const express = require("express");

const router = express.Router();

const Ctrl = require('./user.controller');

router.get('/', Ctrl.list);
// router.get('/:id', Ctrl.read);
router.post('/login', Ctrl.login);
router.post('/register', Ctrl.register);
router.put('/:id', Ctrl.update);
router.delete('/:id', Ctrl.delete);
router.put('/:userId/attach-photo', Ctrl.attachPhoto)
router.put('/:userId/attach-cni', Ctrl.attachCni)
router.put('/:userId/attach-facture', Ctrl.attachFacture)
router.put('/:userId/ouvrir-compte', Ctrl.ouvrirCompte);

module.exports.route = router;