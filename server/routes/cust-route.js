const express = require('express');

const custCtrl = require('../controllers/cust-ctrl');

const router = express.Router();

router.post('/c', custCtrl.createCust);
router.put('/u/:id', custCtrl.updateCust);
router.delete('/d/:id', custCtrl.deactivateCust);
router.get('/f/:id', custCtrl.getCustByOrgId);
router.get('/a', custCtrl.getCustAll);

module.exports = router;