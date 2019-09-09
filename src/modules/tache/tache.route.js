const express = require("express");

const router = express.Router();

const Ctrl = require('./tache.controller');

router.get('/', Ctrl.list);
router.get('/:id', Ctrl.read);
router.post('/', Ctrl.create);
router.put('/:id', Ctrl.update);
router.delete('/:id', Ctrl.delete);

module.exports.route = router;