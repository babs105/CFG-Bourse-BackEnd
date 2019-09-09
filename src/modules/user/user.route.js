const express = require("express");

const router = express.Router();

const Ctrl = require('./user.controller');

router.get('/', Ctrl.list);
// router.get('/:id', Ctrl.read);
router.post('/login', Ctrl.login);
router.post('/register', Ctrl.register);
router.put('/:id', Ctrl.update);
router.delete('/:id', Ctrl.delete);

module.exports.route = router;